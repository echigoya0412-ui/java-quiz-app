// ===== Java Quiz App – booco-style Mobile UI =====
(function () {
  'use strict';

  // ---- Data Sections ----
  const sections = {
    practice1: { name: '練習問題 Part 1', icon: '📘', color: '#3B82F6', gradient: 'linear-gradient(135deg,#3B82F6,#2563EB)', questions: typeof questionsP1 !== 'undefined' ? questionsP1 : [] },
    practice2: { name: '練習問題 Part 2', icon: '📗', color: '#10B981', gradient: 'linear-gradient(135deg,#10B981,#059669)', questions: typeof questionsP2 !== 'undefined' ? questionsP2 : [] },
    mock:      { name: '模擬試験 Part 1',  icon: '📕', color: '#F59E0B', gradient: 'linear-gradient(135deg,#F59E0B,#D97706)', questions: typeof questionsP3 !== 'undefined' ? questionsP3 : [] },
    mock2:     { name: '模擬試験 Part 2',  icon: '📙', color: '#EF4444', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', questions: typeof questionsP4 !== 'undefined' ? questionsP4 : [] }
  };

  // ---- State ----
  let currentSection = 'practice1';
  let currentQIndex = 0;
  let userAnswers = loadState();

  function saveState() {
    try { localStorage.setItem('javaQuizAnswers', JSON.stringify(userAnswers)); } catch (e) { /* ignore */ }
  }
  function loadState() {
    try {
      const d = localStorage.getItem('javaQuizAnswers');
      return d ? JSON.parse(d) : {};
    } catch (e) { return {}; }
  }

  // ---- DOM Helpers ----
  const $ = id => document.getElementById(id);
  const $$ = sel => document.querySelectorAll(sel);

  // Screens
  const screens = {
    home: $('screen-home'),
    section: $('screen-section'),
    quiz: $('screen-quiz'),
    stats: $('screen-stats')
  };

  // ---- Screen Navigation ----
  function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[name].classList.add('active');

    // Update bottom nav
    $$('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name || (t.dataset.tab === 'quiz' && (name === 'section' || name === 'quiz'))));
  }

  // ---- Bottom Nav ----
  $$('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const t = tab.dataset.tab;
      if (t === 'home') { showScreen('home'); refreshHome(); }
      else if (t === 'quiz') { showScreen('section'); refreshSection(); }
      else if (t === 'stats') { showScreen('stats'); refreshStats(); }
    });
  });

  // ---- HOME SCREEN ----
  function refreshHome() {
    let totalQ = 0, totalAnswered = 0, totalCorrect = 0;
    Object.keys(sections).forEach(key => {
      const qs = sections[key].questions;
      let answered = 0, correct = 0;
      qs.forEach((_, i) => {
        const a = userAnswers[`${key}_${i}`];
        if (a && a.selected.length > 0) { answered++; if (a.isCorrect) correct++; }
      });
      totalQ += qs.length;
      totalAnswered += answered;
      totalCorrect += correct;

      // Mini progress
      const fill = $(`prog-${key}`);
      if (fill) fill.style.width = qs.length ? `${(answered / qs.length) * 100}%` : '0%';
      const cnt = $(`count-${key}`);
      if (cnt) cnt.textContent = `${answered}/${qs.length}`;
    });

    // Ring
    const pct = totalQ ? Math.round((totalAnswered / totalQ) * 100) : 0;
    $('home-ring-percent').textContent = pct;
    const circ = 2 * Math.PI * 52;
    $('home-ring-fill').style.strokeDashoffset = circ - (circ * pct / 100);

    $('home-total-answered').textContent = totalAnswered;
    $('home-total-correct').textContent = totalCorrect;
    $('home-accuracy').textContent = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) + '%' : '0%';
  }

  // Section card clicks
  $$('.section-card').forEach(card => {
    card.addEventListener('click', () => {
      currentSection = card.dataset.section;
      currentQIndex = 0;
      showScreen('section');
      refreshSection();
    });
  });

  // ---- SECTION DETAIL SCREEN ----
  function refreshSection() {
    const sec = sections[currentSection];
    const qs = sec.questions;
    $('section-title').textContent = sec.name;

    let answered = 0, correct = 0, wrong = 0;
    qs.forEach((_, i) => {
      const a = userAnswers[`${currentSection}_${i}`];
      if (a && a.selected.length > 0) { answered++; if (a.isCorrect) correct++; else wrong++; }
    });
    $('sec-answered').textContent = answered;
    $('sec-correct').textContent = correct;
    $('sec-wrong').textContent = wrong;
    $('sec-progress-fill').style.width = qs.length ? `${(answered / qs.length) * 100}%` : '0%';

    // Grid
    const grid = $('question-grid');
    grid.innerHTML = '';
    qs.forEach((_, i) => {
      const btn = document.createElement('button');
      btn.className = 'q-btn';
      btn.textContent = i + 1;
      const a = userAnswers[`${currentSection}_${i}`];
      if (a && a.selected.length > 0) btn.classList.add(a.isCorrect ? 'correct' : 'wrong');
      if (i === currentQIndex) btn.classList.add('current');
      btn.addEventListener('click', () => { currentQIndex = i; showScreen('quiz'); renderQuiz(); });
      grid.appendChild(btn);
    });

    // Start button text
    $('btn-start-section').textContent = answered > 0 ? '続きから学習する' : '学習を始める';
  }

  $('btn-back-home').addEventListener('click', () => { showScreen('home'); refreshHome(); });

  $('btn-start-section').addEventListener('click', () => {
    // Find first unanswered
    const qs = sections[currentSection].questions;
    let idx = 0;
    for (let i = 0; i < qs.length; i++) {
      if (!userAnswers[`${currentSection}_${i}`]) { idx = i; break; }
    }
    currentQIndex = idx;
    showScreen('quiz');
    renderQuiz();
  });

  $('btn-reset-section').addEventListener('click', () => {
    if (!confirm(`${sections[currentSection].name} の回答をリセットしますか？`)) return;
    const qs = sections[currentSection].questions;
    qs.forEach((_, i) => { delete userAnswers[`${currentSection}_${i}`]; });
    saveState();
    refreshSection();
  });

  // ---- QUIZ SCREEN ----
  function renderQuiz() {
    const qs = sections[currentSection].questions;
    const q = qs[currentQIndex];
    const key = `${currentSection}_${currentQIndex}`;
    const ans = userAnswers[key];

    // Progress
    $('quiz-counter').textContent = `${currentQIndex + 1} / ${qs.length}`;
    $('quiz-progress-fill').style.width = `${((currentQIndex + 1) / qs.length) * 100}%`;

    // Question
    $('quiz-q-number').textContent = `問題 ${q.id}`;
    $('quiz-select-badge').textContent = q.selectCount > 1 ? `${q.selectCount}つ選択` : '1つ選択';
    $('quiz-text').textContent = q.text;

    // Code
    if (q.code) {
      $('quiz-code-wrap').style.display = '';
      $('quiz-code').innerHTML = formatCode(q.code);
    } else {
      $('quiz-code-wrap').style.display = 'none';
    }

    // Command
    if (q.command) {
      $('quiz-cmd-wrap').style.display = '';
      $('quiz-cmd').textContent = q.command;
    } else {
      $('quiz-cmd-wrap').style.display = 'none';
    }

    // Options
    const optWrap = $('quiz-options');
    optWrap.innerHTML = '';
    q.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.label = opt.label;

      if (ans) {
        btn.classList.add('disabled');
        if (q.answers.includes(opt.label)) btn.classList.add('correct-answer');
        if (ans.selected.includes(opt.label) && !q.answers.includes(opt.label)) btn.classList.add('wrong-answer');
      }

      const resultMark = ans
        ? (q.answers.includes(opt.label) ? '✅' : (ans.selected.includes(opt.label) ? '❌' : ''))
        : '';

      btn.innerHTML = `
        <div class="option-marker">${opt.label}</div>
        <div class="option-label">${escapeHtml(opt.text)}</div>
        ${resultMark ? `<span class="option-result-mark">${resultMark}</span>` : ''}
      `;

      if (!ans) {
        btn.addEventListener('click', () => toggleOption(btn, q));
      }
      optWrap.appendChild(btn);
    });

    // Submit / Nav
    const submitBtn = $('btn-submit');
    const navRow = $('quiz-nav-row');
    if (ans) {
      submitBtn.style.display = 'none';
      navRow.style.display = 'flex';
    } else {
      submitBtn.style.display = '';
      submitBtn.disabled = true;
      navRow.style.display = 'none';
    }

    // Result
    const resultEl = $('quiz-result');
    if (ans && ans.selected.length > 0) {
      resultEl.style.display = 'flex';
      resultEl.className = `quiz-result ${ans.isCorrect ? 'correct' : 'wrong'}`;
      $('quiz-result-icon').textContent = ans.isCorrect ? '🎉' : '😣';
      $('quiz-result-text').textContent = ans.isCorrect ? '正解！' : '不正解...';
    } else {
      resultEl.style.display = 'none';
    }

    // Explanation
    const explEl = $('quiz-explanation');
    const toggleBtn = $('btn-toggle-explain');
    if (ans) {
      toggleBtn.style.display = 'flex';
      if (ans.showExplanation) {
        explEl.style.display = '';
        $('quiz-explanation-body').textContent = q.explanation;
        $('quiz-correct-answer').textContent = `✅ 正解: ${q.answers.join(', ')}`;
      } else {
        explEl.style.display = 'none';
      }
    } else {
      toggleBtn.style.display = 'none';
      explEl.style.display = 'none';
    }

    // Prev/Next
    $('btn-prev').disabled = currentQIndex === 0;
    $('btn-next').disabled = currentQIndex === qs.length - 1;

    // Scroll to top
    document.querySelector('.quiz-body')?.scrollTo(0, 0);
  }

  function toggleOption(btn, question) {
    const isMulti = question.selectCount > 1;
    if (isMulti) {
      btn.classList.toggle('selected');
    } else {
      $$('.option-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    }
    $('btn-submit').disabled = !document.querySelector('.option-btn.selected');
  }

  // Submit
  $('btn-submit').addEventListener('click', () => {
    const qs = sections[currentSection].questions;
    const q = qs[currentQIndex];
    const key = `${currentSection}_${currentQIndex}`;
    const selected = Array.from($$('.option-btn.selected')).map(b => b.dataset.label);
    if (!selected.length) return;

    const isCorrect = selected.length === q.answers.length && selected.every(s => q.answers.includes(s));
    userAnswers[key] = { selected, isCorrect, showExplanation: true };
    saveState();
    renderQuiz();
  });

  // Explain toggle
  $('btn-toggle-explain').addEventListener('click', () => {
    const key = `${currentSection}_${currentQIndex}`;
    if (userAnswers[key]) {
      userAnswers[key].showExplanation = !userAnswers[key].showExplanation;
      saveState();
      renderQuiz();
    }
  });

  // Navigation
  $('btn-prev').addEventListener('click', () => { if (currentQIndex > 0) { currentQIndex--; renderQuiz(); } });
  $('btn-next').addEventListener('click', () => {
    if (currentQIndex < sections[currentSection].questions.length - 1) { currentQIndex++; renderQuiz(); }
  });
  $('btn-back-section').addEventListener('click', () => { showScreen('section'); refreshSection(); });

  // Keyboard nav
  document.addEventListener('keydown', e => {
    if (!screens.quiz.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') { if (currentQIndex > 0) { currentQIndex--; renderQuiz(); } }
    if (e.key === 'ArrowRight') {
      if (currentQIndex < sections[currentSection].questions.length - 1) { currentQIndex++; renderQuiz(); }
    }
    if (e.key === 'Enter' && !$('btn-submit').disabled && $('btn-submit').style.display !== 'none') {
      $('btn-submit').click();
    }
  });

  // ---- STATS SCREEN ----
  function refreshStats() {
    let totalQ = 0, totalAnswered = 0, totalCorrect = 0, totalWrong = 0;
    const secStats = {};

    Object.keys(sections).forEach(key => {
      const qs = sections[key].questions;
      let answered = 0, correct = 0;
      qs.forEach((_, i) => {
        const a = userAnswers[`${key}_${i}`];
        if (a && a.selected.length > 0) { answered++; if (a.isCorrect) correct++; }
      });
      totalQ += qs.length;
      totalAnswered += answered;
      totalCorrect += correct;
      secStats[key] = { total: qs.length, answered, correct, wrong: answered - correct };
    });
    totalWrong = totalAnswered - totalCorrect;

    // Ring
    const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
    $('stats-accuracy').textContent = accuracy;
    const circ = 2 * Math.PI * 60;
    $('stats-ring-fill').style.strokeDashoffset = circ - (circ * accuracy / 100);

    $('stats-total').textContent = totalQ;
    $('stats-answered').textContent = totalAnswered;
    $('stats-correct').textContent = totalCorrect;
    $('stats-wrong').textContent = totalWrong;

    // Per section
    const wrap = $('stats-sections');
    wrap.innerHTML = '';
    Object.keys(sections).forEach(key => {
      const sec = sections[key];
      const st = secStats[key];
      const pct = st.answered ? Math.round((st.correct / st.answered) * 100) : 0;
      const div = document.createElement('div');
      div.className = 'stats-section-card';
      div.innerHTML = `
        <div class="stats-section-icon" style="background:${sec.gradient};">${sec.icon}</div>
        <div class="stats-section-info">
          <div class="stats-section-name">${sec.name}</div>
          <div class="stats-section-bar-wrap">
            <div class="stats-section-bar-fill" style="width:${st.total ? (st.answered / st.total) * 100 : 0}%;background:${sec.color};"></div>
          </div>
          <div class="stats-section-detail">${st.answered}/${st.total} 回答 ・ ${st.correct} 正解 ・ ${st.wrong} 不正解</div>
        </div>
        <div class="stats-section-pct">${pct}%</div>
      `;
      wrap.appendChild(div);
    });
  }

  $('btn-reset-all').addEventListener('click', () => {
    if (!confirm('すべての回答データをリセットしますか？')) return;
    userAnswers = {};
    saveState();
    refreshStats();
    refreshHome();
  });

  // ---- Formatting Utilities ----
  function escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text;
    return d.innerHTML;
  }

  function formatCode(code) {
    if (!code) return '';
    return code.split('\n').map((line, i) => {
      const num = i + 1;
      return `<span class="code-line-num">${num}.</span>${highlightJava(escapeHtml(line))}`;
    }).join('\n');
  }

  function highlightJava(line) {
    const kwSet = new Set(['public','private','protected','static','void','class','interface','extends',
      'implements','abstract','final','new','return','if','else','for','while','do',
      'switch','case','break','continue','default','this','super','import','package',
      'try','catch','finally','throw','throws','instanceof']);
    const tpSet = new Set(['int','long','short','byte','float','double','char','boolean',
      'String','Object','System','Integer','Double','Math']);

    const phs = [];
    function ph(html) {
      const tag = '\u00ab\u00ab' + phs.length + '\u00bb\u00bb';
      phs.push(html);
      return tag;
    }

    // 1) Strings
    line = line.replace(/(&quot;.*?&quot;)/g, function(m) { return ph('<span class="hl-s">' + m + '</span>'); });
    line = line.replace(/(&#x27;.{1,6}&#x27;)/g, function(m) { return ph('<span class="hl-s">' + m + '</span>'); });

    // 2) Comments
    line = line.replace(/(\/\/.*)$/, function(m) { return ph('<span class="hl-c">' + m + '</span>'); });

    // 3) Keywords, types, numbers in single pass
    line = line.replace(/\b([A-Za-z_]\w*|\d+[Ll]?)\b/g, function(m) {
      if (kwSet.has(m)) return ph('<span class="hl-k">' + m + '</span>');
      if (tpSet.has(m)) return ph('<span class="hl-t">' + m + '</span>');
      if (/^\d+[Ll]?$/.test(m)) return ph('<span class="hl-n">' + m + '</span>');
      return m;
    });

    // 4) Restore
    for (var i = 0; i < phs.length; i++) {
      line = line.split('\u00ab\u00ab' + i + '\u00bb\u00bb').join(phs[i]);
    }
    return line;
  }

  // ---- Init ----
  refreshHome();
})();

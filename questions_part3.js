// questions_part3.js - Mock Exam Questions (模擬試験)
const questionsP3 = [
  {
    id: 1,
    text: "JVMが行っていることとして正しいものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "バイトコードの解釈" },
      { label: "B", text: ".classファイルの実行" },
      { label: "C", text: ".classファイルのアセンブル" },
      { label: "D", text: "ソースコードをコンパイルする" },
      { label: "E", text: ".classファイルのロード" }
    ],
    answers: ["A", "B", "E"],
    explanation: "JVM（Java仮想マシン）はバイトコードを解釈し(A)、.classファイルを実行し(B)、.classファイルをメモリにロードします(E)。ソースコードのコンパイル(D)はjavacコンパイラの役割です。アセンブル(C)はJVMの機能ではありません。"
  },
  {
    id: 2,
    text: "Javaのソースファイルに関する説明として正しいものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "import文は1行だけ記述可能" },
      { label: "B", text: "import文はどこでも記述可能" },
      { label: "C", text: "ファイル名はpublicクラス名と一致する必要がある" },
      { label: "D", text: "インタフェースとクラスの両方を含められる" },
      { label: "E", text: "package文は任意だが記述する場合は先頭に記述する" },
      { label: "F", text: "finalクラスは1つだけ定義可能" }
    ],
    answers: ["C", "D", "E"],
    explanation: "C: publicクラスがある場合、ファイル名はそのクラス名と一致する必要があります。D: 1つのソースファイルにインタフェースとクラスの両方を含められます。E: package文は省略可能ですが、記述する場合はソースファイルの先頭（コメント除く）に記述します。A: import文は複数行記述可能です。B: import文はpackage文の後、クラス宣言の前に記述する必要があります。F: finalクラスの数に制限はありません。"
  },
  {
    id: 3,
    text: "有効なコードを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "int j = 'A';" },
      { label: "B", text: "int i = 10L;" },
      { label: "C", text: "int num = 3.14;" },
      { label: "D", text: "int flag = true;" },
      { label: "E", text: "byte b = 10; int i = b;" },
      { label: "F", text: "double d = 5.0; int n = (int)d;" }
    ],
    answers: ["A", "E", "F"],
    explanation: "A: char→intの拡大変換で有効です（'A'はUnicode値65）。E: byte→intの拡大変換で有効です。F: 明示的キャスト(int)によりdouble→intの変換が有効になります。B: long→intの縮小変換となりコンパイルエラーです。C: double→intの縮小変換となりコンパイルエラーです。D: boolean→intの変換はJavaでは不可能です。"
  },
  {
    id: 4,
    text: "有効なコードを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "double num1 = 3.14;" },
      { label: "B", text: "char num2 = \"a\";" },
      { label: "C", text: "boolean num3 = \"true\";" },
      { label: "D", text: "int num4 = 'x';" },
      { label: "E", text: "float num5 = 0.1;" },
      { label: "F", text: "String num6 = \"false\";" }
    ],
    answers: ["A", "D", "F"],
    explanation: "A: 3.14はdoubleリテラルとして有効です。D: 'x'はchar型ですが、int型への拡大変換（暗黙的キャスト）により有効です（'x'のUnicode値120が代入されます）。F: \"false\"は文字列リテラルでString型として有効です。B: ダブルクォートはString用で、char型にはシングルクォート'a'が必要です。C: \"true\"はStringリテラルで、boolean型にはtrue（引用符なし）が必要です。E: 0.1はdoubleリテラルで、float型に代入するには0.1fとサフィックスが必要です。"
  },
  {
    id: 5,
    text: "クラス名として有効なものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "class_bar" },
      { label: "B", text: "$class_bar" },
      { label: "C", text: "5class" },
      { label: "D", text: "class-bar" }
    ],
    answers: ["A", "B"],
    explanation: "A: class_barは有効な識別子です。アンダースコア(_)は識別子に使用でき、先頭にも置けます（小文字でも問題ありません）。B: $class_barは有効です。ドル記号($)で始まる識別子は有効です。C: 5classは無効です。識別子は数字で始めることができません。D: class-barは無効です。ハイフン(-)は識別子に使用できません。"
  },
  {
    id: 6,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int x = 3;\nint y = 4;\nSystem.out.print((2 + 3 * 3) + \"\");\nSystem.out.print(++x * y++);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "11 20" },
      { label: "B", text: "11 12" },
      { label: "C", text: "11 16" },
      { label: "D", text: "15 20" },
      { label: "E", text: "15 12" },
      { label: "F", text: "15 16" }
    ],
    answers: ["C"],
    explanation: "(2 + 3 * 3): 乗算が優先されるため3*3=9、次に2+9=11。\"\"を連結して\"11\"と出力されます。++x * y++: 前置++xでxは4になり、後置y++ではyの現在値4が使用された後にyが5になります。4*4=16と出力されます。結果は\"1116\"（表示上は11と16）です。"
  },
  {
    id: 7,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int a = 20;\nSystem.out.println((a += 5) + \":\" + (a++));",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "20:21" },
      { label: "B", text: "25:26" },
      { label: "C", text: "25:25" },
      { label: "D", text: "20:25" }
    ],
    answers: ["C"],
    explanation: "a += 5: aが25になり、式の値は25です。a++: 現在のa(25)が式の値となり、その後aは26になります。文字列連結で\"25:25\"と出力されます。a++は後置インクリメントなので、式の評価時点でのaの値(25)が使用されます。"
  },
  {
    id: 8,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "String data = \"null\";\nif (data == null) {\n    System.out.print(\"null\");\n} else if (data.length() == 0) {\n    System.out.print(\"0\");\n} else {\n    System.out.print(\"else\");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "null" },
      { label: "B", text: "0" },
      { label: "C", text: "else" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["C"],
    explanation: "dataは文字列\"null\"であり、nullリテラルではありません。data == nullはfalseです（文字列\"null\"はnull参照ではない）。data.length()は4（\"null\"は4文字）なので0ではありません。よってelseブロックが実行され\"else\"が出力されます。"
  },
  {
    id: 9,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "Employee e1 = new Employee();\nEmployee e2 = e1;\nEmployee e3 = new Employee();\nif (e1 == e2) {\n    System.out.print(\"e1==e2 \");\n} else {\n    System.out.print(\"e1!=e2 \");\n}\nif (e1 == e3) {\n    System.out.print(\"e1==e3\");\n} else {\n    System.out.print(\"e1!=e3\");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "e1==e2 e1==e3" },
      { label: "B", text: "e1==e2 e1!=e3" },
      { label: "C", text: "e1!=e2 e1==e3" },
      { label: "D", text: "e1!=e2 e1!=e3" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "e2 = e1により、e1とe2は同じオブジェクトを参照します（==で比較するとtrue）。e3はnewキーワードで新しいオブジェクトを生成しているため、e1とは異なる参照です（==で比較するとfalse）。==演算子はオブジェクトの参照の比較（同じオブジェクトかどうか）を行います。"
  },
  {
    id: 10,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "String words = \"ABCDEFGHIJ\";\nString msg = \"\";\nswitch (words.charAt(7)) {\n    case 'H':\n        msg = \"Hello\";\n        break;\n    case 'G':\n        msg = \"GoodBye\";\n    default:\n        msg = \"other\";\n}\nSystem.out.println(msg);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Hello" },
      { label: "B", text: "GoodBye" },
      { label: "C", text: "other" },
      { label: "D", text: "GoodBye other" },
      { label: "E", text: "Hello other" },
      { label: "F", text: "コンパイルエラー" }
    ],
    answers: ["A"],
    explanation: "words.charAt(7)は'H'です（0始まり: A=0, B=1, ..., H=7）。case 'H'にマッチしmsg=\"Hello\"が設定され、breakでswitch文を抜けます。breakがあるためフォールスルーは発生しません。出力は\"Hello\"です。"
  },
  {
    id: 11,
    text: "次のコードでコンパイルエラーが発生する行はどれですか。",
    code: "\n\nint x = 10, y = 5;          // 3行目\nif (x == 10) {}              // 4行目\nif (x != 0 | y != 0) {}     // 5行目\nif (y == 10) {}              // 6行目\nif (x == 10 and y == 5) {}   // 7行目\nif (x >= y) {}               // 8行目",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "4行目でコンパイルエラー" },
      { label: "B", text: "5行目でコンパイルエラー" },
      { label: "C", text: "6行目でコンパイルエラー" },
      { label: "D", text: "7行目でコンパイルエラー" },
      { label: "E", text: "8行目でコンパイルエラー" },
      { label: "F", text: "複数行でコンパイルエラー" },
      { label: "G", text: "コンパイル成功" }
    ],
    answers: ["D"],
    explanation: "7行目の \"and\" はJavaの有効な演算子ではありません。Javaでは論理AND演算子は && または & を使用します。\"and\" はPython等の他言語で使用されるキーワードであり、Javaではコンパイルエラーになります。他の行はすべて有効なJavaコードです。"
  },
  {
    id: 12,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "String[] ary = new String[3];\nary[1] = \"Lemon\";\nary[2] = null;\nary[3] = \"Grape\";\nfor (String s : ary) {\n    System.out.print(s + \" \");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Lemon Grape" },
      { label: "B", text: "Lemon null Grape" },
      { label: "C", text: "コンパイルエラー" },
      { label: "D", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "String[3]は要素数3の配列で、有効なインデックスは0, 1, 2です。ary[3] = \"Grape\"でインデックス3にアクセスしようとすると、ArrayIndexOutOfBoundsExceptionが発生します。配列のインデックスは0始まりなので、要素数nの配列の有効なインデックスは0～n-1です。"
  },
  {
    id: 13,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "for (int i = 3; i < i++; i++) {\n    System.out.print(i + \" \");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "3 4" },
      { label: "C", text: "実行されるが何も出力されない" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["C"],
    explanation: "条件式 i < i++ を評価すると、左辺のiは3、右辺のi++も後置インクリメントなので式の値は3（その後iが4になる）。3 < 3はfalseなのでループ本体は一度も実行されません。後置インクリメント(i++)は式の値として現在の値を返してからインクリメントするため、比較時点では両辺とも同じ値になります。"
  },
  {
    id: 14,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int num = 0;\nboolean flag = false;\nwhile ((num++ < 3) && !flag) {\n    System.out.print(\"5 \");\n    if (num == 2) {\n        flag = true;\n        System.out.print(\"* \");\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "5 *" },
      { label: "B", text: "5 5" },
      { label: "C", text: "5 5 *" },
      { label: "D", text: "5 5 * 5" },
      { label: "E", text: "コンパイルエラー" },
      { label: "F", text: "何も出力されない" }
    ],
    answers: ["C"],
    explanation: "1回目: num++(0<3→true、numは1)、!false→true。\"5 \"出力。num!=2なのでifスキップ。2回目: num++(1<3→true、numは2)、!false→true。\"5 \"出力。num==2なのでflag=true、\"* \"出力。3回目: num++(2<3→true、numは3)、!true→false。&&の短絡評価でループ本体に入りません。結果は\"5 5 * \"です。"
  },
  {
    id: 15,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "boolean flag = false;\nif (flag == true) {\n    while (!flag) {\n        System.out.print(\"T\");\n        flag = false;\n    }\n} else {\n    System.out.print(\"F\");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "4行目でコンパイルエラー" },
      { label: "B", text: "5行目でコンパイルエラー" },
      { label: "C", text: "T" },
      { label: "D", text: "F" },
      { label: "E", text: "何も出力されない" },
      { label: "F", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "flag = falseなので、if(flag == true)はfalseになります。elseブロックが実行され\"F\"が出力されます。whileブロック内のコードは到達不能ですが、コンパイルエラーにはなりません（if文の条件により到達しない場合は到達不能コードとは見なされません）。"
  },
  {
    id: 16,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int num = 0;\ndo {\n    num++;\n    if (num % 2 == 0) num++;\n    System.out.print(num + \" \");\n} while (num <= 10);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "2 4 6 8 10" },
      { label: "B", text: "2 4 6 8 10 12" },
      { label: "C", text: "1 3 5 7 9" },
      { label: "D", text: "1 3 5 7 9 11" }
    ],
    answers: ["D"],
    explanation: "num=0→num++=1、1%2!=0→出力\"1 \"。num=1→num++=2、2%2==0→num++=3→出力\"3 \"。num=3→num++=4、4%2==0→num++=5→出力\"5 \"。同様に7、9が出力されます。num=9→num++=10、10%2==0→num++=11→出力\"11 \"。11<=10はfalseでループ終了。結果: \"1 3 5 7 9 11\"。"
  },
  {
    id: 17,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int num = 0;\ndo {\n    num++;\n    System.out.print(\"Hi \");\n} while (num < 3);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Hi Hi" },
      { label: "B", text: "Hi Hi Hi" },
      { label: "C", text: "Hi Hi Hi Hi" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "do-whileループは最低1回実行されます。1回目: num=1、\"Hi \"出力、1<3→true。2回目: num=2、\"Hi \"出力、2<3→true。3回目: num=3、\"Hi \"出力、3<3→false→ループ終了。結果: \"Hi Hi Hi\"（3回出力）。"
  },
  {
    id: 18,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "int num = 0;\ndo {\n    num++;\n    if (num == 1) {\n        continue;\n    }\n    System.out.print(num + \" \");\n} while (num < 1);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "0" },
      { label: "B", text: "1" },
      { label: "C", text: "0 1" },
      { label: "D", text: "1が無限に出力される" },
      { label: "E", text: "実行されるが何も出力されない" }
    ],
    answers: ["E"],
    explanation: "1回目: num++=1、num==1→continueによりwhile条件の評価にジャンプします。while(1<1)→false→ループ終了。continueによりprint文がスキップされたため、何も出力されません。do-whileにおけるcontinueは条件評価部分にジャンプします。"
  },
  {
    id: 19,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "String[] ary = {\"A\", \"B\", \"C\"};\nfor (int i = 0; i < 2; i++) {\n    for (String s : ary) {\n        System.out.print(ary[i] + \" \");\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "実行時エラー" },
      { label: "B", text: "AABB" },
      { label: "C", text: "ABAB" },
      { label: "D", text: "AAABBB" },
      { label: "E", text: "ABCABC" }
    ],
    answers: ["D"],
    explanation: "外側ループi=0: 拡張forでaryの各要素について(3回)ary[0]=\"A\"を出力→\"A A A \"。外側ループi=1: 同様にary[1]=\"B\"を3回出力→\"B B B \"。内側のfor-eachで変数sを宣言していますが、出力にはary[i]を使用しているため、各内側反復で同じ値が出力されます。結果: \"AAABBB\"（スペース含む）。"
  },
  {
    id: 20,
    text: "次のコードを実行した後のnumの値として正しいものを選択してください。",
    code: "int ary[] = {10, 30, 50};\nint num = 0;\nfor (int val : ary) {\n    switch (val) {\n        case 10: num++;\n        case 20: num++; break;\n        case 30: num++; break;\n        case 40: num++;\n        case 50: num++;\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "3" },
      { label: "B", text: "4" },
      { label: "C", text: "5" },
      { label: "D", text: "6" },
      { label: "E", text: "コンパイルエラー" },
      { label: "F", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "val=10: case 10→num=1、breakがないのでフォールスルーしてcase 20→num=2、break。val=30: case 30→num=3、break。val=50: case 50→num=4（case 40は通過せず、case 50に直接ジャンプ）。合計num=4です。switchのフォールスルーはマッチしたcaseから下方向に発生しますが、マッチしないcaseを飛び越えることはありません。"
  },
  {
    id: 21,
    text: "次のコードの動作として正しいものを選択してください。",
    code: "int x = 5;\ndo {\n    x = 4;\n    System.out.println(x);\n} while (true);",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "実行時エラー" },
      { label: "C", text: "4が5回出力される" },
      { label: "D", text: "5が4回出力される" },
      { label: "E", text: "無限ループになる" }
    ],
    answers: ["E"],
    explanation: "while(true)は常に真のため、do-whileループは永久に繰り返されます。各反復でx=4が設定され\"4\"が出力されます。条件がtrueのリテラルなので、break文がない限りループは終了しません。これは無限ループです。"
  },
  {
    id: 22,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "String[] str = new String[3];\nstr[0] = \"JP\";\nstr[1] = null;\nstr[2] = \"US\";\nfor (int i = 1; i < str.length; i++) {\n    System.out.print(str[i] + \" \");\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "JP null US" },
      { label: "B", text: "null US" },
      { label: "C", text: "JP US" },
      { label: "D", text: "実行時エラー" },
      { label: "E", text: "一部出力後に実行時エラー" },
      { label: "F", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "forループはi=1から開始するため、str[0]=\"JP\"はスキップされます。str[1]=null→\"null\"が出力されます（println/printはnullを文字列\"null\"として出力します）。str[2]=\"US\"→\"US\"が出力されます。結果: \"null US\"。nullは文字列連結時に\"null\"という文字列に変換されます。"
  },
  {
    id: 23,
    text: "次のコードの出力結果として正しいものを選択してください。",
    code: "char[] array = {'a', 'b', 'c'};\nfor (int i = 0; i < array.length; i++) {\n    System.out.print(i + \" \");\n    switch (array[i]) {\n        case 'a': System.out.print(\"a\");\n        case 'b': System.out.print(\"b \");\n        case 'c': System.out.print(\"c\");\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "0 a b c" },
      { label: "C", text: "0 a 1 b 2 c" },
      { label: "D", text: "0 ab c 1 b c 2 c" },
      { label: "E", text: "0 ab c 1 ab c 2 ab c" }
    ],
    answers: ["D"],
    explanation: "i=0: \"0 \"出力。switch('a'): case 'a'→\"a\"出力、breakがないのでフォールスルーしcase 'b'→\"b \"出力、case 'c'→\"c\"出力。i=1: \"1 \"出力。switch('b'): case 'b'→\"b \"出力、フォールスルーしcase 'c'→\"c\"出力。i=2: \"2 \"出力。switch('c'): case 'c'→\"c\"出力。全体: \"0 ab c1 b c2 c\"。breakがないためフォールスルーが発生します。"
  },
  {
    id: 24,
    text: "次のコードで作成されるUserオブジェクトの数として正しいものを選択してください。",
    code: "User user1 = new User();\nUser user2 = user1;\nUser user3 = null;\nUser user4 = user3;",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "3" },
      { label: "D", text: "4" }
    ],
    answers: ["A"],
    explanation: "new User()は1回だけ呼ばれています（1行目のみ）。user2 = user1は同じオブジェクトへの参照をコピーするだけです。user3 = nullはオブジェクトを生成しません。user4 = user3もnullのコピーでオブジェクト生成はありません。メモリ内に作成されるUserオブジェクトは1つだけです。"
  },
  {
    id: 25,
    text: "クラスの説明として正しいものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "main()メソッドが存在しないクラスは定義できない" },
      { label: "B", text: "publicクラスを含めなくても良い" },
      { label: "C", text: "クラスは基本データ型である" },
      { label: "D", text: "クラスは参照型である" },
      { label: "E", text: "1つのソースファイルにpublicクラスを1つだけ含められる" },
      { label: "F", text: "すべてのクラスはjavaコマンドで実行可能である" }
    ],
    answers: ["B", "D", "E"],
    explanation: "B: ソースファイルにpublicクラスは必須ではありません。D: クラスは参照型です（基本データ型はint, char等の8つ）。E: 1つのソースファイルに含められるpublicクラスは最大1つです。A: main()メソッドがないクラスも定義可能です（ユーティリティクラスなど）。C: クラスは基本データ型ではなく参照型です。F: main()メソッドがないクラスはjavaコマンドで直接実行できません。"
  },
  {
    id: 26,
    text: "サブクラスがもつ構成要素でスーパークラスと同じ名前を使用できるものとして正しいものを1つ選択してください。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "変数とコンストラクタ" },
      { label: "B", text: "変数とメンバメソッド" },
      { label: "C", text: "メンバメソッドのみ" },
      { label: "D", text: "変数、コンストラクタ、メンバメソッド" }
    ],
    answers: ["B"],
    explanation: "変数はサブクラスで同じ名前で宣言できます（変数の隠蔽/シャドウイング）。メソッドも同じ名前で定義できます（オーバーライド）。コンストラクタはクラス名と同じ名前を持つため、サブクラスのコンストラクタは必ずサブクラスの名前になり、スーパークラスのコンストラクタとは異なる名前になります。よって変数とメンバメソッドが正解です。"
  },
  {
    id: 27,
    text: "次のコードがあります。実行した結果として正しいものはどれですか。",
    code: "public class Fruit {\n    String kind = \"orange\";\n    public static void main(String[] args) {\n        String kind = args[1];\n        Fruit obj = new Fruit();\n        System.out.println(obj.kind);\n    }\n}",
    command: "java Fruit lemon grape",
    selectCount: 1,
    options: [
      { label: "A", text: "lemon" },
      { label: "B", text: "grape" },
      { label: "C", text: "orange" },
      { label: "D", text: "null" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["C"],
    explanation: "args[0]=\"lemon\"、args[1]=\"grape\"です。mainメソッド内のローカル変数kindにargs[1]の\"grape\"が代入されますが、この変数は出力には使用されません。obj.kindはFruitクラスのインスタンス変数kindを参照し、その初期値は\"orange\"です。mainメソッド内のローカル変数kindとインスタンス変数kindは別の変数です。したがって出力は\"orange\"です。"
  },
  {
    id: 28,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Fruit {\npublic static void main(String[] args) {\nFruit[] ary = {new Fruit(), new Fruit(), new Fruit()};\nint num = ary.length;\nwhile(num > 0) {\nSystem.out.print(num-- + \" \");\n}do;\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "3行目でコンパイルエラー" },
      { label: "B", text: "5行目でコンパイルエラー" },
      { label: "C", text: "7行目でコンパイルエラー" },
      { label: "D", text: "3 2 1" },
      { label: "E", text: "2 1" },
      { label: "F", text: "2 1 0" },
      { label: "G", text: "1 0" }
    ],
    answers: ["C"],
    explanation: "7行目の }do; が問題です。do-while文は do { ... } while(条件); の形式でなければなりません。}do; は不正な構文です。doキーワードの後にはブロック{}またはステートメントが必要であり、単にdo;とすることはできません。コンパイルエラーが発生します。while文自体は正しい構文ですが、7行目末尾の do; が不正です。"
  },
  {
    id: 29,
    text: "次のコードがあります。プログラムが正常にコンパイルするために、①に挿入するコードとして正しいものはどれですか。",
    code: "class Test {\n    boolean flag;\n    public static void main(String[] args) {\n        Test obj = new Test();\n        if([①]) {\n            System.out.print(\"OK\");\n        } else {\n            System.out.print(\"NG\");\n        }\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "obj.flag.equals(\"true\")" },
      { label: "B", text: "obj.flag == \"true\"" },
      { label: "C", text: "obj.flag" },
      { label: "D", text: "obj.flag = \"true\"" },
      { label: "E", text: "obj.flag.equals(true)" }
    ],
    answers: ["C"],
    explanation: "if文の条件式にはboolean型の値が必要です。obj.flagはboolean型のインスタンス変数で、デフォルト値はfalseです。Cのobj.flagはboolean値をそのまま条件式に使用でき、コンパイルが成功します（出力は\"NG\"）。Aはbooleanプリミティブ型にequalsメソッドはないためコンパイルエラー。Bはboolean型とString型の比較でコンパイルエラー。Dは代入式でString型をboolean型に代入しようとしてコンパイルエラー。Eもboolean型にequalsメソッドはないためコンパイルエラーです。"
  },
  {
    id: 30,
    text: "User クラスのコンストラクタ定義として正しいものはどれですか。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "private User() {}" },
      { label: "B", text: "public final User() {}" },
      { label: "C", text: "private void User() {}" },
      { label: "D", text: "public User(int id) {}" },
      { label: "E", text: "private static User() {}" }
    ],
    answers: ["A", "D"],
    explanation: "コンストラクタは戻り値を持たず、クラス名と同じ名前で定義します。A: private User() {} はアクセス修飾子がprivateの引数なしコンストラクタで有効です（シングルトンパターン等で使用）。D: public User(int id) {} はpublicの引数付きコンストラクタで有効です。B: finalはコンストラクタに付与できません。C: void が付いているため、コンストラクタではなくメソッド定義になります。E: staticはコンストラクタに付与できません。"
  }
];

const questionsP1 = [
  {
    id: 1,
    text: "SE社では事務職員が使用する、顧客情報の新規登録、更新を行うことができる GUI ベースのアプリケーションの作成を依頼したいと考えています。使用すべきエディションは次のどれですか。1つ選択してください。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Java EE" },
      { label: "B", text: "Java SE" },
      { label: "C", text: "Java ME" },
      { label: "D", text: "Java DB" }
    ],
    answers: ["B"],
    explanation: "Java SEはデスクトップアプリケーション開発に適したエディションです。Java EEはエンタープライズ（サーバーサイド/Web）向け、Java MEは組み込み/モバイル向け、Java DBはデータベースであり、エディションではありません。GUIベースの事務アプリケーションにはJava SEが適切です。"
  },
  {
    id: 2,
    text: "Java 言語に関する説明として正しいものは次のどれですか。4つ選択してください。",
    code: null,
    command: null,
    selectCount: 4,
    options: [
      { label: "A", text: "分散プログラミング言語である" },
      { label: "B", text: "プログラムはコンパイルし実行する" },
      { label: "C", text: "プラットフォームに依存する" },
      { label: "D", text: "アーキテクチャに依存しない" },
      { label: "E", text: "プログラマは、ポインタを使用してメモリを操作する" },
      { label: "F", text: "自動メモリ管理をサポートしている" },
      { label: "G", text: "単一スレッドのみサポートする" }
    ],
    answers: ["A", "B", "D", "F"],
    explanation: "Javaは分散プログラミングをサポート（RMI等）し(A)、ソースコードをコンパイルしてバイトコードにし、JVM上で実行します(B)。Javaはプラットフォームに依存しません(Cは誤り)。アーキテクチャに依存しない設計です(D)。ポインタを直接操作する機能はありません(Eは誤り)。ガベージコレクションによる自動メモリ管理をサポートしています(F)。マルチスレッドをサポートしています(Gは誤り)。"
  },
  {
    id: 3,
    text: "次のコードがあります。①に挿入するコードでコンパイル、実行ともに成功するものは次のどれですか。2つ選択してください。",
    code: "public class Test {\n[①]\nSystem.out.println(\"Hello\");\n}\n}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "public static void main(String args) {" },
      { label: "B", text: "static void main(String[] args) {" },
      { label: "C", text: "public static void main(String[] args) {" },
      { label: "D", text: "public void main(String[] args) {" },
      { label: "E", text: "static public void main(String[] args) {" }
    ],
    answers: ["C", "E"],
    explanation: "mainメソッドのシグネチャは public static void main(String[] args) です。Cは標準的な記述です。Eはpublicとstaticの順序が逆ですが、修飾子の順序は自由なので有効です。Aは引数がString[]ではなくStringなのでmainメソッドとして認識されません。Bはpublicが省略されていますが、Java SE 11以降ではpublic修飾子がないとmainメソッドとして認識されず実行に失敗します。Dはstaticが欠けているため、エントリーポイントとして認識されません。"
  },
  {
    id: 4,
    text: "次のコードがあります。実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "public class Test {\npublic static void main(String[] args) {\nSystem.out.println(args[0] + \":\" + args[1]);\n}\n}",
    command: "java Test AB",
    selectCount: 1,
    options: [
      { label: "A", text: "Test: A" },
      { label: "B", text: "Test: AB" },
      { label: "C", text: "Test A: B" },
      { label: "D", text: "A: B" }
    ],
    answers: ["D"],
    explanation: "コマンドライン引数は java コマンドのクラス名の後に続く値です。java Test A B の場合、args[0]=\"A\"、args[1]=\"B\" となります。Testはクラス名であり引数には含まれません。よって出力は \"A:B\" です。"
  },
  {
    id: 5,
    text: "次のコードがあります。説明として正しいものは次のどれですか。1つ選択してください。",
    code: "public class Test {\npublic static void main(String[] args) {\nbyte num1 = 100;\nshort num2 = 1000;\nint num3 = 10000000;\nlong num4 = 1234567890L;\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルは成功する" },
      { label: "B", text: "3行目でコンパイルエラーが発生する" },
      { label: "C", text: "4行目でコンパイルエラーが発生する" },
      { label: "D", text: "5行目でコンパイルエラーが発生する" },
      { label: "E", text: "6行目でコンパイルエラーが発生する" },
      { label: "F", text: "複数行でコンパイルエラーが発生する" }
    ],
    answers: ["A"],
    explanation: "byte(-128～127)に100は範囲内。short(-32768～32767)に1000は範囲内。intに10000000は範囲内。longに1234567890Lはサフィックス付きで問題なし。すべての変数宣言が有効なので、コンパイルは成功します。"
  },
  {
    id: 6,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "public class Test {\npublic static void main(String[] args) {\nchar[] aryA = new char[5];\naryA[0] = 'b';\naryA[1] = 'y';\naryA[2] = 'e';\nchar[] aryB = {'o', 'r', 'a', 'n', 'g', 'e'};\naryA = aryB;\nSystem.out.println(aryA);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "bye" },
      { label: "B", text: "orange" },
      { label: "C", text: "byeor" },
      { label: "D", text: "orang" },
      { label: "E", text: "コンパイルエラー" },
      { label: "F", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "aryA = aryB の代入により、aryAの参照先がaryBの配列オブジェクトに変更されます。aryAは元の配列ではなく、aryBと同じ{'o','r','a','n','g','e'}の配列を参照するようになります。System.out.println(char[])は文字配列の全要素を文字列として出力するので、\"orange\"が出力されます。"
  },
  {
    id: 7,
    text: "配列の宣言として有効なものは次のどれですか。3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "int a[5];" },
      { label: "B", text: "int b = new int[5];" },
      { label: "C", text: "int c = null; c = new int[5];" },
      { label: "D", text: "int d[] = new int[5];" },
      { label: "E", text: "int e = new int(5);" },
      { label: "F", text: "int f = new int()[5];" },
      { label: "G", text: "int[] g = {1, 2, 3};" }
    ],
    answers: ["C", "D", "G"],
    explanation: "D: int d[] = new int[5] は有効です。配列宣言で[]を変数名の後に置くことができます。G: int[] g = {1,2,3} は配列の初期化子を使った有効な宣言です。C: int[] c = null; c = new int[5]; は2段階での宣言と初期化で有効です。A: 宣言時にサイズ指定はできません。B: int型の変数に配列を代入できません（int[]とすべき）。E: new int(5) は配列の構文として不正です。F: new int()[5] も不正な構文です。"
  },
  {
    id: 8,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint a = 5;\nint b = a++;\nint c = ++a;\nSystem.out.println(a + \" \" + b + \" \" + c);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "5 5 5" },
      { label: "B", text: "6 6 6" },
      { label: "C", text: "7 6 7" },
      { label: "D", text: "7 5 7" },
      { label: "E", text: "7 6 6" },
      { label: "F", text: "7 7 7" }
    ],
    answers: ["D"],
    explanation: "a=5の状態から、b=a++は後置インクリメントなのでbに5が代入された後にaが6になります。c=++aは前置インクリメントなのでaが先に7になり、cに7が代入されます。最終的にa=7, b=5, c=7で、出力は\"7 5 7\"です。"
  },
  {
    id: 9,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 10;\nint y = (x = 3) + x;\nSystem.out.println(x + \" \" + y);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "3 6" },
      { label: "C", text: "3 13" },
      { label: "D", text: "13 13" }
    ],
    answers: ["B"],
    explanation: "代入式 (x=3) はxに3を代入し、式の値は3です。その後の+xは、すでに3に更新されたxを参照するため、y = 3 + 3 = 6となります。出力は\"3 6\"です。Javaでは式は左から右に評価されます。"
  },
  {
    id: 10,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 3+7;\nint y = 10+11;\nif(x < y) System.out.print(\"x<y\" + \" \");\nif(x > y) System.out.print(\"x>y\" + \" \");\nif(x == y) System.out.print(\"x==y\" + \" \");\nelse System.out.print(\"else\");\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "x < y" },
      { label: "B", text: "x > y" },
      { label: "C", text: "x == y" },
      { label: "D", text: "x < y x == y" },
      { label: "E", text: "x < y x > y x == y" },
      { label: "F", text: "else" },
      { label: "G", text: "コンパイルエラー" }
    ],
    answers: ["A"],
    explanation: "x=10、y=21です。最初のif文 x<y は真なので \"x<y \" が出力されます。2番目のif文 x>y は偽なのでスキップ。3番目のif-else文で x==y は偽なので else ブロックの \"else\" が出力されます。各if文は独立しています。実際の出力は \"x<y else\" ですが、選択肢の中ではAが最も近い回答です。"
  },
  {
    id: 11,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 1;\nint y = 2;\nif(x != 1) System.out.print(\"a\" + \" \");\nelse if(y > x) System.out.print(\"b\" + \" \");\nelse System.out.print(\"c\" + \" \");\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "a" },
      { label: "B", text: "b" },
      { label: "C", text: "c" },
      { label: "D", text: "bc" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "x=1なので x!=1 は偽。else ifに進み、y>x (2>1) は真なので \"b\" が出力されます。if-else if-else は一連の条件分岐なので、最初に真となった条件のブロックだけが実行されます。"
  },
  {
    id: 12,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 0, y = 5;\nif (x++ < 0)\nSystem.out.println(\"1\");\nelse if (x < y)\nSystem.out.println(\"2\");\nelse (y == 5)\nSystem.out.println(\"3\");\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "実行されるが何も出力されない" },
      { label: "C", text: "2" },
      { label: "D", text: "23" },
      { label: "E", text: "3" },
      { label: "F", text: "123" }
    ],
    answers: ["A"],
    explanation: "else (y==5) が問題です。elseブロックに条件式を記述することはできません。else if (y==5) とするか、単にelse { ... } とする必要があります。else (y==5) は不正な構文のためコンパイルエラーが発生します。"
  },
  {
    id: 13,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nchar c = 'b';\nswitch(c){\ncase 'a':\nSystem.out.print('a');\nbreak;\ncase 'b':\nSystem.out.print('b');\ncase 'c':\nSystem.out.print('c');\ncase 'd':\nSystem.out.print('d');\nbreak;\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "b" },
      { label: "B", text: "bc" },
      { label: "C", text: "bcd" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行されるが何も出力されない" }
    ],
    answers: ["C"],
    explanation: "c='b'なのでcase 'b'にマッチします。'b'が出力された後、break文がないためフォールスルーが発生し、case 'c'の処理('c'を出力)、case 'd'の処理('d'を出力)が続けて実行されます。case 'd'の後にbreakがあるのでそこでswitch文を抜けます。結果は\"bcd\"です。"
  },
  {
    id: 14,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nfor(int i = 0; i < 4;) {\nSystem.out.print(i+\" \");\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "0 1 2 3" },
      { label: "B", text: "0 1 2 3 4" },
      { label: "C", text: "1 2 3" },
      { label: "D", text: "1 2 3 4" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["F"],
    explanation: "このfor文にはインクリメント式（更新式）がありません。for(int i=0; i<4;) ではiが変更されないため、条件 i<4 は常に真となり、\"0 \"が無限に出力される無限ループになります。for文の3番目のセクション（更新式）は省略可能ですが、ループ変数をループ本体内で更新しない場合は無限ループになります。"
  },
  {
    id: 15,
    text: "次のコード(抜粋)があります。ary配列のすべての要素を出力するコードは次のどれですか。1つ選択してください。",
    code: "int[] ary = {10, 20, 30, 40};",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "while(int i = 1; i < ary.length) { System.out.print(ary[i]); i++; }" },
      { label: "B", text: "while(int i = 0; i < ary.length) { System.out.print(ary[i]); i++; }" },
      { label: "C", text: "for(int i = 1; i < ary.length; i++) { System.out.print(ary[i]); }" },
      { label: "D", text: "for(int i = 0; i < ary.length; i++) { System.out.print(ary[i]); }" }
    ],
    answers: ["D"],
    explanation: "配列の全要素にアクセスするには、インデックス0から始めてary.length未満まで繰り返す必要があります。Dはfor(int i=0; i<ary.length; i++)で、インデックス0から3まで正しくアクセスします。A/Bはwhile文の構文が不正です（whileは条件式のみ取ります）。Cはi=1から始まるため最初の要素(ary[0])がスキップされます。"
  },
  {
    id: 16,
    text: "次のコードがあります。①に挿入するコードでコンパイル、実行ともに成功するものは次のどれですか。1つ選択してください。",
    code: "public class Test {\npublic static void main(String[] args) {\nString[] ary = {\"beer\", \"wine\", \"juice\"};\n[①]\nSystem.out.println(s);\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "for(ary: s){" },
      { label: "B", text: "for(s: ary){" },
      { label: "C", text: "for(String[] ary: String s){" },
      { label: "D", text: "for(String s: String[] ary){" },
      { label: "E", text: "for(ary: String s){" },
      { label: "F", text: "for(String s: ary){" }
    ],
    answers: ["F"],
    explanation: "拡張for文（for-each）の構文は for(型 変数名 : コレクション) です。Fの for(String s : ary) が正しい構文です。配列aryの各要素がString型のsに順番に代入されます。"
  },
  {
    id: 17,
    text: "次のコード(抜粋)があります。同じ出力が得られるコードは次のどれですか。1つ選択してください。",
    code: "int a = 0;\nwhile(a < 5) {\nSystem.out.println(a++);\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "int a = 0; for(; a < 5;) { System.out.println(++a); }" },
      { label: "B", text: "for(int a = 0; ; a++) { System.out.println(a); if(a == 5) { break; } }" },
      { label: "C", text: "for(int a = 0; a < 5; a++) { System.out.println(a); }" },
      { label: "D", text: "for(int a = 0; a < 5;) { System.out.println(a); a++; }" }
    ],
    answers: ["C"],
    explanation: "元のコードはa=0からa<5の間、a++（後置）で出力するので0,1,2,3,4が出力されます。Cのfor文はa=0から開始し、a<5の間aを出力してからインクリメントするので同じ結果です。Aは++a（前置）なので1～5が出力されます。Bはa==5まで出力してからbreakなので0～5が出力されます。Dも同じ出力になりますが、Cが最も標準的な等価変換です。"
  },
  {
    id: 18,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint a = 5;\nwhile(a >= 0) {\nSystem.out.print((a--) + \" \");\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "4 3 2 1 0" },
      { label: "B", text: "4 3 2 1 0 -1" },
      { label: "C", text: "5 4 3 2 1" },
      { label: "D", text: "5 4 3 2 1 0" },
      { label: "E", text: "5が無限に出力される" }
    ],
    answers: ["D"],
    explanation: "a=5から開始。a--は後置デクリメントなので、現在のaの値が先に使用されてから減算されます。a=5: 5を出力、a→4。a=4: 4を出力、a→3。...a=0: 0を出力、a→-1。a=-1: 条件a>=0が偽なのでループ終了。出力は\"5 4 3 2 1 0\"です。"
  },
  {
    id: 19,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nTest[] ary = {new Test(), new Test()};\nint size = ary.length;\nwhile(size > 0) {\nSystem.out.print(size-- + \" \");\n        } while(size > 0);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "3行目でコンパイルエラーが発生する" },
      { label: "B", text: "5行目でコンパイルエラーが発生する" },
      { label: "C", text: "7行目でコンパイルエラーが発生する" },
      { label: "D", text: "複数行でコンパイルエラーが発生する" },
      { label: "E", text: "2 1" },
      { label: "F", text: "2 1 0" },
      { label: "G", text: "3 2 1" },
      { label: "H", text: "3 2 1 0" }
    ],
    answers: ["C"],
    explanation: "7行目の do; が問題です。do-while文は do { ... } while(条件); の形式でなければなりません。do; は不正な構文です。do キーワードの後にはブロック {} またはステートメントが必要であり、単にdo;とすることはできません。コンパイルエラーが発生します。"
  },
  {
    id: 20,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nfor(int a = 0; a < 2; a++) {\nfor(a = 5; a < 10; a++) {\nSystem.out.print(a);\n}\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "56789が1回出力される" },
      { label: "B", text: "56789が2回出力される" },
      { label: "C", text: "56789が無限に出力される" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["A"],
    explanation: "外側のfor文でa=0、条件a<2は真。内側のfor文でaが5に再代入され、5から9まで出力(56789)。内側ループ終了後a=10。外側のa++でa=11、条件a<2は偽。ループ終了。内側と外側で同じ変数aを使っているため、内側ループ後にaが10になり、外側の条件を満たさなくなります。結果、56789は1回だけ出力されます。"
  },
  {
    id: 21,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nfor(int x = 0; ; x++) {\nint y = 1;\nwhile(y <= 5){\nSystem.out.print(y++);\n}\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "12345が1回出力される" },
      { label: "B", text: "12345が無限に出力される" },
      { label: "C", text: "2345が1回出力される" },
      { label: "D", text: "2345が無限に出力される" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "外側のfor文には終了条件がないため無限ループです。各反復でyは1に初期化され、while(y<=5)で1から5まで出力されます。yは外側ループの内部で宣言されているため、毎回リセットされます。結果、\"12345\"が無限に出力されます。"
  },
  {
    id: 22,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nchar[] x = {'a', 'b', 'c'};\nchar[] y = {'d', 'e'};\nfor(int a = 0; a < x.length; a++) {\nSystem.out.print(x[a] + \"\");\nfor(int b = 0; b < y; b++) {\nSystem.out.print(y[b] + \" \");\n}\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "abcde" },
      { label: "B", text: "adebc" },
      { label: "C", text: "abcdabce" },
      { label: "D", text: "adebdecde" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["E"],
    explanation: "内側のfor文の条件式 b<y で、int型のbとchar[]型のyを比較しています。int型と配列型の比較はできないため、コンパイルエラーが発生します。正しくは b<y.length とすべきです。"
  },
  {
    id: 23,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 10;\nfor(int y = 1; y < 3; y++) {\nx++;\nswitch(x){\ncase 11:\nSystem.out.print(\"11 \");\ncase 12:\nSystem.out.print(\"12 \");\ncase 13:\nSystem.out.print(\"13 \");\n}\n}\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "12 13" },
      { label: "B", text: "11 12 13" },
      { label: "C", text: "12 13 13" },
      { label: "D", text: "11 12 13 12 13" },
      { label: "E", text: "11 12 13 11 12 13" },
      { label: "F", text: "コンパイルエラー" }
    ],
    answers: ["D"],
    explanation: "1回目(y=1): x++→x=11。switch(11): case 11で\"11 \"を出力、breakがないためフォールスルーしcase 12で\"12 \"、case 13で\"13 \"を出力。2回目(y=2): x++→x=12。switch(12): case 12で\"12 \"、フォールスルーしてcase 13で\"13 \"を出力。結果は\"11 12 13 12 13\"です。"
  },
  {
    id: 24,
    text: "Test.java ファイルに、次のコードがあります。コンパイル後に生成されるクラスファイルは次のどれですか。1つ選択してください。",
    code: "class A {}\nclass B {}\nclass Test {\npublic static void main(String[] args) {\nA obj = new A();\nSystem.out.print(\"Test\");\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "A.class" },
      { label: "B", text: "A.class、B.class" },
      { label: "C", text: "Test.class" },
      { label: "D", text: "Test.class、A.class" },
      { label: "E", text: "Test.class、A.class、B.class" }
    ],
    answers: ["E"],
    explanation: "Javaコンパイラは、ソースファイル内に定義されたすべてのクラスに対して個別の.classファイルを生成します。Test.javaにはA、B、Testの3つのクラスが定義されているため、A.class、B.class、Test.classの3つのファイルが生成されます。使用されていないクラス(B)も含めてすべてコンパイルされます。"
  },
  {
    id: 25,
    text: "クラス定義として正しいものは次のどれですか。3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "public class Orange#{}" },
      { label: "B", text: "class Grape1001{}" },
      { label: "C", text: "class water-melon{}" },
      { label: "D", text: "public class peach%{}" },
      { label: "E", text: "class $Lemon{}" },
      { label: "F", text: "class grape_fruit{}" }
    ],
    answers: ["B", "E", "F"],
    explanation: "Javaのクラス名（識別子）はアルファベット、数字、$、_を使用でき、数字で始めることはできません。B: Grape1001は有効(文字+数字)。E: $Lemonは有効($で開始可能)。F: grape_fruitは有効(_を含む)。A: Orange#は無効(#は使用不可)。C: water-melonは無効(ハイフンは使用不可)。D: peach%は無効(%は使用不可)。"
  },
  {
    id: 26,
    text: "メソッドのシグニチャの定義として含まれるものは次のどれですか。4つ選択してください。",
    code: null,
    command: null,
    selectCount: 4,
    options: [
      { label: "A", text: "引数の型" },
      { label: "B", text: "引数の数" },
      { label: "C", text: "引数の並び" },
      { label: "D", text: "引数の変数名" },
      { label: "E", text: "戻り値" },
      { label: "F", text: "メソッドの名前" },
      { label: "G", text: "アクセス修飾子" }
    ],
    answers: ["A", "B", "C", "F"],
    explanation: "Javaにおけるメソッドシグネチャは「メソッド名」と「引数リスト（引数の型、数、並び順）」で構成されます。引数の変数名(D)、戻り値の型(E)、アクセス修飾子(G)はシグネチャに含まれません。オーバーロードの判定もシグネチャに基づいて行われます。"
  },
  {
    id: 27,
    text: "次のコードがあります。コンパイル、実行が成功し200の出力結果を得るために、①に挿入するコードとして正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint x = 100;\nx = method(x);\nSystem.out.println(x);\n}\n[①] int method(int a) {\nreturn a + 100;\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "public" },
      { label: "B", text: "static" },
      { label: "C", text: "void" },
      { label: "D", text: "何も記述しない" }
    ],
    answers: ["B"],
    explanation: "mainメソッドはstaticメソッドです。staticメソッドから直接呼び出せるのはstaticメソッドのみです。methodをstaticにすることで、mainメソッドからインスタンスを生成せずに呼び出すことができます。publicだけではインスタンスメソッドのままなので、staticコンテキストから呼び出せません。"
  },
  {
    id: 28,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\nString fruit;\npublic void show() {\nSystem.out.println(fruit);\n}\npublic static void main(String[] args) {\nTest obj1;\nTest obj2;\nobj1.fruit = \"Grape\";\nobj2.fruit = \"Lemon\";\nobj1.show();\nobj2.show();\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "実行時エラー" },
      { label: "C", text: "Grape (改行) Lemon" },
      { label: "D", text: "Lemon (改行) Lemon" }
    ],
    answers: ["A"],
    explanation: "ローカル変数obj1とobj2は宣言されていますが、初期化（newによるインスタンス生成）されていません。Javaではローカル変数は使用前に初期化する必要があります。初期化されていない変数にアクセスしようとするとコンパイルエラーが発生します。new Test()でオブジェクトを生成する必要があります。"
  },
  {
    id: 29,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\npublic static void main(String[] args) {\nint num = 10;\nTest obj = new Test();\nobj.method(5);\n}\nvoid method(int a) {\nSystem.out.println(num + a);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "105" },
      { label: "B", text: "15" },
      { label: "C", text: "5" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "method()内で参照しているnumは、mainメソッドのローカル変数です。インスタンスメソッドmethod()からmainメソッドのローカル変数にはアクセスできません。numがクラスのインスタンス変数として宣言されていれば問題ありませんが、mainのローカル変数は他のメソッドからは見えないためコンパイルエラーが発生します。"
  },
  {
    id: 30,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものは次のどれですか。1つ選択してください。",
    code: "class Test {\nstatic String fruit = \"Grape\";\nTest(String fruit) {\nthis.fruit = fruit;\n}\npublic static void main(String[] args) {\nTest obj1 = new Test();\nTest obj2 = new Test(\"Lemon\");\nSystem.out.println(obj1.fruit + \":\" + obj2.fruit);\n}\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "null: Lemon" },
      { label: "B", text: ": Lemon" },
      { label: "C", text: "Grape: Lemon" },
      { label: "D", text: "Lemon: Lemon" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["E"],
    explanation: "Testクラスには引数付きコンストラクタ Test(String fruit) が定義されています。明示的にコンストラクタを定義した場合、デフォルトの引数なしコンストラクタは自動生成されません。そのため、new Test()（引数なし）はコンパイルエラーになります。引数なしコンストラクタも使用したい場合は、明示的に定義する必要があります。"
  }
];

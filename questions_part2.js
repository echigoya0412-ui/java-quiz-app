const questionsP2 = [
  {
    id: 31,
    text: "コンストラクタの説明として正しいものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "クラスのstaticメンバにコンストラクタからアクセスできる" },
      { label: "B", text: "コンストラクタの戻り値はvoidとする" },
      { label: "C", text: "コンストラクタにprivate修飾子を付与できる" },
      { label: "D", text: "コンストラクタでは、クラス内で宣言されたメンバ変数を初期化しなければならない" },
      { label: "E", text: "サブクラスは、スーパークラスのコンストラクタを継承できない" }
    ],
    answers: ["A", "C", "E"],
    explanation: "A: コンストラクタからstaticメンバにアクセスできます。C: private修飾子を付けることでシングルトンパターン等に利用できます。E: コンストラクタは継承されません。B: コンストラクタには戻り値の型を指定しません（voidも不可）。D: メンバ変数の初期化は必須ではありません。"
  },
  {
    id: 32,
    text: "Employee クラスのコンストラクタ定義として①に挿入できるコードを2つ選択してください。",
    code: "public class Employee {\n    private int empId;\n    [①]\n}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "public void Employee(){}" },
      { label: "B", text: "final Employee(){empId=0;}" },
      { label: "C", text: "Employee(){}" },
      { label: "D", text: "public Employee(long empId){this.empId=empId;}" },
      { label: "E", text: "private Employee(int empId){this.empId=empId;}" }
    ],
    answers: ["C", "E"],
    explanation: "C: 引数なしのデフォルトコンストラクタとして有効です。E: private修飾子付きで、int型の引数をフィールドに代入する有効なコンストラクタです。A: void戻り値があるためコンストラクタではなくメソッドです。B: コンストラクタにfinal修飾子は付けられません。D: 引数がlong型でフィールドがint型のため、this.empId = empId で縮小変換のコンパイルエラーが発生します。"
  },
  {
    id: 33,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "public class Test {\n    int method(int num1) {\n        return num1 * num1;\n    }\n    double method(int num2) {\n        return num2 * 0.9;\n    }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        System.out.println(obj.method(10));\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "100" },
      { label: "B", text: "9.0" },
      { label: "C", text: "9" },
      { label: "D", text: "コンパイルエラー" }
    ],
    answers: ["D"],
    explanation: "2つのmethodメソッドは同じ引数リスト（int型1つ）を持ちますが、戻り値の型だけが異なります。Javaではメソッドのオーバーロードはシグネチャ（メソッド名と引数リスト）で判断され、戻り値の型は含まれません。同じシグネチャで戻り値だけ異なるメソッドは定義できないため、コンパイルエラーが発生します。"
  },
  {
    id: 34,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "public class Test {\n    private static int x;\n    public static int methodA() {\n        return ++x;\n    }\n    public int methodB() {\n        return methodA();\n    }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        System.out.println(obj.methodB() + \" \" + obj.methodA());\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "1 2" },
      { label: "B", text: "2 1" },
      { label: "C", text: "0 1" },
      { label: "D", text: "1 0" },
      { label: "E", text: "5行目でコンパイルエラー" },
      { label: "F", text: "8行目でコンパイルエラー" }
    ],
    answers: ["A"],
    explanation: "staticフィールドxは0で初期化されます。obj.methodB()がmethodA()を呼び、++xでxが1になり1を返します。次にobj.methodA()で++xによりxが2になり2を返します。インスタンスメソッドからstaticメソッドを呼ぶことは可能です。出力は\"1 2\"です。"
  },
  {
    id: 35,
    text: "メソッドのオーバーロードを正しく行っているクラスを1つ選択してください。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "class Test { void write(int a, int b){} void show(){} }" },
      { label: "B", text: "class Test { void write(int a, int b){} write(int a){} }" },
      { label: "C", text: "class Test { void write(int a, int b){} double write(int a, int b){} }" },
      { label: "D", text: "class Test { void write(int a, int b){} void write(int a){} }" }
    ],
    answers: ["D"],
    explanation: "オーバーロードは同じメソッド名で異なる引数リスト（型、数、順序）を持つメソッドを定義することです。Dは同じ名前writeで引数の数が異なる(int, int)と(int)ため、有効なオーバーロードです。A: メソッド名が異なる。B: 2番目のメソッドに戻り値型がない。C: 引数リストが同じで戻り値だけ異なるため不正。"
  },
  {
    id: 36,
    text: "private修飾子が付与できるものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "クラスのメンバ変数" },
      { label: "B", text: "インタフェースのメンバ変数" },
      { label: "C", text: "インタフェースの抽象メソッド" },
      { label: "D", text: "クラスの抽象メソッド" },
      { label: "E", text: "クラスの具象メソッド" },
      { label: "F", text: "クラスのコンストラクタ" }
    ],
    answers: ["A", "E", "F"],
    explanation: "A: クラスのメンバ変数にprivateを付けてカプセル化できます。E: 具象メソッドにprivateを付けてクラス内部でのみ使用可能にできます。F: コンストラクタにprivateを付けることでファクトリーパターンやシングルトンパターンを実現できます。B/C: インタフェースのメンバは暗黙的にpublicです。D: abstractメソッドはサブクラスでオーバーライドする必要があるためprivateにできません。"
  },
  {
    id: 37,
    text: "privateで宣言されたメソッドにアクセスできるものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "同じクラス内でオーバーロードされたメソッド" },
      { label: "B", text: "サブクラスのpublicメソッド" },
      { label: "C", text: "super()を使用するサブクラスのコンストラクタ" },
      { label: "D", text: "同じソースファイル内の他のクラスのメソッド" },
      { label: "E", text: "同じクラス内のprivateコンストラクタ" }
    ],
    answers: ["A", "E"],
    explanation: "privateメソッドは同じクラス内からのみアクセスできます。A: 同じクラス内のオーバーロードメソッドからアクセス可能。E: 同じクラス内のコンストラクタからアクセス可能。B/C: サブクラスからはprivateメンバにアクセスできません。D: 別のクラスからはアクセスできません（同じファイル内でも不可）。"
  },
  {
    id: 38,
    text: "Dog extends Animal クラスのprivateメソッドにアクセスできるものを1つ選択してください。",
    code: "class Animal {\n    // ...\n}\nclass Dog extends Animal {\n    private void bark() {\n        // ...\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "同じパッケージ内のすべてのクラス" },
      { label: "B", text: "同じクラスのメソッド" },
      { label: "C", text: "スーパークラスのメソッド" },
      { label: "D", text: "Dogのサブクラスのメソッド" }
    ],
    answers: ["B"],
    explanation: "private修飾子が付いたメソッドは、そのメソッドが定義されたクラス内からのみアクセスできます。同じパッケージ内の他のクラス(A)、スーパークラス(C)、サブクラス(D)からはアクセスできません。"
  },
  {
    id: 39,
    text: "Java言語での継承の説明として正しいものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "1つのスーパークラスは複数のサブクラスをもてる" },
      { label: "B", text: "サブクラスはスーパークラスのメンバをすべて継承する" },
      { label: "C", text: "1つのサブクラスは複数のスーパークラスを継承できる" },
      { label: "D", text: "サブクラスをもとにさらにサブクラスを作成できる" }
    ],
    answers: ["A", "D"],
    explanation: "A: 1つのクラスを複数のクラスが継承可能です。D: 多段階継承が可能です。B: コンストラクタやprivateメンバは継承されません（アクセスできない）。C: Javaは単一継承のみです（多重継承は不可、インタフェースの複数実装は可能）。"
  },
  {
    id: 40,
    text: "MyClass.javaのクラス宣言として正しいものを3つ選択してください。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "public class MyClass extends java.lang.* {}" },
      { label: "B", text: "final class MyClass {}" },
      { label: "C", text: "public class MyClass {}" },
      { label: "D", text: "private class MyClass extends Object {}" },
      { label: "E", text: "class MyClass extends java.lang.Object {}" }
    ],
    answers: ["B", "C", "E"],
    explanation: "B: finalクラスは有効です（継承不可）。C: 標準的なpublicクラス宣言です。E: java.lang.Objectを明示的に継承しています（全クラスは暗黙的にObjectを継承）。A: ワイルドカード*でextendsはできません。D: トップレベルクラスにprivate修飾子は付けられません。"
  },
  {
    id: 41,
    text: "Animalクラスのオブジェクトが生成されるコードを2つ選択してください。",
    code: "class Animal {}\nclass Dog extends Animal {}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "Animal obj;" },
      { label: "B", text: "new Animal();" },
      { label: "C", text: "Animal obj = new Animal();" },
      { label: "D", text: "Animal obj = null;" },
      { label: "E", text: "Animal obj = Dog;" }
    ],
    answers: ["B", "C"],
    explanation: "B: new Animal()でオブジェクトが生成されます（変数に代入しなくてもオブジェクトは生成される）。C: オブジェクトを生成してobjに代入します。A: 変数の宣言のみでオブジェクトは生成されません。D: null代入でオブジェクトは生成されません。E: Dogはクラス名であり、newなしではオブジェクト生成にならない構文エラーです。"
  },
  {
    id: 42,
    text: "AクラスのメソッドをBクラスで正しくオーバーライドしているものを2つ選択してください。",
    code: "class A {\n    void processA() {}\n    void processB(String data) {}\n    int processC(int val1, double val2) { return 0; }\n    int processD(int num) { return 0; }\n}\nclass B extends A {\n    // 以下の選択肢から正しいオーバーライドを選択\n}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "public void processA() {}" },
      { label: "B", text: "public void processB(String[] data) {}" },
      { label: "C", text: "int processC(int val1, float val2) { return 0; }" },
      { label: "D", text: "int processD(int num) { return 0; }" }
    ],
    answers: ["A", "D"],
    explanation: "A(processA): 戻り値、メソッド名、引数が同じで、アクセス修飾子がパッケージプライベート→publicに拡大されているため有効なオーバーライドです。D(processD): 戻り値、メソッド名、引数がすべて同一で有効なオーバーライドです。B(processB): 引数がString→String[]に変更されているためオーバーライドではなくオーバーロードです。C(processC): 引数がdouble→floatに変更されているためオーバーライドではありません。"
  },
  {
    id: 43,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "class MyClassA {\n    int a;\n    MyClassA() { a = 1; }\n    MyClassA(int a) { this.a = a; }\n}\nclass MyClassB extends MyClassA {\n    int b, c;\n    MyClassB(int b) { this.b = b; }\n    MyClassB(int b, int c) { this(b); this.c = c; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        MyClassB obj = new MyClassB(10, 20);\n        System.out.println(obj.a + \" \" + obj.b + \" \" + obj.c);\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "0 10 20" },
      { label: "B", text: "1 10 20" },
      { label: "C", text: "10 10 20" },
      { label: "D", text: "10 0 20" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "new MyClassB(10,20)が呼ばれると、this(b)→MyClassB(10)→暗黙のsuper()→MyClassA()→a=1。次にthis.b=10。MyClassB(int b, int c)に戻りthis.c=20。結果としてa=1, b=10, c=20となります。暗黙のsuper()はMyClassA()（引数なしコンストラクタ）を呼びます。"
  },
  {
    id: 44,
    text: "①に挿入すると「MyClassB:MyClassA」と出力されるコードを選択してください。",
    code: "class MyClassA {\n    String name = \"MyClassA\";\n}\nclass MyClassB extends MyClassA {\n    String name = \"MyClassB\";\n    void disp() {\n        System.out.println(name + \":\" + [①]);\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "MyClassA.name" },
      { label: "B", text: "super().name" },
      { label: "C", text: "this.name" },
      { label: "D", text: "super(name)" },
      { label: "E", text: "this(name)" },
      { label: "F", text: "super.name" }
    ],
    answers: ["F"],
    explanation: "スーパークラスのフィールドにアクセスするにはsuper.nameを使用します。nameはMyClassBでシャドウイング（隠蔽）されているため、単にnameやthis.nameではMyClassBのnameが返されます。super.nameでMyClassAのname(\"MyClassA\")にアクセスできます。super()はコンストラクタ呼び出し用です。"
  },
  {
    id: 45,
    text: "①に挿入するとstr1とstr2を正しく初期化できるコードを1つ選択してください。",
    code: "public class Bar {\n    String str1;\n    String str2;\n    String str3 = \"orange\";\n    Bar() {\n        [①]\n    }\n    Bar(String s) {\n        str2 = s;\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "str1 = \"peach\"; this.Bar(str3);" },
      { label: "B", text: "this(\"grape\"); str1 = \"peach\";" },
      { label: "C", text: "Bar(\"grape\"); str1 = \"peach\";" },
      { label: "D", text: "str1 = \"peach\"; this(\"grape\");" }
    ],
    answers: ["B"],
    explanation: "this()によるコンストラクタチェーンはコンストラクタの最初のステートメントでなければなりません。Bではthis(\"grape\")が最初にあり、Bar(String s)が呼ばれてstr2=\"grape\"が設定されます。その後str1=\"peach\"が設定されます。A: this.Bar()はメソッド呼び出し構文であり、コンストラクタ呼び出しではありません。C: Bar()はコンストラクタの呼び出し構文として不正です。D: this()が最初のステートメントではないためコンパイルエラーになります。"
  },
  {
    id: 46,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "public class Test {\n    int num1;\n    int num2;\n    Test(int num2) {\n        this.num2 = num2;\n    }\n    Test(int num1, int num2) {\n        this.num1 = num1++;\n        this(++num2);\n    }\n    public static void main(String[] args) {\n        Test obj = new Test(3, 5);\n        System.out.println(obj.num1 + \":\" + obj.num2);\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "3:6" },
      { label: "B", text: "4:5" },
      { label: "C", text: "3:5" },
      { label: "D", text: "4:6" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["E"],
    explanation: "this()呼び出しはコンストラクタの最初のステートメントでなければなりません。Test(int num1, int num2)では、this.num1 = num1++が先に記述されているため、this(++num2)は最初のステートメントではありません。コンパイルエラーが発生します。"
  },
  {
    id: 47,
    text: "abstract修飾子が付与できるものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "パッケージ" },
      { label: "B", text: "クラス" },
      { label: "C", text: "メソッド" },
      { label: "D", text: "コンストラクタ" },
      { label: "E", text: "変数" }
    ],
    answers: ["B", "C"],
    explanation: "abstractはクラスとメソッドに付与できます。抽象クラスはインスタンス化できず、抽象メソッドはサブクラスで実装が必要です。パッケージ、コンストラクタ、変数にはabstractを付けることはできません。"
  },
  {
    id: 48,
    text: "抽象クラスの説明として正しいものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "抽象クラス内のメソッドはオーバーライドできない" },
      { label: "B", text: "抽象クラス内の変数は暗黙的に定数になる" },
      { label: "C", text: "抽象クラスをもとにサブクラスを作成できない" },
      { label: "D", text: "インスタンス化できない" },
      { label: "E", text: "抽象メソッドを含めることも含めないこともできる" }
    ],
    answers: ["D", "E"],
    explanation: "D: 抽象クラスはnewでインスタンス化できません。E: 抽象クラスは抽象メソッドを0個以上含めることができます（具象メソッドのみでもabstractクラスにできます）。A: メソッドはオーバーライド可能です（finalでない限り）。B: 変数は自動的に定数にはなりません。C: サブクラスを作成できます（それが目的です）。"
  },
  {
    id: 49,
    text: "①に挿入するとコンパイルが成功するコードを選択してください。",
    code: "abstract class MyClassA {\n    public abstract void methodA();\n    void methodB() {\n        System.out.println(\"methodB\");\n    }\n}\npublic class MyClassB extends MyClassA {\n    [①]\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "void methodA() { System.out.println(\"A\"); }" },
      { label: "B", text: "public void methodA() { System.out.println(\"A\"); }" },
      { label: "C", text: "public abstract void methodA();" },
      { label: "D", text: "public void methodB() { System.out.println(\"B\"); }" },
      { label: "E", text: "void methodB() { System.out.println(\"B\"); }" }
    ],
    answers: ["B"],
    explanation: "抽象メソッドmethodA()はpublicで宣言されているため、オーバーライドする際もpublic以上のアクセスレベルが必要です。Bはpublic voidで正しくオーバーライドしています。A: アクセス修飾子なし（パッケージプライベート）はpublicより狭いためコンパイルエラー。C: MyClassBは具象クラスなのでabstractメソッドを持てません。D/E: methodBのオーバーライドだけではmethodAが未実装のためコンパイルエラー。"
  },
  {
    id: 50,
    text: "ポリモフィズムと最も関連が深いものを1つ選択してください。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "インタフェースの実装クラスを作成しメソッドをオーバーライド" },
      { label: "B", text: "クラス内でメソッドをオーバーライドし戻り値を統一" },
      { label: "C", text: "スーパークラスの型で宣言した変数にサブクラスのオブジェクトを代入" },
      { label: "D", text: "インタフェースを継承" },
      { label: "E", text: "具象クラスを継承" }
    ],
    answers: ["C"],
    explanation: "ポリモフィズム（多態性）の最も典型的な例は、スーパークラス型の変数にサブクラスのオブジェクトを代入することです。これにより、同じ型の変数で異なる実装のメソッドを呼び出すことができます。実行時に実際のオブジェクトの型に基づいてメソッドが選択されます。"
  },
  {
    id: 51,
    text: "①に挿入すると正常にコンパイルできるコードを2つ選択してください。",
    code: "interface Foo {\n    [①]\n}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "void methodA(String name);" },
      { label: "B", text: "public static void methodB(String name);" },
      { label: "C", text: "String name;" },
      { label: "D", text: "private void methodC(int val);" },
      { label: "E", text: "public String methodD();" }
    ],
    answers: ["A", "E"],
    explanation: "A: インタフェースの抽象メソッド宣言として有効です（暗黙的にpublic abstract）。E: publicな抽象メソッド宣言として有効です。B: staticメソッドはインタフェース内でボディが必要です（Java 8以降）。C: 変数は初期化が必要です（暗黙的にpublic static final）。D: privateメソッドはインタフェースではボディが必要です（Java 9以降で可能）。"
  },
  {
    id: 52,
    text: "インタフェースの定義として正しいものを2つ選択してください。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "public interface Foo { public String data = \"sample\"; abstract void method(String info); }" },
      { label: "B", text: "public interface Foo { public String data = \"sample\"; void method(String info); }" },
      { label: "C", text: "public interface Foo { abstract String data = \"sample\"; abstract void method(String info); }" },
      { label: "D", text: "public interface Foo { private String data = \"sample\"; public void method(String info); }" }
    ],
    answers: ["A", "B"],
    explanation: "A: dataは暗黙的にpublic static finalで初期化済みです。メソッドはabstract指定で有効です。B: dataは同様に有効です。メソッドは暗黙的にpublic abstractで有効です。C: 変数にabstractは付けられません。D: インタフェースの変数にprivateは指定できません。"
  },
  {
    id: 53,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "interface Foo {\n    public int exec(int x, int y);\n}\nclass MyClassA implements Foo {\n    public int exec(int x, int y) {\n        return (x * y) / 2;\n    }\n}\nclass MyClassB implements Foo {\n    public int exec(int x, int y) {\n        return (int)(x * y * 3.14);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Foo[] foos = {new MyClassA(), new MyClassB()};\n        System.out.println(foos[0].exec(10, 5) + \" \");\n        System.out.println(foos[1].exec(10, 5));\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイル、実行ともに成功し、25 157 が出力される" },
      { label: "B", text: "MyClassAでコンパイルエラー" },
      { label: "C", text: "MyClassBでコンパイルエラー" },
      { label: "D", text: "Testクラスでコンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["A"],
    explanation: "MyClassAとMyClassBは両方ともFooインタフェースを正しく実装しています。foos[0].exec(10,5)はMyClassAのexecを呼び、(10*5)/2=25。foos[1].exec(10,5)はMyClassBのexecを呼び、(int)(10*5*3.14)=(int)(157.0)=157。インタフェース型の配列で異なる実装クラスのメソッドを呼ぶポリモフィズムの例です。出力は25と157です。"
  },
  {
    id: 54,
    text: "①に挿入すると「MyClassB:Hello」と出力されるコードを選択してください。",
    code: "class MyClassA {\n    String str;\n}\nclass MyClassB extends MyClassA {\n    MyClassB(String str) {\n        this.str = str;\n    }\n    void show() {\n        System.out.println(\"MyClassB:\" + str);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        MyClassA obj = new MyClassB(\"Hello\");\n        [①]\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "show();" },
      { label: "B", text: "obj.show();" },
      { label: "C", text: "((MyClassB)obj).show();" },
      { label: "D", text: "((MyClassA)obj).show();" }
    ],
    answers: ["C"],
    explanation: "objはMyClassA型で宣言されていますが、実際はMyClassBのインスタンスです。show()メソッドはMyClassBにのみ定義されているため、MyClassA型のobjから直接呼び出すことはできません。((MyClassB)obj).show()のようにMyClassBにダウンキャストすることで、MyClassBのshow()を呼び出すことができます。"
  },
  {
    id: 55,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "class MyClassA {\n    void show() {\n        System.out.print(\"MyClassA\");\n    }\n}\nclass MyClassB extends MyClassA {\n    public void show() {\n        System.out.print(\"MyClassB\");\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        MyClassA obj = new MyClassB();\n        obj.show();\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "MyClassA" },
      { label: "B", text: "MyClassB" },
      { label: "C", text: "MyClassA MyClassB" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "objはMyClassA型ですが、実際のオブジェクトはMyClassBです。show()はMyClassBでオーバーライドされているため、動的ディスパッチにより実行時にはMyClassBのshow()が呼ばれます。これがポリモフィズムの動作です。出力は\"MyClassB\"です。"
  },
  {
    id: 56,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "class MyClassA {\n    static String data;\n    public void show() {\n        System.out.println(\"MyClassA:\" + data);\n    }\n}\nclass MyClassB extends MyClassA {\n    public static void show() {\n        System.out.println(\"MyClassB:\" + data);\n    }\n}\npublic class Test {\n    public static void main(String[] args) {\n        MyClassA obj1 = new MyClassA();\n        MyClassA obj2 = new MyClassB();\n        MyClassA.data = \"Hello\";\n        obj1.show();\n        MyClassA.data = \"Bye\";\n        obj2.show();\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "MyClassA:Hello MyClassB:Bye" },
      { label: "B", text: "MyClassA:Bye MyClassB:Bye" },
      { label: "C", text: "MyClassB:Bye MyClassB:Bye" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "MyClassAのshow()はインスタンスメソッドですが、MyClassBのshow()はstaticメソッドとして定義されています。Javaではインスタンスメソッドをstaticメソッドでオーバーライドすることはできません。これにより、MyClassBのコンパイル時にエラーが発生します。"
  },
  {
    id: 57,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "class SuperClass {\n    public void show() {\n        System.out.println(\"SuperClass\");\n    }\n}\npublic class SubClass {\n    public void show() {\n        System.out.println(\"SubClass\");\n    }\n    public static void main(String[] args) {\n        SuperClass obj = new SubClass();\n        obj.show();\n    }\n}",
    command: "java SubClass.java",
    selectCount: 1,
    options: [
      { label: "A", text: "SuperClass" },
      { label: "B", text: "SubClass" },
      { label: "C", text: "SuperClass SubClass" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "SubClassはSuperClassを継承していません（extendsキーワードがない）。そのためSuperClass obj = new SubClass()は型の不一致でコンパイルエラーが発生します。SubClassをSuperClassの型に代入するには、SubClassがSuperClassを継承している必要があります。"
  },
  {
    id: 58,
    text: "次のコードでコンパイルエラーが発生する行を選択してください。",
    code: "class MyClassA {}\nclass MyClassB extends MyClassA {}\npublic class Test {\n    public static void main(String[] args) {\n        MyClassA obj1 = new MyClassA();    // 5行目\n        MyClassB obj2 = new MyClassB();    // 6行目\n        MyClassB obj3 = (MyClassB)obj1;    // 7行目（6行目の変数を使用）\n        Object obj4 = (Object)obj1;        // 8行目（7行目の変数を使用）\n        String obj5 = (String)obj1;        // 9行目（8行目の変数を使用）\n        MyClassA obj6 = (MyClassA)obj2;    // 10行目（9行目の変数を使用）\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "6行目" },
      { label: "B", text: "7行目" },
      { label: "C", text: "8行目" },
      { label: "D", text: "9行目" }
    ],
    answers: ["C"],
    explanation: "8行目の (String)obj1 でコンパイルエラーが発生します。MyClassAとStringの間に継承関係がないため、キャストできません。Stringクラスはfinalなのでコンパイラはobj1がString型になり得ないことを判断できます。6行目のダウンキャストは実行時エラーの可能性がありますがコンパイルは通ります。7行目のObject型へのアップキャストは常に有効です。9行目のMyClassA型へのキャストも有効です。"
  },
  {
    id: 59,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "interface Fruit {\n    int get();\n}\nclass Lemon implements Fruit {\n    public int get() { return 7; }\n}\nclass Orange {\n    public int get() { return 64; }\n}\npublic class Test {\n    public static void main(String[] args) {\n        Fruit[] ary = {new Lemon(), new Orange()};\n        for (Fruit f : ary) {\n            System.out.println(f.get());\n        }\n    }\n}",
    command: "java Test.java",
    selectCount: 1,
    options: [
      { label: "A", text: "Lemonクラスでコンパイルエラー" },
      { label: "B", text: "Orangeクラスでコンパイルエラー" },
      { label: "C", text: "Testクラスでコンパイルエラー" },
      { label: "D", text: "成功し「7」「64」が出力される" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["C"],
    explanation: "OrangeクラスはFruitインタフェースをimplementsしていません。そのため、Fruit[]型の配列にnew Orange()を格納しようとするとコンパイルエラーが発生します。OrangeにはFruit型との互換性がないため、Testクラスの配列初期化でコンパイルエラーになります。"
  },
  {
    id: 60,
    text: "次のコードをコンパイル、実行した結果として正しいものを選択してください。",
    code: "class MyClassA {\n    private int num = 100;\n    void show(int val) {\n        System.out.println(val);\n    }\n    void show() {\n        System.out.println(num);\n    }\n}\npublic class MyClassB extends MyClassA {\n    public static void main(String[] args) {\n        MyClassA obj = new MyClassB();\n        obj.show(obj.num);\n    }\n}",
    command: "java MyClassB.java",
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイル・実行ともに成功" },
      { label: "B", text: "コンパイル成功・実行時エラー" },
      { label: "C", text: "privateなnum変数へのアクセスでコンパイルエラー" },
      { label: "D", text: "showメソッドがMyClassBに定義されていないのでエラー" }
    ],
    answers: ["C"],
    explanation: "numフィールドはMyClassAでprivateとして宣言されています。privateメンバは宣言されたクラス内からのみアクセス可能です。MyClassBのmainメソッド内でobj.numとしてアクセスしようとすると、privateメンバへの外部アクセスとなりコンパイルエラーが発生します。show()メソッドは継承されているのでアクセス可能です。"
  }
];

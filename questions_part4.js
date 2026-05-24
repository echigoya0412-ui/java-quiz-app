const questionsP4 = [
  {
    id: 31,
    text: "次のコードがあります。実行した結果として正しいものはどれですか。",
    code: "class Test {\n    public static void main(String[] args) {\n        System.out.print(\"data: \" + args[2] + args[3]);\n    }\n    public static void main(char[] args) {\n        System.out.print(\"data = \" + args[0] + args[1]);\n    }\n}",
    command: "java Test w x y z",
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "実行時エラー" },
      { label: "C", text: "data: xy" },
      { label: "D", text: "data: yz" },
      { label: "E", text: "data = xy" },
      { label: "F", text: "data = yz" }
    ],
    answers: ["D"],
    explanation: "main(String[] args) がJVMの実行エントリポイントとして使用されます。main(char[]) はオーバーロードですが、JVMはmain(String[])を呼び出します。java Test w x y z の場合、args[0]=\"w\", args[1]=\"x\", args[2]=\"y\", args[3]=\"z\"。args[2]+args[3] = \"yz\"。出力は \"data: yz\" です。"
  },
  {
    id: 32,
    text: "メソッドのオーバーロードをするために、①に挿入するコードとして正しいものはどれですか。",
    code: "class User {\n    int method(int num) { return 1; }\n    [①]\n}",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "float method(int num) { return 1; }" },
      { label: "B", text: "long method(int num) { return 1; }" },
      { label: "C", text: "int method(char num) { return 1; }" },
      { label: "D", text: "public int method(long num) { return 1; }" },
      { label: "E", text: "public void method(int num) {}" }
    ],
    answers: ["C", "D"],
    explanation: "オーバーロードは同名メソッドで引数リスト（型、数、順序）が異なる必要があります。C: int method(char num) は引数の型がcharでintと異なるためオーバーロードです。D: public int method(long num) は引数の型がlongでintと異なるためオーバーロードです。A, B, E: 引数リストが(int num)で元のメソッドと同じため、戻り値やアクセス修飾子だけ異なってもオーバーロードにはなりません（コンパイルエラー）。"
  },
  {
    id: 33,
    text: "次のコードがあります。コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Test {\n    public float calc(int val1, float val2) { return val1 + val2; }\n    public String calc(String val1, String val2) { return val1 + val2; }\n    public static void main(String[] args) {\n        Test obj = new Test();\n        System.out.println(\"ans : \" + obj.calc(10, 30));\n        System.out.println(\"ans : \" + obj.calc(\"20\", \"10\"));\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "ans : 40 (改行) ans : 2010" },
      { label: "B", text: "ans : 40.0 (改行) ans : 2010" },
      { label: "C", text: "ans : 40 (改行) ans : 30" },
      { label: "D", text: "ans : 40.0 (改行) ans : 30" },
      { label: "E", text: "コンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "calc(10, 30) の呼び出しでは、10はint型、30もint型です。calc(int, float) メソッドが選ばれ、intの30がfloatに自動拡大変換されます。10 + 30.0f = 40.0fが返され、\"ans : 40.0\" と出力されます。calc(\"20\", \"10\") では calc(String, String) が呼ばれ、文字列の連結により \"2010\" が返されます。出力は \"ans : 40.0\" と \"ans : 2010\" です。"
  },
  {
    id: 34,
    text: "クラスのメンバ変数を宣言する際に、適切にカプセル化し、値を変更されないようにするために使用すべき修飾子はどれですか。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "private final" },
      { label: "B", text: "private static" },
      { label: "C", text: "public final" },
      { label: "D", text: "public abstract" },
      { label: "E", text: "private abstract" }
    ],
    answers: ["A"],
    explanation: "カプセル化にはprivate修飾子でアクセスを制限し、値を変更されないようにするにはfinal修飾子を使用します。private final が両方の要件を満たします。B: staticは共有変数であり変更可能。C: publicでは外部からアクセス可能でカプセル化に反します。D, E: abstractは変数には使用できません。"
  },
  {
    id: 35,
    text: "カプセル化を実現しているコードはどれですか。",
    code: null,
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "private int id;" },
      { label: "B", text: "public int id;" },
      { label: "C", text: "private int getId() { return id; }" },
      { label: "D", text: "public int getId() { return id; }" },
      { label: "E", text: "private void setId(int id) { this.id = id; }" },
      { label: "F", text: "public void setId(int id) { this.id = id; }" }
    ],
    answers: ["A", "D", "F"],
    explanation: "カプセル化は、フィールドをprivateにし、publicなgetter/setterメソッドでアクセスを制御することで実現します。A: private int id; はフィールドをprivateにしており、カプセル化の基本です。D: public int getId() はpublicなgetterで、外部からの読み取りアクセスを提供します。F: public void setId(int id) はpublicなsetterで、外部からの書き込みアクセスを提供します。B: publicフィールドはカプセル化に反します。C, E: private なgetter/setterは外部からアクセスできず、カプセル化の目的を果たしません。"
  },
  {
    id: 36,
    text: "setData() メソッドの説明として正しいものはどれですか。",
    code: "class SuperClass { }\nclass SubClass extends SuperClass {\n    private double data;\n    private void setData(double data) { this.data = data; }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "同じパッケージ内にあるクラスのメソッドから呼び出すことができる" },
      { label: "B", text: "すべてのパッケージ内にあるクラスのメソッドから呼び出すことができる" },
      { label: "C", text: "同じパッケージ内にある、SuperClassクラスのサブクラスのメソッドから呼び出すことができる" },
      { label: "D", text: "クラス内の他メソッドから呼び出すことができる" },
      { label: "E", text: "スーパークラスのメソッドから呼び出すことができる" }
    ],
    answers: ["D"],
    explanation: "setDataメソッドはprivate修飾子が付いています。private メソッドは同じクラス内からのみアクセス可能です。D: SubClassクラス内の他のメソッドから呼び出すことができます。A: 同じパッケージでもprivateにはアクセスできません。B: すべてのパッケージからもアクセスできません。C: サブクラスからもprivateにはアクセスできません。E: スーパークラスからもprivateにはアクセスできません。"
  },
  {
    id: 37,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Foo {\n    static int val;\n    static int methodA() { return ++val; }\n    int methodB() { return methodA(); }\n}\nclass Test {\n    public static void main(String[] args) {\n        Foo obj = new Foo();\n        obj.methodA();\n        int num = obj.methodB();\n        System.out.println(num);\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "1" },
      { label: "B", text: "2" },
      { label: "C", text: "4行目でコンパイルエラー" },
      { label: "D", text: "7行目でコンパイルエラー" },
      { label: "E", text: "13行目でコンパイルエラー" },
      { label: "F", text: "14行目でコンパイルエラー" }
    ],
    answers: ["B"],
    explanation: "val は static で初期値0です。obj.methodA() で ++val → val=1 を返す（結果は使わない）。obj.methodB() は内部で methodA() を呼び、++val → val=2 を返す。num=2 となり、出力は \"2\" です。インスタンスメソッドからstaticメソッドの呼び出しは問題ありません。"
  },
  {
    id: 38,
    text: "スーパークラスの構成要素のうち、サブクラスが継承するものはどれですか。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "public修飾子が指定されたコンストラクタ" },
      { label: "B", text: "private修飾子が指定されたコンストラクタ" },
      { label: "C", text: "final修飾子のみ指定されたメソッド" },
      { label: "D", text: "public修飾子が指定されたインスタンスメソッド" },
      { label: "E", text: "private修飾子が指定されたインスタンスメソッド" },
      { label: "F", text: "private修飾子が指定された変数" }
    ],
    answers: ["C", "D"],
    explanation: "サブクラスが継承するもの: C: finalメソッド（デフォルトアクセス以上）はオーバーライドできませんが継承はされます。D: publicインスタンスメソッドは継承されます。A, B: コンストラクタは継承されません（どのアクセス修飾子でも）。E: privateメソッドは継承されません。F: private変数は直接アクセスできませんが、メモリ上は存在します（直接の継承とは言えません）。"
  },
  {
    id: 39,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Foo {\n    Foo() { System.out.print(\"Foo() \"); }\n    Foo(String s) { System.out.print(\"Foo(String s) \"); }\n}\nclass Test extends Foo {\n    public static void main(String[] args) {\n        Test obj = new Test(\"test\");\n    }\n    Test() { System.out.print(\"Test() \"); }\n    Test(String s) { System.out.print(\"Test(String s) \"); }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Test(String s) Foo(String s)" },
      { label: "B", text: "Test(String s) Foo()" },
      { label: "C", text: "Foo(String s) Test(String s)" },
      { label: "D", text: "Foo() Test(String s)" }
    ],
    answers: ["D"],
    explanation: "new Test(\"test\") で Test(String s) コンストラクタが呼ばれます。Test(String s) には明示的な super() 呼び出しがないため、コンパイラが暗黙的に super()（引数なし）を挿入します。先にFoo() が実行され \"Foo() \" が出力された後、Test(String s) の本体が実行され \"Test(String s) \" が出力されます。super(s) と明示的に呼ばない限り、Foo(String s) は呼ばれません。"
  },
  {
    id: 40,
    text: "User クラスのサブクラスで task() メソッドのオーバーライドをする際の説明として正しいものはどれですか。",
    code: "class User {\n    int data;\n    public long task(int num) { return data + num; }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "オーバーライドを行うメソッドで引数の変数名はnumとする必要がある" },
      { label: "B", text: "オーバーライドを行うメソッドの戻り値はlong型とする必要がある" },
      { label: "C", text: "オーバーライドを行うメソッドの引数リストを変更することができる" },
      { label: "D", text: "オーバーライドを行うメソッドは、private修飾子を付与することができる" },
      { label: "E", text: "オーバーライドを行うメソッドは戻り値をint型にすることができる" }
    ],
    answers: ["B"],
    explanation: "オーバーライドでは、メソッドのシグネチャ（名前と引数リスト）を同一にする必要があります。戻り値の型は同じか、共変戻り値型（サブクラス型）にできますが、プリミティブ型では共変は適用されないため、戻り値はlong型とする必要があります。A: 引数の変数名は任意で、型と順序が同じであれば構いません。C: 引数リストを変更するとオーバーロードになります。D: アクセス修飾子をpublicからprivateに狭めることはできません。E: プリミティブ型では共変戻り値型は適用されないため、int型にはできません。"
  },
  {
    id: 41,
    text: "メソッドをオーバーライドしてコンパイルが成功するために、①に挿入するコードはどれですか。",
    code: "class Employee { protected void report() { System.out.println(\"Employee:report()\"); } }\nclass Manager extends Employee { [①] }",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "void report(String s1, String s2) { System.out.println(\"Manager: report()\"); }" },
      { label: "B", text: "public void report(String s1) { System.out.println(\"Manager: report()\"); }" },
      { label: "C", text: "public void report() { System.out.println(\"Manager: report()\"); }" },
      { label: "D", text: "void report() { System.out.println(\"Manager: report()\"); }" }
    ],
    answers: ["C"],
    explanation: "オーバーライドの条件は、メソッド名と引数リストが同一で、アクセス修飾子が同じかそれより広いことです。C: public void report() はprotectedより広いpublicで、引数なしで正しいオーバーライドです。D: void report() はデフォルトアクセスで、protectedより狭いためコンパイルエラーです。A, B: 引数が異なるためオーバーライドではなくオーバーロードです（問題は「オーバーライド」を求めている）。"
  },
  {
    id: 42,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class A { void show() { System.out.print(\"X\"); } }\nclass B { public void show() { System.out.print(\"Y\"); } }\nclass Test {\n    public static void main(String[] args) {\n        A obj = new B();\n        obj.show();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "X" },
      { label: "B", text: "Y" },
      { label: "C", text: "XY" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "クラスBはクラスAを継承していません（extends Aの記述がない）。そのため、A obj = new B(); は型の不一致でコンパイルエラーになります。BをAの変数に代入するには、BがAのサブクラスである必要があります。"
  },
  {
    id: 43,
    text: "メソッドのオーバーロードを行っているコードはどれですか。",
    code: "class ClassA { long funcA(int num) { return 0; } long funcB(int num, String str) { return 0; } }\nclass ClassB extends ClassA {\n    long funcA(int num) { return 0; }\n    int funcA(String str) { return 0; }\n    int funcA(long num) { return 0; }\n    public long funcB(int num, String str) { return 0; }\n    public long funcB(String str, int num) { return 0; }\n}",
    command: null,
    selectCount: 3,
    options: [
      { label: "A", text: "3行目 funcA(int num)" },
      { label: "B", text: "4行目 funcA(String str)" },
      { label: "C", text: "5行目 funcA(long num)" },
      { label: "D", text: "6行目 funcB(int num, String str)" },
      { label: "E", text: "7行目 funcB(String str, int num)" }
    ],
    answers: ["B", "C", "E"],
    explanation: "オーバーロードは同名メソッドで引数リストが異なるものです。B: funcA(String str) は ClassA の funcA(int num) と引数の型が異なるためオーバーロードです。C: funcA(long num) も ClassA の funcA(int num) と引数の型が異なるためオーバーロードです。E: funcB(String str, int num) は ClassA の funcB(int num, String str) と引数の順序が異なるためオーバーロードです。A: funcA(int num) は同じシグネチャなのでオーバーライドです。D: funcB(int num, String str) も同じシグネチャなのでオーバーライドです。"
  },
  {
    id: 44,
    text: "コンパイル、実行が成功し Hi:Text の出力結果を得るために、①に挿入するコードとして正しいものはどれですか。",
    code: "class ClassA {\n    String msg;\n    ClassA(String msg) { this.msg = msg; }\n}\nclass ClassB extends ClassA {\n    private String type;\n    ClassB(String msg, String type) { [①] }\n    public static void main(String[] args) {\n        ClassB obj = new ClassB(\"Hi\", \"Text\");\n        System.out.println(obj.msg + \":\" + obj.type);\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "super(msg); this.type = type;" },
      { label: "B", text: "this.type = type; super(msg);" },
      { label: "C", text: "this.type = type; super.msg = msg;" },
      { label: "D", text: "super.msg = msg; this.type = type;" },
      { label: "E", text: "this.type = type; ClassA.msg = msg;" }
    ],
    answers: ["A"],
    explanation: "ClassAにはデフォルトコンストラクタがないため、サブクラスのコンストラクタでsuper()を明示的に呼ぶ必要があります。super(msg)でClassAのコンストラクタを呼び、this.type = typeでtypeを初期化します。B: super()呼び出しはコンストラクタの最初の文でなければなりません。C, D, E: super()を呼ばないためClassAのコンストラクタが呼ばれず、コンパイルエラーです（ClassAにデフォルトコンストラクタがない）。"
  },
  {
    id: 45,
    text: "ClassAの構成要素のうち、ClassBが継承するものはどれですか。",
    code: "class ClassA { private String msg; int num; ClassA() {} ClassA(String msg, int num) {} public void show() {} }\nclass ClassB extends ClassA { }",
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "コンストラクタ" },
      { label: "B", text: "msg変数" },
      { label: "C", text: "num変数" },
      { label: "D", text: "show()メソッド" }
    ],
    answers: ["C", "D"],
    explanation: "C: num変数はデフォルトアクセス（パッケージプライベート）で、同じパッケージのサブクラスから継承されます。D: show()メソッドはpublicで継承されます。A: コンストラクタは継承されません。B: msg変数はprivateで、サブクラスから直接アクセスできません（メモリ上は存在しますが、継承されたとは言えません）。"
  },
  {
    id: 46,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class A { int func(int x, int y) { return x / y; } }\nclass B { int func(int x, int y) { return (int)(Math.PI * x * y); } }\nclass Test {\n    public static void main(String[] args) {\n        A a = new A(); System.out.print(a.func(10, 2) + \" \");\n        B b = new B(); System.out.print(b.func(10, 10));\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Aクラス内の定義内容に問題がありコンパイルエラーとなる" },
      { label: "B", text: "Bクラス内の定義内容に問題がありコンパイルエラーとなる" },
      { label: "C", text: "14行目でコンパイルエラーとなる" },
      { label: "D", text: "16行目でコンパイルエラーとなる" },
      { label: "E", text: "5 314 と出力する" },
      { label: "F", text: "5 314.1592653589793 と出力する" }
    ],
    answers: ["E"],
    explanation: "クラスAとBは独立したクラスで、継承関係はありません。a.func(10, 2) = 10/2 = 5。b.func(10, 10) = (int)(Math.PI * 10 * 10) = (int)(314.159...) = 314。出力は \"5 314\" です。各クラスの定義に問題はなく、コンパイルは成功します。"
  },
  {
    id: 47,
    text: "プログラムが正常にコンパイルするために、①に挿入するコードとして正しいものはどれですか。",
    code: "abstract class ClassA { public abstract String method(); }\nclass ClassB extends ClassA { [①] }",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "void method(String s){}" },
      { label: "B", text: "String method() { return null; }" },
      { label: "C", text: "public void method() {}" },
      { label: "D", text: "public void method(String s){}" },
      { label: "E", text: "public String method() { return null; }" },
      { label: "F", text: "public String method(String s) { return null; }" }
    ],
    answers: ["E"],
    explanation: "抽象メソッド public abstract String method() をオーバーライドするには、同じシグネチャ（メソッド名と引数リスト）で、アクセス修飾子が同じかそれより広く、戻り値型が同じ（またはサブタイプ）である必要があります。E: public String method() は全条件を満たします。B: String method() はデフォルトアクセスで、publicより狭いためコンパイルエラー。A, D, F: 引数が異なるためオーバーライドではなくオーバーロード（抽象メソッドが未実装のまま）。C: 戻り値がvoidでString型と異なるためコンパイルエラー。"
  },
  {
    id: 48,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "public abstract class Foo {\n    public Foo(String str) { methodA(str); methodB(); }\n    public void methodA(String str) { System.out.print(str + \" \"); }\n    public abstract void methodB();\n    public static void main(String[] args) {\n        System.out.print(\"start \");\n        Foo obj = new Foo(\"orange\");\n        obj.methodA(\"lemon\");\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "start orange lemon と出力する" },
      { label: "B", text: "start の出力後、実行時エラーが発生する" },
      { label: "C", text: "start orange の出力後、実行時エラーが発生する" },
      { label: "D", text: "コンパイルエラー" },
      { label: "E", text: "実行されるが何も出力されない" }
    ],
    answers: ["D"],
    explanation: "抽象クラスは直接インスタンス化できません。new Foo(\"orange\") は抽象クラスFooをインスタンス化しようとしているため、コンパイルエラーが発生します。抽象クラスを使用するには、具象サブクラスを作成してインスタンス化する必要があります。"
  },
  {
    id: 49,
    text: "サブクラス側でスーパークラス側のメソッドを実装することを何と呼びますか。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "オーバーロード" },
      { label: "B", text: "継承" },
      { label: "C", text: "ポリモフィズム" },
      { label: "D", text: "実行時バインド" },
      { label: "E", text: "カプセル化" }
    ],
    answers: ["B"],
    explanation: "サブクラス側でスーパークラス側のメソッドを実装するのは継承によって実現されます。Aのオーバーロードは同名で引数が異なるメソッドの定義です。Cのポリモフィズムは型に応じて異なるメソッドが呼ばれる仕組みです。Dの実行時バインドはポリモフィズムの仕組みの一部です。Eのカプセル化はデータを隠蔽する仕組みです。"
  },
  {
    id: 50,
    text: "インタフェースの説明として正しいものはどれですか。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "インタフェースで宣言した変数は、暗黙的にprivate finalとなる" },
      { label: "B", text: "インタフェースがインタフェースを実装(implements)できる" },
      { label: "C", text: "インタフェースは複数のインタフェースを継承(extends)できる" },
      { label: "D", text: "インタフェースでは抽象メソッドを1つ以上宣言する必要がある" }
    ],
    answers: ["C"],
    explanation: "C: インタフェースは複数のインタフェースを extends で継承できます（クラスの多重継承はできませんが、インタフェースの多重継承は可能）。A: インタフェースの変数は暗黙的にpublic static finalです（private finalではない）。B: インタフェースは他のインタフェースをimplementsではなくextendsで継承します。D: Java 8以降、インタフェースにはデフォルトメソッドやstaticメソッドを含めることができ、抽象メソッドがなくても構いません。"
  },
  {
    id: 51,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "interface I { void show(); }\nclass ClassA implements I { public void show() { System.out.println(\"ClassA\"); } }\nclass ClassB extends ClassA {\n    public void show() { System.out.println(\"ClassB\"); }\n    public static void main(String[] args) {\n        I obj; ClassA objA = new ClassA(); ClassB objB = new ClassB();\n        obj = objB; obj.show();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "ClassA" },
      { label: "B", text: "ClassB" },
      { label: "C", text: "コンパイルエラー" },
      { label: "D", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "obj = objB でインタフェース型の変数objにClassBのインスタンスを代入しています。obj.show() はClassBのshow()メソッドが呼ばれます（実行時バインド/ポリモフィズム）。ClassBはClassAを継承しており、ClassAはインタフェースIを実装しているため、ClassBもIの型変数に代入可能です。出力は \"ClassB\" です。"
  },
  {
    id: 52,
    text: "Foo クラスの定義として正しいものはどれですか。",
    code: "interface X { }\ninterface Y { }\nclass Z {}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "public class Foo extends Z implements X, Y {}" },
      { label: "B", text: "public class Foo implements Z extends X, Y {}" },
      { label: "C", text: "public class Foo extends X, Y implements Z {}" },
      { label: "D", text: "public class Foo implements X, Y extends Z {}" }
    ],
    answers: ["A"],
    explanation: "Javaでは、クラスの宣言順序は extends → implements の順です。A: public class Foo extends Z implements X, Y {} は正しい順序です。Zクラスを継承し、X, Yインタフェースを実装しています。B, D: implementsがextendsの前に来ておりコンパイルエラー。C: X, Yはインタフェースなのでextendsでの継承はできません（クラスの場合）。"
  },
  {
    id: 53,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class ClassA {\n    String name;\n    ClassA(String name) { this.name = name; }\n    public void show() { System.out.println(name); }\n}\nclass ClassB extends ClassA {\n    private String no;\n    ClassB(String no, String name) { super(name); this.no = no; }\n    public void show() { System.out.println(no + \" \" + name); }\n}\nclass Test {\n    public static void main(String[] args) {\n        ClassA obj1, obj2;\n        obj1 = new ClassA(\"taro\"); obj2 = new ClassB(\"T001\", \"ryo\");\n        obj1.show(); obj2.show();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "taro (改行) T001 ryo" },
      { label: "B", text: "taro (改行) T001 taro" },
      { label: "C", text: "taro (改行) taro" },
      { label: "D", text: "T001 ryo (改行) T001 ryo" },
      { label: "E", text: "コンパイルエラー" },
      { label: "F", text: "実行時エラー" }
    ],
    answers: ["A"],
    explanation: "obj1 = new ClassA(\"taro\"): ClassAのコンストラクタでname=\"taro\"。obj1.show() は ClassA の show() で \"taro\" を出力。obj2 = new ClassB(\"T001\", \"ryo\"): super(\"ryo\")でname=\"ryo\"、no=\"T001\"。obj2.show() は ClassB の show()（オーバーライド）で \"T001 ryo\" を出力。ポリモフィズムにより、obj2の実際の型ClassBのshow()が呼ばれます。"
  },
  {
    id: 54,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Bar { void func() { System.out.println(\"Bar:func()\"); } }\nclass Test extends Bar {\n    void func() { System.out.println(\"Test: func()\"); }\n    public static void main(String[] args) {\n        Bar obj = new Bar(); Test tobj = (Test)obj; tobj.func();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Bar:func()" },
      { label: "B", text: "Test:func()" },
      { label: "C", text: "コンパイルエラー" },
      { label: "D", text: "実行時エラー" }
    ],
    answers: ["D"],
    explanation: "Bar obj = new Bar() で Bar のインスタンスを作成。Test tobj = (Test)obj で Bar インスタンスを Test 型にダウンキャストしようとしています。コンパイル時にはBar→Testのキャストは許可されますが、実行時にobjの実際の型がBarであり、Testではないため、ClassCastExceptionが発生します。実行時エラーです。"
  },
  {
    id: 55,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Bar { String getStr() { return \"Bar\"; } }\nclass Test extends Bar {\n    String getStr() { return \"Test\"; }\n    public static void main(String[] args) {\n        Bar obj = new Test(); Test t = (Test)obj;\n        System.out.println(t.getStr());\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Bar" },
      { label: "B", text: "Test" },
      { label: "C", text: "コンパイルエラー" },
      { label: "D", text: "実行時エラー" }
    ],
    answers: ["B"],
    explanation: "Bar obj = new Test() でTestインスタンスをBar型変数に代入。Test t = (Test)obj でBar型変数をTest型にダウンキャスト。objの実際の型はTestなので、キャストは成功します。t.getStr() は Test クラスの getStr() が呼ばれ、\"Test\" が出力されます。"
  },
  {
    id: 56,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "class Automobile { public void drive() { System.out.print(\"go forward \"); } }\nclass Ferrari extends Automobile { public void drive() { System.out.print(\"go fast \"); } }\npublic class Test {\n    public static void main(String[] args) {\n        Automobile[] autos = { new Automobile(), new Ferrari() };\n        for (int x = 0; x < autos.length; x++) autos[x].drive();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "go fast go fast" },
      { label: "B", text: "go fast go forward" },
      { label: "C", text: "go forward go fast" },
      { label: "D", text: "go forward go forward" },
      { label: "E", text: "5行目でコンパイルエラーが発生する" },
      { label: "F", text: "9行目でコンパイルエラーが発生する" },
      { label: "G", text: "11行目でコンパイルエラーが発生する" }
    ],
    answers: ["C"],
    explanation: "autos[0] = new Automobile() → drive() で \"go forward \" を出力。autos[1] = new Ferrari() → drive() は Ferrari の オーバーライドされたメソッドが呼ばれ \"go fast \" を出力。ポリモフィズムにより、配列要素の実際の型に応じたメソッドが呼ばれます。出力は \"go forward go fast\" です。"
  },
  {
    id: 57,
    text: "コンパイル、実行した結果として正しいものはどれですか。",
    code: "interface Book { void getName(); }\nclass Java implements Book { public void getName() { System.out.print(\"Java \"); } }\nclass Linux { public void getName() { System.out.print(\"Linux \"); } }\npublic class Test {\n    public static void main(String[] args) {\n        Book[] books = { new Java(), new Linux() };\n        for (int x = 0; x < books.length; x++) books[x].getName();\n    }\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "コンパイルエラー" },
      { label: "B", text: "実行時エラー" },
      { label: "C", text: "Java Java" },
      { label: "D", text: "Linux Linux" },
      { label: "E", text: "Java Linux" }
    ],
    answers: ["A"],
    explanation: "LinuxクラスはBookインタフェースをimplementsしていません。そのため、Book[] books = { new Java(), new Linux() } の new Linux() の部分で、Book型の配列にLinuxオブジェクトを代入しようとしてコンパイルエラーが発生します。LinuxがBookインタフェースを実装していないため、型の互換性がありません。"
  },
  {
    id: 58,
    text: "com.example.city.Metropolitan クラスを利用する際の正しい import 文はどれですか。",
    code: null,
    command: null,
    selectCount: 2,
    options: [
      { label: "A", text: "import com.*;" },
      { label: "B", text: "import com.example.*;" },
      { label: "C", text: "import com.example.city.Metropolitan;" },
      { label: "D", text: "import com.example.city.Met*;" },
      { label: "E", text: "static import com.example.city.Metropolitan;" },
      { label: "F", text: "import static com.example.city.Metropolitan;" },
      { label: "G", text: "import com.example.city.*;" }
    ],
    answers: ["C", "G"],
    explanation: "C: import com.example.city.Metropolitan; は完全修飾名で特定のクラスをインポートする正しい文です。G: import com.example.city.*; はcom.example.cityパッケージの全クラスをインポートする正しい文です。A: com直下のクラスのみで、サブパッケージは含まれません。B: com.example直下のクラスのみです。D: ワイルドカードは * のみ使用可能で、Met* のような部分一致はできません。E: 構文が誤りで、正しくは import static です。F: import static は静的メンバのインポートに使用し、クラス自体のインポートではありません。"
  },
  {
    id: 59,
    text: "次の要件を満たす Manager クラスの宣言コードで正しいものはどれですか。\n【要件】Manager クラスはcom.prj.view パッケージに属する。Manager クラスは com.prj.controller パッケージに属する各クラスを利用したい。",
    code: null,
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "import com.prj.*; public class Manager {}" },
      { label: "B", text: "package com.prj.*; import com.prj.controller; public class Manager {}" },
      { label: "C", text: "package com.prj.view; import com.prj.controller; public class Manager {}" },
      { label: "D", text: "package com.prj.view; import com.prj.controller.*; public class Manager {}" },
      { label: "E", text: "package com.prj.view.*; import com.prj.controller.*; public class Manager {}" }
    ],
    answers: ["D"],
    explanation: "要件: Managerクラスはcom.prj.viewパッケージに属し、com.prj.controllerパッケージの各クラスを利用したい。D: package com.prj.view; でパッケージを正しく宣言し、import com.prj.controller.*; でcontrollerパッケージの全クラスをインポートしています。A: packageが未指定。B: package にワイルドカードは使えません。C: import com.prj.controller; はパッケージ名だけでクラス指定がないため不正。E: package にワイルドカードは使えません。"
  },
  {
    id: 60,
    text: "i変数の値を直接変更できるのはどれですか。",
    code: "package pack;\nclass Test {\n    int i = 100;\n}",
    command: null,
    selectCount: 1,
    options: [
      { label: "A", text: "Testクラスを継承したすべてのサブクラス" },
      { label: "B", text: "packパッケージ内に含まれるすべてのクラス" },
      { label: "C", text: "このTestクラスのみ" },
      { label: "D", text: "すべてのクラス" },
      { label: "E", text: "どのクラスからも直接変更はできない" }
    ],
    answers: ["B"],
    explanation: "int i = 100; はアクセス修飾子が指定されていないため、デフォルトアクセス（パッケージプライベート）です。デフォルトアクセスは同じパッケージ内のクラスからアクセスできます。B: packパッケージ内に含まれるすべてのクラスからアクセス可能です。A: 異なるパッケージのサブクラスからはアクセスできません。C: 同パッケージの他のクラスからもアクセスできるため、Testクラスのみではありません。D: 他のパッケージからはアクセスできません。"
  }
];

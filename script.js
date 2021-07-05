new Vue({
  el: "#app",
  data: {
    questions: [
      {
        question: "0.5.ceilの実行結果は以下のうちどちらか",
        answers: ["0", "1"],
        answer: 1,
        description:
          "Numericクラスのインスタンスメソッドであるceilメソッドは、自身と等しいかより大きな整数のうち最小のものを返す。(小数点以下を切り上げ、より大きい方の整数に丸める)",
      },
      {
        question: "0.5.floorの実行結果は以下のうちどちらか",
        answers: ["0", "1"],
        answer: 0,
        description:
          "Numericクラスのインスタンスメソッドであるfloorメソッドは、自身と等しいかより小さな整数のうち最大のものを返す。(小数点以下を切り下げ、より小さい方の整数に丸める)",
      },
      {
        question: "0.5.roundの実行結果は以下のうちどちらか",
        answers: ["0", "1"],
        answer: 0,
        description:
          "Numericクラスのインスタンスメソッドであるroundメソッドは、自身と最も近い整数を返し、中央値0.5や-0.5はそれぞれ1,-1に切り上げされる。",
      },
      {
        question: "0.50.truncateの実行結果は以下のうちどちらか",
        answers: ["0", "1"],
        answer: 0,
        description:
          "Numericクラスのインスタンスメソッドであるtruncateメソッドは、0から自身までの整数で、自身にもっとも近い整数を返す。",
      },
      {
        question: "数値を表す組み込みクラスのComlexは何のクラスでしょう",
        answers: ["有理数", "整数", "浮動小数点", "複素数"],
        answer: 3,
      },
      {
        question: "数値を表す組み込みクラスのBignumは何のクラスでしょう",
        answers: ["有理数", "全ての整数", "整数のうち大きな整数", "複素数"],
        answer: 2,
      },
      {
        question: "to_sメソッドに対して、inspectの違いは何でしょう",
        answers: [
          "インスタンス変数や値が出力される",
          "オブジェクトの内容の文字列が返される",
          "オブジェクトの値の文字列が出力される",
        ],
        answer: 0,
      },
      {
        question:
          "未定義なメソッドが呼び出された時に呼ばれるメソッドは以下のうちどれでしょう",
        answers: ["to_s", "inspect", "method_missing"],
        answer: 2,
      },
      {
        question:
          "次のうち、インスタンス変数一覧を取得するメソッドはどれでしょう",
        answers: [
          "instance_variable_get",
          "instance_variable_set",
          "instance_variables",
        ],
        answer: 2,
      },
      {
        question: "オブジェクト全てのメソッドを取得するメソッドはどれでしょう",
        answers: ["methods", "clone", "instance_vareables"],
        answer: 0,
      },
      {
        question: "オブジェクトの特異メソッドを取得するメソッドはどれでしょう",
        answers: ["methods", "singleton_methods", "private_methods"],
        answer: 1,
      },
      {
        question:
          "freezeメソッドが設定されたものを変更しようとすると発生するエラーはどれでしょう",
        answers: ["ArgumentError", "NoMethodError", "RunTimeError"],
        answer: 2,
      },
      {
        question: "2進数の基底指示子はどれでしょう。",
        answers: ["0b", "0oまたは0", "0x", "0d"],
        answer: 0,
      },
      {
        question: "8進数の基底指示子はどれでしょう。",
        answers: ["0oまたは0", "0x", "0b", "0d"],
        answer: 0,
      },
      {
        question: "10進数の基底指示子はどれでしょう。",
        answers: ["0b", "0oまたは0", "0d", "0x"],
        answer: 2,
      },
      {
        question: "16進数の基底指示子はどれでしょう。",
        answers: ["0b", "0oまたは0", "0d", "0x"],
        answer: 3,
      },
      {
        question:
          "以下のメソッドで同一性判定(object_idが一致するかの判定)をするものを選びなさい",
        answers: ["eql?メソッド", "==メソッド", "equal?メソッド"],
        answer: 2,
      },
      {
        question: "以下の配列メソッドで破壊的メソッドを選びなさい",
        answers: ["<<", "compact", "count", "[]"],
        answer: 0,
      },
      {
        question: "以下の配列メソッドで破壊的メソッドを選びなさい",
        answers: ["concat", "to_s", "delete_at", "drop"],
        answer: 0,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["=", "!", "%", "+"],
        answer: 0,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["!", "~", "**", "?"],
        answer: 3,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: [":", "!~", "[]", "%"],
        answer: 0,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["<<", "`", "..", "&"],
        answer: 2,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["<=", "...", "=~", "^"],
        answer: 1,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["not", "/", "+", ">>"],
        answer: 0,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["[]=", "!", "&&", "!="],
        answer: 2,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: [">", "||", ">>", "+@"],
        answer: 1,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["-", "^", "=~", "or"],
        answer: 3,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["[]", "|", "::", "&"],
        answer: 2,
      },
      {
        question: "再代入できない演算子を選びなさい",
        answers: ["===", "+", "*", "自己代入演算子"],
        answer: 3,
      },
    ],
    questionIndex: 0,
    answers: [],
    correctCount: 0,
    url: "https://twitter.com/intent/tweet?text=",
    link: "https://festive-knuth-449665.netlify.app/",
  },
  computed: {
    currentQuestion: function () {
      return this.questions[this.questionIndex];
    },
    completed: function () {
      return this.questions.length == this.answers.length;
    },
  },
  methods: {
    addAnswer: function (index) {
      this.answers.push(index);
      if (this.currentQuestion.answer == this.answers[this.questionIndex]) {
        this.correctCount++;
      }
      if (!this.completed) {
        this.questionIndex++;
      }
    },
  },
});

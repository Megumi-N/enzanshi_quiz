new Vue({
  el: "#app",
  data: {
    questions: [
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
      if (!this.completed) {
        this.questionIndex++;
      } else if (this.questions.length == this.answers.length) {
        let correctCount = 0;
        for (let i in this.answers) {
          let answer = this.answers[i];
          if (answer == this.questions[i].answer) {
            correctCount++;
          }
        }
        // alert(correctCount + "問正解です");
      }
      //  else {
      //   this.questionIndex++;
      // }
    },
  },
});

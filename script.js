new Vue({
  el: "#app",
  data: {
    questions: [
      {
        question: "sizeメソッドのエイリアスメソッドはどれでしょう",
        answers: ["select", "length", "prepend"],
        answer: 1,
        description: "",
      },
      {
        question: "prependメソッドのエイリアスメソッドはどれでしょう",
        answers: ["select", "product", "unshift"],
        answer: 2,
        description: "",
      },
      {
        question: "ハッシュのキーを配列として返すメソッドはどちらでしょう",
        answers: ["values", "keys"],
        answer: 1,
        description: "",
      },
      {
        question:
          "ハッシュの中に指定されたキーが存在するか確認するメソッドではないものを選びなさい",
        answers: ["has_key?", "member?", "key?", "include?", "value?"],
        answer: 4,
        description: "",
      },
      {
        question: "新しいキーと値を取得する場合、正しい構文はどれでしょう",
        answers: [
          "ハッシュ[値]=キー",
          "ハッシュ[キー]=値",
          "ハッシュ=[キー][値]",
        ],
        answer: 1,
        description:
          "イミュータブルとは、作成後にその状態を変えることのできないオブジェクトのこと。",
      },
      {
        question: "シンボルの特徴で正しいものを選びなさい",
        answers: [
          "整数で管理",
          "文字列より処理が遅い",
          "文字列よりメモリ使用効率が悪い",
          "object_idが異なる",
        ],
        answer: 0,
        description:
          "シンボルの特徴：①内部的に整数②同じシンボルは同じオブジェクト(object_idが一致)のため使用効率がいい③イミュータブル",
      },
      {
        question:
          "arrayクラスのselectメソッドのエイリアスメソッドはどれでしょう",
        answers: ["find_all", "collect", "reduce", "detect"],
        answer: 0,
        description: "",
      },
      {
        question: "arrayクラスのfindメソッドのエイリアスメソッドはどれでしょう",
        answers: ["find_all", "collect", "reduce", "detect"],
        answer: 3,
        description: "",
      },
      {
        question: "arrayクラスのmapメソッドのエイリアスメソッドはどれでしょう",
        answers: ["find_all", "collect", "reduce", "detect"],
        answer: 1,
        description: "",
      },
      {
        question:
          "arrayクラスのinjectメソッドのエイリアスメソッドはどれでしょう",
        answers: ["find_all", "collect", "reduce", "detect"],
        answer: 2,
        description: "",
      },
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
        answer: 1,
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
        description: "",
      },
      {
        question: "to_sメソッドに対して、inspectの違いは何でしょう",
        answers: [
          "インスタンス変数や値が出力される",
          "オブジェクトの内容の文字列が返される",
          "オブジェクトの値の文字列が出力される",
        ],
        answer: 0,
        description: "",
      },
      {
        question:
          "未定義なメソッドが呼び出された時に呼ばれるメソッドは以下のうちどれでしょう",
        answers: ["to_s", "inspect", "method_missing"],
        answer: 2,
        description: "",
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
        description: "",
      },
      {
        question: "オブジェクト全てのメソッドを取得するメソッドはどれでしょう",
        answers: ["methods", "clone", "instance_variables"],
        answer: 0,
        description: "",
      },
      {
        question: "オブジェクトの特異メソッドを取得するメソッドはどれでしょう",
        answers: ["methods", "singleton_methods", "private_methods"],
        answer: 1,
        description: "",
      },
      {
        question:
          "freezeメソッドが設定されたものを変更しようとすると発生するエラーはどれでしょう",
        answers: ["ArgumentError", "NoMethodError", "RunTimeError"],
        answer: 2,
        description: "",
      },
      {
        question: "基底指示子の組み合わせで正しいものはどれでしょう。",
        answers: [
          "２進数：0b、8進数：0oまたは0、10進数：0x、16進数：0d",
          "２進数：0d、8進数：0oまたは0、10進数：0b、16進数：0x",
          "２進数：0b、8進数：0oまたは0、10進数：0d、16進数：0x",
          "２進数：0x、8進数：0oまたは0、10進数：0d、16進数：0d",
        ],
        answer: 2,
        description: "",
      },
      {
        question:
          "以下のメソッドで同一性判定(object_idが一致するかの判定)をするものを選びなさい",
        answers: ["eql?メソッド", "==メソッド", "equal?メソッド"],
        answer: 2,
        description: "",
      },
      {
        question: "以下の配列メソッドで破壊的メソッドを選びなさい",
        answers: ["flatten", "concat", "compact", "drop"],
        answer: 1,
        description: "",
      },
      {
        question: "以下の配列メソッドで破壊的メソッドを選びなさい",
        answers: ["repeated_permutation", "rotate", "shuffle", "<<"],
        answer: 3,
        description: "",
      },
      {
        question: "以下の配列メソッドで破壊的メソッドを選びなさい",
        answers: ["shift", "collect", "map", "zip"],
        answer: 0,
        description: "",
      },
      {
        question: "再代入できない演算子の組み合わせで、正しいものを選びなさい",
        answers: [
          "=  ?:  ..  ...  not  &&  and  ||  or  ::",
          "=  ?:  ..  ...  not  &  and  |  or  ::",
          "=  ?:  ..  ...  &&  <=>  ==  ===  =~ ||  ::",
        ],
        answer: 0,
        description: "",
      },
      {
        question: "&&について、正しいものを選びなさい。",
        answers: [
          "左辺を評価し、結果が真であった場合にはその値を返す。左辺の評価が偽であった場合には右辺を評価しその評価結果を返す。",
          "両方の配列に含まれる要素からなる新しい配列を返し、重複する要素は取り除く。",
          "両方の配列にいずれかに含まれる要素を全て含む新しい配列を返し、重複する要素は取り除く。",
          "左辺を評価し、結果が偽であった場合はその値(つまり nil か false) を返す。左辺の評価結果が真であった場合には右辺を評価しその結果を返す。",
        ],
        answer: 3,
        description: "",
      },
      {
        question: "&&とandで優先度の高い演算子はどちらか。",
        answers: ["&&", "and"],
        answer: 0,
        description: "",
      },
      {
        question: 'p "1test".to_iの実行結果はどれか。',
        answers: ["0", "nil", "実行エラー", "1"],
        answer: 3,
        description: "",
      },
      {
        question: 'p "test1".to_iの実行結果はどれか。',
        answers: ["0", "nil", "実行エラー", "1"],
        answer: 0,
        description: "",
      },
    ], // end
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

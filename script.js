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
      {
        question: "フォーマット文字列%xの説明で正しいものはどれか。",
        answers: [
          "日付(%m/%d/%y)",
          "月を表す数字(01-12)",
          "分(00-59)",
          "西暦の下2桁(00-99)",
        ],
        answer: 0,
        description: "",
      },
      {
        question: "フォーマット文字列%mの説明で正しいものはどれか。",
        answers: ["月を表す数字(01-12)", "分(00-59)"],
        answer: 0,
        description: "",
      },
      {
        question: "フォーマット文字列%Mの説明で正しいものはどれか。",
        answers: ["月を表す数字(01-12)", "分(00-59)"],
        answer: 1,
        description: "",
      },
      {
        question: "フォーマット文字列%dの説明で正しいものはどれか。",
        answers: ["日(01-31)", "日付(%m/%d/%y)"],
        answer: 0,
        description: "",
      },
      {
        question: "フォーマット文字列%Dの説明で正しいものはどれか。",
        answers: ["日(01-31)", "日付(%m/%d/%y)"],
        answer: 1,
        description: "",
      },
      {
        question: "フォーマット文字列%yの説明で正しいものはどれか。",
        answers: ["西暦を表す数(9999)", "西暦の下2桁(00-99)"],
        answer: 1,
        description: "",
      },
      {
        question: "フォーマット文字列%Yの説明で正しいものはどれか。",
        answers: ["西暦を表す数(9999)", "西暦の下2桁(00-99)"],
        answer: 0,
        description: "",
      },
      {
        question: "フォーマット文字列%xと同じ結果を表すものはどれか。",
        answers: ["%y", "%m", "%D", "%M"],
        answer: 2,
        description: "",
      },
      {
        question: "Arrayクラスでdelete_ifと同じ動作をするメソッドはどれか。",
        answers: ["reject", "reject!", "reject_if", "delete"],
        answer: 1,
        description:
          "reject_ifメソッドは存在しない。deleteメソッドは引数で指定されたvalと等しい要素を全て削除する(破壊的)。rejectはブロック内の式で偽になったものを配列にして返す。",
      },
      {
        question:
          "次のStringクラスのインスタンスメソッドで存在しないものはどれか。",
        answers: ["to_f", "to_h", "to_i", "to_r", "to_s", "to_sym"],
        answer: 1,
        description: "",
      },
      {
        question: "p String.method_defined?(:to_h)の実行結果はどれか。",
        answers: ["true", "false"],
        answer: 1,
        description:
          "Moduleクラスのmethod_difined?は、引数のメソッド(StringまたはSymbol)が存在していればtrueを返し、存在していなければfalseを返す。to_hは存在しないのでfalseが返る。",
      },
      {
        question: 'p ["a","b"].product(["c","d"])の実行結果はどれか。',
        answers: [
          "[['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']]",
          "['a', 'c'], ['a', 'd'], ['b', 'c'], ['b', 'd']",
        ],
        answer: 0,
        description:
          "Arrayクラスのインスタンスメソッドは、レシーバの配列と引数の配列から、それぞれ1つ要素を取り出し新しい配列を作成し、全ての配列を要素とする配列([[],[]..]ということ)を返す。",
      },
      {
        question:
          "Kernelクラスのモジュール関数openの第二引数のオープンコード・エンコーディングのうち、ファイルの読み書き両用モードで読み書き位置が先頭にセットされ、ファイルが存在していても変更は加えないものはどれか。",
        answers: ["r+", "w+", "a+"],
        answer: 0,
        description: "r+：ファイルの読み書き位置は先頭にセットされる",
      },
      {
        question:
          "Kernelクラスのモジュール関数openの第二引数のオープンコード・エンコーディングのうち、ファイルの読み書き両用モードで読み書き位置が先頭にセットされ、ファイルが存在していれば内容を空にするものはどれか。",
        answers: ["r+", "w+", "a+"],
        answer: 1,
        description:
          "w+：r+ と同じだが、オープン時にファイルがすでに存在していればその内容を空にする。",
      },
      {
        question:
          "Kernelクラスのモジュール関数openの第二引数のオープンコード・エンコーディングのうち、ファイルの読み書き両用モードで読み書き位置が先頭にセットされるが、書き込みはファイル末尾になるものはどれか。",
        answers: ["r+", "w+", "a+"],
        answer: 2,
        description:
          "a+：r+と同様、ファイルの読み込み位置は先頭にセットされる、書き込みは常にファイル末尾に行われる。",
      },
      {
        question:
          "Kernelクラスのモジュール関数openの第二引数のオープンコード・エンコーディングのうち、IO#seekの影響を受けないものはどれか。",
        answers: ["r+", "w+", "a+"],
        answer: 2,
        description: "a+の書き込みは IO#seek などの影響を受けない。",
      },
      {
        question:
          "[6, 5, 4, 3, 2, 1].partition {|i| i % 3 == 0 }の実行結果で正しいものはどれか",
        answers: [
          "[[6, 3], [5, 4, 2, 1]]",
          "[[5, 4, 2, 1],[6, 3]]",
          "[[6],[3]]",
        ],
        answer: 0,
        description:
          "Enumerableクラスのpartitionメソッドは、条件を満たす要素を真の場合と偽の場合で分割する。",
      },
      {
        question:
          '["1", "2", "3"]という実行結果にしたい時、正しいものはどれか。',
        answers: [
          '"1;2:3".split(;|:)',
          '"1;2:3".split(/;|:/)',
          '"1;2:3".slice(;|:)',
        ],
        answer: 1,
        description:
          "Stringクラスのsplitメソッドは、引数に指定された区切り文字で分割して配列にする。",
      },
      {
        question:
          "x=0の時、1.step(4,1){|i| print x += 1}の実行結果で正しいものはどれか。",
        answers: ["1234", "4", "4321"],
        answer: 0,
        description:
          "Numericクラスのstepメソッドは第一引数(limit)と第二引数(step)を設定し、レシーバからlimitまでstep分加算し、ブロックに渡す。",
      },
      {
        question: "Stringクラスのchopの説明で正しいものを選びなさい。",
        answers: [
          "文字列の最初の文字を取り除いた新しい文字列を生成して返す非破壊的メソッド",
          "文字列の最初の文字を取り除いた新しい文字列を生成して返す破壊的メソッド",
          "文字列の最後の文字を取り除いた新しい文字列を生成して返す非破壊的メソッド",
          "文字列の最後の文字を取り除いた新しい文字列を生成して返す破壊的メソッド",
        ],
        answer: 2,
        description:
          'chopメソッドは文字列の最後の文字を取り除いた新しい文字列を生成して返す。ただし、文字列の終端が "＼r＼n" であればその 2 文字を取り除く。非破壊的メソッド。',
      },
      {
        question:
          'h = {1=>"a", 2=>"b"}の時、p h.values_at(1,2,3)の結果で正しいものはどれか。',
        answers: ["['0', '1', nill]", "['a', 'b', nil]"],
        answer: 1,
        description:
          "Hashクラスのvalues_atメソッドは、引数で指定されたキーに対応する値を配列にして返す非破壊的メソッド。",
      },
      {
        question: 'p "apple".sub(/p+/,"-")の実行結果として正しいものはどれか。',
        answers: ["ale", "a-le", "a-ple"],
        answer: 1,
        description:
          "Stringクラスのsubメソッドは、文字列中で引数にマッチした最初の部分を第二引数で置き換えた文字列を生成して返す非破壊的メソッド。",
      },
      {
        question: "1.eql?(0.1)の実行結果として正しいものはどれか。",
        answers: ["true", "false"],
        answer: 1,
        description:
          "Numericクラスのeql?メソッドは同じクラスのobjectかつ==で等しいと判定されるとtrueになる。",
      },
      {
        question:
          "16進数で一つの桁において扱うことのできる数値で間違っているものはどれか。",
        answers: ["0", "G", "E", "9"],
        answer: 1,
        description:
          "16真数の1桁で扱われるもの：0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F",
      },
      {
        question:
          "Threadクラスのスレッドを生成するstart(fork)とnewの違いは何か。",
        answers: [
          "start(fork)はinitializeメソッドを呼ばない",
          "オブジェクトが生成されない",
        ],
        answer: 0,
        description:
          "基本的にThread.new と同じだがinitialize メソッドは呼ばない。",
      },
      {
        question:
          'File.dirname("home/user/tmp")の実行結果で正しいものはどれか。',
        answers: ["home", "home/user", "home/user/tmp"],
        answer: 1,
        description:
          "File.dirnameは引数に指定した文字列の一番後ろの/より前の文字列を返す。",
      },
      {
        question: 'File.dirname("homeusertmp")の実行結果で正しいものはどれか。',
        answers: [".", "home/user"],
        answer: 0,
        description:
          'File.dirnameは引数に指定した文字列の一番後ろの/より前の文字列を返す。/を含まない文字列の場合"."を返す。',
      },
      {
        question:
          "[1,2,3].each_cons(2){|i| print i}の実行結果で正しいものはどれか。",
        answers: ["[1, 2][2, 3]", "[1, 2][3, nil]", "[1, 2]", "[1, 2][3]"],
        answer: 0,
        description: "",
      },
      {
        question:
          "[1,2,3].each_slice(2){|i| p i}の実行結果で正しいものはどれか。",
        answers: ["[1, 2][2, 3]", "[1, 2][3, nil]", "[1, 2]", "[1, 2][3]"],
        answer: 3,
        description: "",
      },
      {
        question: "p ({a:100,b:100}).invertの実行結果で正しいものはどれか",
        answers: ["{100=>:b}", "{100=>:a}"],
        answer: 0,
        description:
          "入れ替えの結果が重複した場合、後に定義されたものが優先される。",
      },
      {
        question:
          "次のStringクラスのインスタンスメソッドで存在しないものはどれか。",
        answers: ["to_f", "to_a", "to_i", "to_r", "to_s", "to_sym"],
        answer: 1,
        description: "",
      },
      {
        question: "do … endと{}で結合度が強いのはどちらか",
        answers: ["do … end", "{}"],
        answer: 1,
        description: "",
      },
      {
        question: "stripの説明で正しいものはどれか",
        answers: [
          "末尾から改行コードを取り除く非破壊的メソッド",
          "文字列の先頭と末尾の空白文字(＼t＼r＼n＼f＼v)を削除する非破壊的メソッド",
          "末尾の文字を取り除く。末尾が＼r＼nであれば2文字とも取り除く",
        ],
        answer: 1,
        description: "",
      },
      {
        question: 'a=*"a"の時、p aの実行結果として正しいのはどれか',
        answers: ['["a"]', '"a"', "nil"],
        answer: 0,
        description: "",
      },
      {
        question: "Stringクラスのメソッドで存在しないのはどちらか",
        answers: ["append", "<<"],
        answer: 0,
        description: "",
      },
      {
        question: "Date#strftimeのフォーマット文字列で%Fは何を表すか",
        answers: ["日付(%Y-%m-%d)", "日付(%y/%m/%d)"],
        answer: 0,
        description: "",
      },
      {
        question: "p [1,2].zip([3,4])の実行結果はどれか",
        answers: ["[[1, 2], [3, 4]]", "[[1, 3], [2, 4]]"],
        answer: 1,
        description: "",
      },
      {
        question: "メソッドと変数が探索順位で優先されるのはどちらか。",
        answers: ["変数", "メソッド"],
        answer: 0,
        description: "変数が優先される",
      },
      {
        question: "3.times {|i| print i}の実行結果はどれか",
        answers: ["123", "012"],
        answer: 1,
        description: "",
      },
      {
        question: 'p "1;2:3".split(";")の実行結果として正しいものはどれか',
        answers: ['["1", "2:3"]', '["12:3"]'],
        answer: 0,
        description: "",
      },
      {
        question: "stripメソッドは破壊的メソッド",
        answers: ["正しい", "誤り"],
        answer: 1,
        description: "stripは非破壊的メソッドである",
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

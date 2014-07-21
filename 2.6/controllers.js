// A-Mailのコアとなるサービスのモジュール
var aMailServices = angular.module("AMail", ['ngRoute']);

// URLとテンプレート、そしてコントローラの対応関係を指定します
function emailRouteConfig($routeProvider) {
    $routeProvider.
        when("/", {
            controller: ListController,
            templateUrl: "list.html"
        }).
        when("/view/:id", {
            controller: DetailController,
            templateUrl: "detail.html"
        }).
        otherwise({
            redirectTo: "/"
        });
}

// A-Mailサービスがルートを解釈できるようにする為の設定
aMailServices.config(emailRouteConfig);

// メールのサンプルデータ
var messages = [
    {
        id: 0, sender: "jean@somecompany.com", subject: "ご無沙汰しております",
        date: "2013/12/7 12:32:00", recipients: ["greg@somecompany.com"],
        message: "昼食をご一緒させてください。" +
        "今年は共同作業できそうな案件がたくさんあります。"
    },
    {
        id: 1, sender: "maria@somecompany.com", subject: "私のノートPCはどこですか？",
        date: "2013/12/6 8:15:12", recipients: ["greg@somecompany.com"],
        message: "私の席の引き出しに返してくれたのだと思っていましたが、" +
        "見当たりません。"
    },
    {
        id: 2, sender: "bill@somecompany.com", subject: "パイソンを探しています",
        date: "2013/12/6 20:35:02", recipients: ["greg@somecompany.com"],
        message: "すみません、ペットのパイソンがかごから逃げ出しました。" +
        "すばしっこい方ではないので、見かけたら教えてください。"
    }
];

// リストのテンプレートからメッセージにアクセスできるようにします
function ListController($scope) {
    $scope.messages = messages;
}

// URLを解析してメッセージのIDを取り出し、該当するメッセージのオブジェクトを取得します
function DetailController($scope, $routeParams) {
    $scope.message = messages[$routeParams.id];
}

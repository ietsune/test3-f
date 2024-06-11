const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(express.static(__dirname)); // サーバーのルートディレクトリを静的ファイルの提供元として指定

// ルートへのGETリクエストを処理
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// /messageへのPOSTリクエストを処理
app.post('/message', (req, res) => {
    const inputText = req.body.inputText;
    const modifiedMessage = inputText + 'だみょ～ん';

    // ここにRaspberry Piへのメッセージ送信ロジックを追加

    // 例として、成功したと仮定してレスポンスを返す
    res.json({ message: modifiedMessage });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

# express_api_example
webAPIを叩く練習。
この練習を糧に、RailsやRails×ReactのSPIで使う時のイメージを付ける。<br>

※参考
YouTube => https://www.youtube.com/watch?v=6_zIN-bByB4&t=26s <br>
source  => https://github.com/kiyodori/express_api_example
<br>
<br>
<br>


## テーマ：読書ログサービス <br>

- 読んだ本の読書ログを記録する
- 記録した読書ログを取得できる

### 内容
#### ①画面遷移ずを作る
読書ログ一覧 <=> 読書ログの作成
<br>
<br>

#### ②APIの機能一覧を列挙する
- 読んだ本の読書ログを記録する
- 記録した読書ログを取得できる
<br>
<br>

#### ③URLとHTTPメソッドを設定する
- 読んだ本の読書ログを記録する
POST https://api.example.com/booklog
- 記録した読書ログを取得できる
GET https://api.example.com/booklog
<br>
<br>

#### ④リクエストパラメータを設計する
- 読んだ本の読書ログを記録する
POST https://api.example.com/booklog
パラメータ name,text
- 記録した読書ログを取得できる
GET https://api.example.com/booklog
パラメータなし
<br>
<br>

#### ⑤レスポンスデータを設計する
- 読んだ本の読書ログを記録する
  - 成功 {"ok": true,
          "booklog":{
            "name":"キングダム", "text":"熱い！"
          }}
  - 失敗 {"ok": false, "error": "Invalid parameter" }          
- 記録した読書ログを取得できる
  - 成功 {"ok": true,
          "booklog":[
            {"name":"キングダム", "text":"熱い！"},
            {"name":"ワンピース", "text":"いいね！"},
          ]}
  - 失敗 今回は省略 
<br>
<br>

#### 環境
- Noge.js + Express
- Postman
<br>
<br>

## 補足(YouTubeの内容)

### HTTPの仕組み
- 何に対して => URL
- 何をするか => HTTPメソッド（GET,POST, ...）

### WebAPIとは
「便利機能を外部向けに提供するもの」

### WebAPiの例
- request => GET https://api.twitter.com/followers/list?screen_name=matsuda …
- response => { "users:[{user-object1}, {user-object2}, ... ] }

### WebAPI作成の手順
- ①画面遷移ずを作る
- ②APIの機能一覧を列挙する
- ③URLとHTTPメソッドを設定する
- ④リクエストパラメータを設計する
- ⑤レスポンスデータを設計する



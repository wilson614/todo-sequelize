# 待辦事項管理清單 Todo List
以 Express 所建立的待辦事項管理清單。

## 功能 Features
- 使用者可以註冊帳號
- 使用者可以透過 Facebook Login 直接登入
- 使用者必須登入才能使用待辦事項清單
- 使用者可以建立並管理專屬他的待辦事項清單
- 使用者登出、註冊失敗、或登入失敗時，使用者都會在畫面上看到正確而清楚的系統訊息
- 使用者可以新增一筆 todo 並指定名稱
- 使用者可以瀏覽全部 todo 清單
- 使用者可以查看特定 todo 的詳細資料
- 使用者可以編輯一筆 todo 的名稱與完成狀態
- 使用者可以刪除一筆 todo

## 環境 Environment
- Node.js
- Nodemon
- MySQL

## 安裝 Installation

1. 取得專案至本地
```
git clone https://github.com/wilson614/todo-sequelize
```
2. 進入專案目錄
```
cd todo-sequelize
```
3. 安裝套件
```
npm install
```
4. 建立 .env 檔案
```
參照 .env.example 在專案根目錄建立 .env 檔案
```
5. 產生種子資料
```
npx sequelize db:seed:all
```
預設使用者
>* name: root
>* email: root@example.com
>* password: 12345678

6. 啟動專案
```
npm run dev
```
7. 出現以下訊息後，即可在 http://localhost:3000 開始使用
```
App is running on http://localhost:3000
```

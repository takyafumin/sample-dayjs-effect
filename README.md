# dayjs のタイムゾーン設定がインスタンスへ影響するか検証

## インストール

必要な依存関係をインストールするには、以下を実行してください:

```bash
npm install
```

## 使用方法

```bash
$ npm run dev

> sample-dayjs-effect@1.0.0 dev
> ts-node src/index.ts

現在のタイムゾーン: UTC
現在の日時: 2024/12/17 14:16:08
----------------------------------------
./utils/dayjs-utc.ts を読み込みました
現在の日時 (UTC): 2024-12-17 14:16:08
----------------------------------------
./utils/dayjs-jst.ts を読み込みました
現在の日時 (JST): 2024-12-17 23:16:08
----------------------------------------
現在の日時 (UTC): 2024-12-17 23:16:08
```

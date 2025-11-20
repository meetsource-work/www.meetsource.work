# www.meetsource.work

このリポジトリは、[www.meetsource.work](https://www.meetsource.work) のWebサイトを GitHub Pages で公開するためのものです。

## 概要

Meetsource のウェブサイトを管理するリポジトリです。GitHub Pages を使用して静的サイトを配信しています。

## ディレクトリ構成

```
.
├── docs/           # GitHub Pages のソースディレクトリ
│   ├── CNAME      # カスタムドメイン設定
│   └── index.html # トップページ
└── README.md      # このファイル
```

## GitHub Pages の設定

このリポジトリは GitHub Pages を使用して公開されており、以下の設定になっています：

- **公開ソース**: `/docs` ディレクトリ
- **カスタムドメイン**: www.meetsource.work
- **URL**: https://www.meetsource.work

## コンテンツの更新方法

1. `/docs/index.html` やその他のファイルを編集
2. 変更をコミット・プッシュ
3. GitHub Pages が自動的に更新を反映（数分かかる場合があります）

## ローカルでの確認

HTMLファイルを編集した後、ローカルで確認する場合は、単純に `docs/index.html` をブラウザで開くか、簡易的なHTTPサーバーを起動してください：

```bash
# Python 3 の場合
cd docs
python3 -m http.server 8000

# その後、ブラウザで http://localhost:8000 にアクセス
```

## 貢献

サイトの更新や改善を行う際は、以下の手順で進めてください：

1. このリポジトリをクローン
2. 変更を加える
3. プルリクエストを作成

## ライセンス

このプロジェクトの詳細については、プロジェクトオーナーにお問い合わせください。

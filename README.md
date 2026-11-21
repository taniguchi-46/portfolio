# taniguchi-46.github.io

谷口 瑞季（taniguchi mizuki）のポートフォリオサイトです。

## 概要

清風情報工科学院 谷口 瑞季（taniguchi mizuki）の個人ポートフォリオサイトです。  
デザインコンセプトは **「静謐と余白（Quiet Editorial）」** とし、過剰な装飾を排してタイポグラフィと余白のバランスで魅せる、軽量で高速な静的サイトを目指しています。

- **公開先**: GitHub Pages（[https://taniguchi-46.github.io/portfolio/](https://taniguchi-46.github.io/portfolio/)）
- **GitHub**: [https://github.com/taniguchi-46](https://github.com/taniguchi-46)

## 技術スタック

- **Framework**: [Astro](https://astro.build/)（静的サイト生成 / Static Output）
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting / CI**: GitHub Pages / GitHub Actions

## ディレクトリ構成

```text
.
├── .github/
│   └── workflows/       # GitHub Pages 自動デプロイ設定（deploy.yml）
├── public/              # 静的アセット（favicon.svg、デモ画像等）
├── src/
│   ├── components/      # UIコンポーネント（単一責任で分割）
│   ├── data/            # プロフィール・制作物・資格・連絡先のデータ定義
│   ├── layouts/         # 共通レイアウト
│   ├── pages/           # ページ本体
│   └── styles/          # グローバルCSS・デザイントークン定義
├── astro.config.mjs     # Astro / Tailwind CSS / サブパス公開設定
├── tsconfig.json        # TypeScript 設定
├── AGENTS.md            # AIエージェント向け設計・デザイン・作業ルール定義書
├── TASK.md              # 今後のやることリスト（kokomane 正式化等）
└── README.md            # プロジェクト概要（本ファイル）
```

## 開発コマンド

### 1. 依存パッケージのインストール

```bash
npm install
```

### 2. ローカル開発サーバーの起動

```bash
npm run dev
```

サブパス設定（`base: '/portfolio'`）が有効なため、デフォルトでは `http://localhost:4321/portfolio/` でプレビューを確認できます。

### 3. 型チェック・本番用静的サイトのビルド

```bash
npm run check
npm run build
```

ビルド成果物は `dist/` ディレクトリに出力されます。ビルド結果のローカル確認は `npm run preview` で行えます。

## 開発ガイドライン

デザインシステム（カラーパレット・タイポグラフィ）、パフォーマンス制約、掲載データ、コーディングルールなどの詳細は [`AGENTS.md`](./AGENTS.md) を参照してください。

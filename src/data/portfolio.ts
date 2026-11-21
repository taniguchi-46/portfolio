// ポートフォリオに掲載する確定データを一元管理するモジュール
// 新しい制作物・資格・連絡先の追加時は本ファイルを更新する

export interface WorkTechRow {
  category: string;
  value: string;
}

export interface WorkHighlight {
  title: string;
  description: string;
}

export interface WorkDecision {
  title: string;
  rationale: string;
}

export interface WorkItem {
  slug: string;
  title: string;
  category: string;
  platform: string;
  status?: string;
  summary: string;
  detailParagraphs: string[];
  highlightsHeading?: string;
  highlights?: WorkHighlight[];
  decisions?: WorkDecision[];
  keyTechnologies?: string[];
  techTable?: WorkTechRow[];
  imageSrc: string;
  imageAlt: string;
  isDemoImage?: boolean;
  officialUrl?: string;
  isPlaceholderOfficialUrl?: boolean;
  repositoryUrl?: string;
  isPrivateRepository?: boolean;
  note?: string;
}

export interface LearningTopic {
  label: string;
  detail: string;
}

export interface TechSummaryRow {
  category: string;
  items: string;
}

export interface ContactChannel {
  label: string;
  displayValue: string;
  href: string;
  external?: boolean;
}

export const PROFILE = {
  nameJa: '谷口 瑞季',
  nameEn: 'taniguchi mizuki',
  school: '清風情報工科学院',
  department: 'デザインコンピュータ学科 IT・情報処理専攻',
  course: 'システムエンジニアコース ２年',
  graduation: '2028年卒業予定',
  desiredRoles: 'SE / インフラエンジニア / 開発エンジニア',
  bio: [
    '専門学校で IT 基礎とシステム開発を学びながら、個人開発で日常の思考整理や情報管理を支えるツールを設計・実装しています。',
    '要件整理からアーキテクチャ設計・実装まで一貫して考え、シンプルで長く使える道具づくりを目指しています。',
  ],
  githubUrl: 'https://github.com/taniguchi-46',
} as const;

export const WORKS: WorkItem[] = [
  {
    slug: 'kokomane',
    title: 'kokomane',
    category: '進級制作',
    platform: 'iOS / Android',
    status: '詳細整理中（仮ページ）',
    summary:
      '若年層向けのメンタルヘルスケアアプリとして進級制作で開発しています。日々の気分やコンディションに静かに向き合い、無理なく記録と振り返りを続けられる体験を目指しています。',
    detailParagraphs: [
      '清風情報工科学院の進級制作として取り組んでいる、若年層向けのメンタルヘルスケアアプリ（iOS / Android）です。',
      '日々の気分や心の状態にそっと向き合い、負担なく記録と振り返りを続けられる体験を目指して設計・制作を進めています。',
    ],
    highlightsHeading: '今後の掲載予定',
    highlights: [
      {
        title: '機能概要と設計意図',
        description:
          '解決したい課題の整理、主要画面の構成、日々の記録・振り返り体験の詳細を正式文として追記予定です。',
      },
      {
        title: '使用技術と担当範囲',
        description:
          '採用している技術スタック・開発環境および、進級制作における担当領域を整理して掲載します。',
      },
      {
        title: '画面イメージの正式化',
        description:
          '現在掲載しているデモイメージ画像を、実アプリの画面スクリーンショットへ差し替える予定です。',
      },
    ],
    imageSrc: '/images/kokomane-demo.jpg',
    imageAlt: 'kokomane のデモイメージ画像（スマートフォン画面のミニマルなコンセプト図）',
    isDemoImage: true,
    isPrivateRepository: true,
    note: '※ 仮の概要・デモ画像を掲載しています（リポジトリ非公開）。詳細は正式化にあわせて更新予定です。',
  },
  {
    slug: 'atlasnote',
    title: 'AtlasNote',
    category: '個人開発',
    platform: 'Desktop App',
    summary:
      '思考を整理するためのローカルファーストな知識管理・ノートアプリ。Markdown を本文の正本、SQLite をメタデータと検索索引として管理し、WebDAV 同期や外部 CLI / MCP・統合ターミナル連携を備えています。',
    detailParagraphs: [
      'AI の活用を前提としたローカルファーストの知識管理・Second Brain デスクトップアプリです。思考を日々蓄積し、あとから自在に検索・整理・再構築できる個人用ワークスペースとして開発しています。',
      'ノート本文の正本はプレーンな Markdown ファイルとして手元に保持し、SQLite でメタデータや検索索引を管理する構成とすることで、データの可搬性と軽快な操作感を両立させています。',
    ],
    highlightsHeading: '主な特徴',
    highlights: [
      {
        title: 'Markdown 正本 × SQLite 索引のローカルファースト設計',
        description:
          '本文は Markdown ファイルとしてローカルに保存し、メタデータや検索索引を SQLite（Repository + Squirrel）で管理する堅実なデータアクセス構成を採っています。',
      },
      {
        title: '日常の蓄積を支える整理・同期機能',
        description:
          'ノート整理、検索、タグ管理、WebDAV による同期、バックアップ機能を備え、継続的な知識管理をローカル中心で完結できます。',
      },
      {
        title: 'Wails による Go × Vue 3 デスクトップ構成',
        description:
          'Go バックエンドと Vue 3 + TypeScript（Vite / UnoCSS / Reka UI / Pinia）のフロントエンドを Wails で接続し、Markdown textarea と Tiptap による編集環境を構築しています。',
      },
      {
        title: '外部 CLI / MCP 連携と統合ターミナル',
        description:
          '外部 CLI や MCP と連携できる統合ターミナル（Multi Terminal・左右 Split）を備え、認証情報をアプリ側へ抱え込まない安全な運用を重視しています。',
      },
    ],
    decisions: [
      {
        title: 'ローカル環境を主軸とし、Docker は CI・ビルド再現性の検証へ限定',
        rationale:
          'Wails は OS の WebView・ファイルシステム・OS Credential Store などネイティブ機能に密接に依存するため、GUI 開発まで Docker 内で完結させると環境構築が複雑化します。日常開発はローカルで素直に行い、Docker は CI と同条件でのビルド・テスト再現に役割を絞っています。',
      },
      {
        title: 'Wasm を初期段階で採用しない段階的判断',
        rationale:
          'Go 側のアプリケーションサービスと Vue 側の UI で主要機能を十分に実装できるため、ビルド・デバッグ・型連携の複雑さを増やす Wasm は先行導入せず、Markdown 解析や検索で明確な性能課題が生じた時点で再検討する方針としています。',
      },
      {
        title: '資格情報の分離とアプリ側 API キー非保持の安全設計',
        rationale:
          'WebDAV 資格情報は平文設定ファイルに永続保存せず OS Credential Store へ分離しています。また、旧 AI 設定画面を撤去して外部 CLI / MCP 連携へ移行し、アプリの .env・SQLite・Markdown・localStorage に API キーを残さない構成にしています。',
      },
    ],
    keyTechnologies: ['Wails', 'Go', 'Vue 3', 'TypeScript', 'SQLite', 'Tiptap'],
    techTable: [
      { category: 'Desktop', value: 'Wails' },
      { category: 'Backend', value: 'Go' },
      { category: 'Frontend', value: 'Vue 3' },
      { category: 'Language', value: 'Go + TypeScript' },
      { category: 'Build', value: 'Vite' },
      { category: 'Styling', value: 'UnoCSS' },
      { category: 'UI', value: 'Reka UI' },
      { category: 'State', value: 'Composables + Pinia' },
      { category: 'Database', value: 'SQLite' },
      { category: 'Data Access', value: 'Repository + Squirrel' },
      { category: 'Editor', value: 'Markdown textarea + Tiptap' },
      { category: 'Storage', value: 'Markdown' },
      { category: 'Sync', value: 'WebDAV（資格情報は OS Credential Store へ分離）' },
      { category: 'AI / 連携', value: '外部 CLI・MCP 連携 / 統合ターミナル（API キーはアプリ側非保持）' },
    ],
    imageSrc: '/images/atlasnote-demo.jpg',
    imageAlt: 'AtlasNote のデモイメージ画像（2ペイン構成のノートと知識グラフのコンセプト図）',
    isDemoImage: true,
    officialUrl: 'https://example.com/atlasnote',
    isPlaceholderOfficialUrl: true,
    repositoryUrl: 'https://github.com/taniguchi-46/AtlasNote',
    isPrivateRepository: true,
  },
  {
    slug: 'boreastable',
    title: 'BoreasTable',
    category: '個人開発',
    platform: 'Web App / Chrome Extension',
    status: '設計・開発準備フェーズ',
    summary:
      '大量の Web リンクを気軽に保存し、あとから整理・消化するための Web コンテンツ管理ツール。まず未整理 Inbox へ集め、テーブル上で一覧・整理する構成で Web アプリと Chrome 拡張を設計しています。',
    detailParagraphs: [
      '大量の Web リンクを気軽に保存し、あとから整理・検索・再発見・消化できることを目的とした Web コンテンツ管理ツールです。AtlasNote と同じシリーズとして、ギリシャ神話の北風の神「Boreas」と、集めた情報を広げて整理する場所を表す「Table」から命名しています。',
      'MVP の主要要件定義と外部設計を採用し、現在は文書整理とローカル開発環境構築を進める開発準備フェーズにあります。Web アプリ本体（SPA）と Chrome 拡張の2系統で設計を進めています。',
    ],
    highlightsHeading: '基本方針',
    highlights: [
      {
        title: '保存時は考えず、まず未整理 Inbox へ',
        description:
          '保存時の入力を必須にせず、気になった Web リンクを思考を止めずにそのまま放り込める軽快な導線を最優先にしています。',
      },
      {
        title: '大量リンクの蓄積を前提とした整理・消化',
        description:
          '整理はあとからまとめて行う前提で設計し、リンクが大量に溜まってもテーブル上で検索・再発見・消化しやすい構造を目指しています。',
      },
      {
        title: 'シンプル・小型な構成と段階的な判断',
        description:
          'AtlasNote と同様にシンプルで小型な構成を重視し、AI は中心機能に据えず、必要になった段階で補助機能として検討する方針です。',
      },
      {
        title: '無料枠を前提とした実用的なシステム設計',
        description:
          'Cloudflare Workers Static Assets、Google Cloud Run、Neon PostgreSQL、Clerk を組み合わせ、初期運用費を抑えた現実的な運用構成を設計しています。',
      },
    ],
    decisions: [
      {
        title: '内部 user_id の分離による認証基盤からの疎結合',
        rationale:
          'Clerk のユーザー ID を全テーブルへ直接持たせず、初回 API アクセス時に BoreasTable 内部の user_id を自動作成（Lazy Provisioning）して全データをスコープ分離します。将来の認証基盤変更の影響範囲を小さくしつつ、他ユーザー所有リソースは 404 で返して存在を開示しない設計としています。',
      },
      {
        title: 'Chrome 拡張の軽量化とサーバー側での SSRF 対策済み Metadata 解析',
        rationale:
          'Chrome 拡張からは URL と自動取得 Title のみを送信し、OGP などの詳細解析は Gin 側で goquery により実行します（2秒タイムアウトの Best Effort とし、解析失敗でも保存自体は成功扱い）。DNS 解決後の IPv4 / IPv6 検証、Private IP・Cloud Metadata 遮断、リダイレクト再検証といった SSRF 対策を必須としています。',
      },
      {
        title: 'ORM 不使用の pgx/v5 + sqlc と最小限の初期インフラ構成',
        rationale:
          'GORM などの ORM に頼らず SQL を手書きして sqlc で型安全な Go コードを生成することで、クエリの見通しと型安全性を両立しています。また、R2 や Queues、Headless Browser は MVP から盛り込まず、必要になった段階で移行できる疎な設計で初期運用費 0 円構成を前提としています。',
      },
      {
        title: 'プロダクト特性に応じた CSS スタックの使い分け',
        rationale:
          'AtlasNote では UnoCSS を採用していますが、BoreasTable では shadcn-vue と Reka UI を基盤とした UI コンポーネント設計との親和性を優先し、Tailwind CSS を選定しています。',
      },
    ],
    keyTechnologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'WXT', 'Go / Gin', 'PostgreSQL'],
    techTable: [
      { category: 'Frontend', value: 'Vue 3 + TypeScript / Vite / Vue Router（SPA / CSR）' },
      { category: 'UI / Styling', value: 'shadcn-vue / Reka UI / Tailwind CSS' },
      { category: 'State / Cache', value: 'Pinia / TanStack Vue Query / VueUse / Composables' },
      { category: 'Chrome Extension', value: 'WXT（Manifest V3）' },
      { category: 'Backend', value: 'Go + Gin / goquery（HTML メタデータ解析）' },
      { category: 'Database', value: 'PostgreSQL（Neon） / pgx/v5（pgxpool） / sqlc（ORM 不使用）' },
      { category: 'Hosting', value: 'Cloudflare Workers Static Assets（Front） / Google Cloud Run（API）' },
      { category: 'Auth', value: 'Clerk（@clerk/vue / clerk-sdk-go/v2）' },
    ],
    imageSrc: '/images/boreastable-demo.jpg',
    imageAlt: 'BoreasTable のデモイメージ画像（未整理 Inbox とリンク一覧テーブルのコンセプト図）',
    isDemoImage: true,
    officialUrl: 'https://example.com/boreastable',
    isPlaceholderOfficialUrl: true,
    repositoryUrl: 'https://github.com/taniguchi-46/BoreasTable',
    isPrivateRepository: true,
    note: '※ MVP 要件定義・外部設計を採用済みで、現在は開発準備フェーズです（リポジトリ非公開）。初期運用費0円構成を前提に設計しています。',
  },
];

export const LEARNING_TOPICS: LearningTopic[] = [
  {
    label: '所属・卒業予定',
    detail: `${PROFILE.school} ${PROFILE.department} ${PROFILE.course}（${PROFILE.graduation}）`,
  },
  {
    label: '志望領域',
    detail: PROFILE.desiredRoles,
  },
  {
    label: 'IT 基礎分野',
    detail: 'Java、Linux などの基礎技術',
  },
  {
    label: '情報処理・資格学習',
    detail: '基本情報技術者試験の学習',
  },
  {
    label: '開発基礎',
    detail: 'システム開発基礎',
  },
];

export const TECH_SUMMARY: TechSummaryRow[] = [
  {
    category: '言語',
    items: 'Java / Go / TypeScript',
  },
  {
    category: 'フロントエンド',
    items: 'Vue 3 / Astro / Tailwind CSS / UnoCSS / Reka UI / shadcn-vue',
  },
  {
    category: 'バックエンド・DB',
    items: 'Gin / SQLite / PostgreSQL（Neon） / sqlc / Squirrel / pgx',
  },
  {
    category: '環境・ツール',
    items: 'Linux / Wails / Vite / WXT / Cloudflare Workers / Cloud Run / Git・GitHub',
  },
];

export const QUALIFICATIONS: string[] = [
  '基本情報技術者試験',
  'ITパスポート',
  'MOS アソシエイト',
  '普通自動二輪（AT小型限定）',
];

export const CONTACTS: ContactChannel[] = [
  {
    label: '就職活動に関するご連絡',
    displayValue: 'm46.taniguchi@gmail.com',
    href: 'mailto:m46.taniguchi@gmail.com',
  },
  {
    label: '学校関連のご連絡',
    displayValue: '2510025@i-seifu.jp',
    href: 'mailto:2510025@i-seifu.jp',
  },
  {
    label: 'GitHub',
    displayValue: 'github.com/taniguchi-46',
    href: PROFILE.githubUrl,
    external: true,
  },
];

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

export interface WorkGalleryItem {
  src: string;
  alt: string;
  caption: string;
}

export interface WorkDownload {
  label: string;
  url: string;
  meta: string;
  notice: string;
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
  iconSrc?: string;
  iconAlt?: string;
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  isDemoImage?: boolean;
  gallery?: WorkGalleryItem[];
  download?: WorkDownload;
  officialUrl?: string;
  isPlaceholderOfficialUrl?: boolean;
  repositoryUrl?: string;
  isPrivateRepository?: boolean;
  repositoryNote?: string;
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
    '専門学校で Java や Linux などの IT 基礎とシステム開発を学びながら、個人開発で日常の思考整理や情報管理を支えるツールを設計・実装しています。',
    '基本情報技術者試験で培った基礎知識と、要件整理・セキュリティ・運用保守まで見据えた設計姿勢を強みに、SE・インフラエンジニア・開発エンジニアとして長く使われる仕組みづくりを目指しています。',
  ],
  githubUrl: 'https://github.com/taniguchi-46',
} as const;

export const WORKS: WorkItem[] = [
  {
    slug: 'atlasnote',
    title: 'AtlasNote',
    category: '個人開発',
    platform: 'Desktop App (Windows)',
    summary:
      '思考を整理するためのローカルファーストな知識管理・ノートアプリ。Markdown を本文の正本、SQLite をメタデータと検索索引として管理し、WebDAV 同期や外部 CLI / MCP・統合ターミナル連携を備えています。',
    detailParagraphs: [
      'AI の活用を前提としたローカルファーストの知識管理・Second Brain デスクトップアプリです。思考を日々蓄積し、あとから自在に検索・整理・再構築できる個人用ワークスペースとして開発しています。',
      'ノート本文の正本はプレーンな Markdown ファイルとして手元に保持し、SQLite でメタデータや検索索引を管理する構成とすることで、データの可搬性と軽快な操作感を両立させています。リッチテキスト表示と Markdown 編集を自在に切り替えられるほか、添付画像（PNG/JPEG）や表の編集、ライト・ダーク・セピアなど 6 種類のテーマに対応しています。',
      '自動保存やノート切替・削除時の変更確認、競合保護、復元前の安全用バックアップといったデータ保護の仕組みを丁寧に取り入れ、日常的に安心して使い続けられる実用性を重視しました。',
    ],
    highlightsHeading: '主な特徴',
    highlights: [
      {
        title: 'Markdown 正本 × SQLite 索引のローカルファースト設計',
        description:
          '本文は Markdown ファイルとしてローカルに保存し、メタデータや検索索引を SQLite（Repository + Squirrel）で管理する堅実なデータアクセス構成を採っています。',
      },
      {
        title: '快適な執筆体験と 6 種類のテーマ',
        description:
          'Markdown textarea と Tiptap によるリッチテキスト表示をワンクリックで切り替え可能。見出し・表・コードブロック・チェックリストや画像のドラッグ＆ドロップ添付、6 種類の配色テーマ（ライト／ダーク／セピア／フォレスト／ミッドナイト／バーガンディ）を備えています。',
      },
      {
        title: 'データ保護・同期・安全性を重視した運用設計',
        description:
          '自動保存と下書き保持に加え、編集中の誤削除・上書きを防ぐ変更確認と競合保護、WebDAV 同期、復元前の安全用バックアップ、秘密情報を含まない診断ログ出力を実装しています。',
      },
      {
        title: '外部 CLI / MCP 連携と Multi / Split Terminal',
        description:
          '外部 CLI や MCP と連携できる統合ターミナル（複数セッション切替・左右分割の Multi / Split 表示）を備え、認証情報をアプリ側へ抱え込まない安全なワークフローを実現しています。',
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
      { category: 'AI / 連携', value: '外部 CLI・MCP 連携 / Multi・Split Terminal（API キーはアプリ側非保持）' },
    ],
    iconSrc: '/images/atlasnote-icon.png',
    iconAlt: 'AtlasNote のアプリアイコン',
    imageSrc: '/images/atlasnote-main.png',
    imageAlt: 'AtlasNote のメイン画面（左サイドバーのノート一覧とリッチテキストエディタ）',
    isDemoImage: false,
    gallery: [
      {
        src: '/images/atlasnote-markdown.png',
        alt: 'AtlasNote で Markdown 編集モードへ切り替えた画面',
        caption: 'Markdown 編集表示への切り替え（正本のプレーンテキスト記法をそのまま編集）',
      },
      {
        src: '/images/atlasnote-theme.png',
        alt: 'AtlasNote にセピアテーマを適用したワークスペース画面',
        caption: 'セピアテーマ適用時のワークスペース（全 6 テーマから選択可能）',
      },
    ],
    download: {
      label: 'Windows インストーラをダウンロード',
      url: 'https://github.com/taniguchi-46/portfolio/releases/download/atlasnote-v0.1.0/AtlasNote-amd64-installer.exe',
      meta: 'v0.1.0 / Windows 10・11 (x64) / 約 28.8MB',
      notice:
        '※ 個人開発アプリのためコード署名は未付与です（実行時に Windows の確認画面が表示される場合があります）。',
    },
    isPrivateRepository: true,
    repositoryNote: 'ソースコード・リポジトリは非公開としています。',
  },
  {
    slug: 'boreastable',
    title: 'BoreasTable',
    category: '個人開発',
    platform: 'Web App / Chrome Extension',
    status: '設計・開発準備中',
    summary:
      '大量の Web リンクを気軽に保存し、あとから整理・消化するための Web コンテンツ管理ツール。まず未整理 Inbox へ集め、テーブル上で一覧・整理する構成で Web アプリと Chrome 拡張を設計しています。',
    detailParagraphs: [
      '大量の Web リンクを気軽に保存し、あとから整理・検索・再発見・消化できることを目的とした Web コンテンツ管理ツールです。AtlasNote と同じシリーズとして、ギリシャ神話の北風の神「Boreas」と、集めた情報を広げて整理する場所を表す「Table」から命名しています。',
      'MVP の主要要件定義と外部設計を採用し、現在は文書整理とローカル開発環境構築を進める開発準備段階にあります。Web アプリ本体（SPA）と Chrome 拡張の 2 系統で設計を進めています。',
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
    imageAlt: 'BoreasTable のコンセプトイメージ画像（未整理 Inbox とリンク一覧テーブルの構成図）',
    imageCaption: 'コンセプトイメージ',
    isDemoImage: true,
    isPrivateRepository: true,
    repositoryNote: 'リポジトリは非公開としています。',
    note: '※ MVP の要件定義・外部設計を採用し、現在は開発準備を進めています。初期運用費を抑えた構成を前提に設計しています。',
  },
  {
    slug: 'kokomane',
    title: 'kokomane',
    category: '進級制作',
    platform: 'iOS / Android',
    status: '制作中',
    summary:
      '若年層向けのメンタルヘルスケアアプリとして進級制作で開発しています。日々の気分やコンディションに静かに向き合い、無理なく記録と振り返りを続けられる体験を目指しています。',
    detailParagraphs: [
      '清風情報工科学院の進級制作として取り組んでいる、若年層向けのメンタルヘルスケアアプリ（iOS / Android）です。',
      '日々の気分や心の状態にそっと向き合い、負担なく記録と振り返りを続けられる体験を目指して設計・制作を進めています。',
    ],
    imageSrc: '/images/kokomane-demo.jpg',
    imageAlt: 'kokomane のコンセプトイメージ画像（スマートフォン画面の構成図）',
    imageCaption: 'コンセプトイメージ',
    isDemoImage: true,
    isPrivateRepository: true,
    repositoryNote: '進級制作として現在開発中のため、リポジトリは非公開としています。',
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
    label: '情報処理基礎',
    detail: '基本情報技術者試験（取得済み）の知識を土台としたアルゴリズム・ネットワーク・DB の学習',
  },
  {
    label: '開発基礎',
    detail: 'システム開発基礎',
  },
  {
    label: '学習中資格',
    detail: '情報セキュリティマネジメント試験',
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

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  category: string;
  headline: string;
  description: string;
  longDescription: string;
  features: string[];
  deliverables: string[];
  process: string[];
  price: number | null;
  icon: string;
  illustration: string;
  accent: string;
  relatedServices: string[];
  technologies: string[];
  goodFor: string[];
  faq: Array<{ question: string; answer: string }>;
};

export const services: Service[] = [
  {
    slug: "landing-page",
    name: "LANDING PAGE",
    shortName: "LANDING",
    category: "Conversion Design",
    headline: "ONE PAGE. ONE GOAL. BUILT TO CONVERT.",
    description: "目的を明確にし、見た瞬間に行動したくなるLPを設計します。",
    longDescription:
      "集客の入口であるLPは、見た目の良さだけでは足りません。目的を明確にし、訪問者の思考を一つの行動に導く構造設計を行います。",
    features: ["Offer clarity", "Message hierarchy", "CTA strategy", "Mobile-first flow"],
    deliverables: ["Design", "Responsive design", "Frontend development", "SEO basics", "Analytics setup", "Deployment"],
    process: ["DISCOVER", "DESIGN", "DEVELOP", "REVIEW", "LAUNCH"],
    price: 180000,
    icon: "◎",
    illustration: "browser",
    accent: "#d4d1cd",
    relatedServices: ["brand-website", "website-renewal", "ui-ux"],
    technologies: ["Figma", "Next.js", "TypeScript", "Vercel"],
    goodFor: ["新規サービス立ち上げ", "集客強化", "キャンペーン施策"],
    faq: [
      {
        question: "LPとコーポレートサイトの違いは？",
        answer: "LPは「行動を促す」ことに特化し、コーポレートサイトは事業や会社の理解を深める役割を持ちます。目的に応じて設計を変えます。",
      },
      {
        question: "制作期間はどれくらいですか？",
        answer: "一般的には2〜4週間程度です。内容やページ数によって調整します。",
      },
    ],
  },
  {
    slug: "online-store",
    name: "ONLINE STORE",
    shortName: "STORE",
    category: "E-commerce",
    headline: "A STORE PEOPLE WANT TO SHOP FROM.",
    description: "テンプレートではなく、ブランドの価値が伝わる販売体験をつくります。",
    longDescription:
      "商品の魅力が伝わる視線誘導と、購入に至る安心感の設計を重視したECサイトを制作します。見た目の完成度だけではなく、購買行動を後押しする構成を考えます。",
    features: ["Product story", "Trust-building flow", "Cart experience", "Conversion optimization"],
    deliverables: ["Store design", "Catalog structure", "UI system", "Shopify integration", "Checkout refinement", "Launch support"],
    process: ["DISCOVER", "MERCHANDISE", "DESIGN", "BUILD", "LAUNCH"],
    price: null,
    icon: "◌",
    illustration: "store",
    accent: "#c9c2b8",
    relatedServices: ["brand-website", "frontend", "web-app"],
    technologies: ["Shopify", "React", "Next.js", "Figma"],
    goodFor: ["ブランド直販", "新商品販売", "体験価値を売る商材"],
    faq: [
      {
        question: "既存のECを改善できますか？",
        answer: "はい。既存サイトのCV改善や購入導線の再設計を行い、改善幅の大きい箇所から実施します。",
      },
      {
        question: "既存のShopifyを使うことはできますか？",
        answer: "はい。Shopifyの既存設定と連携しながら、ブランドにふさわしいUIや導線の更新を行います。",
      },
    ],
  },
  {
    slug: "ai-integration",
    name: "AI INTEGRATION",
    shortName: "AI",
    category: "Product Experience",
    headline: "INTELLIGENT EXPERIENCES THAT FEEL NATURAL.",
    description: "AIを「使う」だけでなく、使う人の価値になる導線として設計します。",
    longDescription:
      "AIは機能ではなく、体験の中に溶け込むべきです。対話や自動化、提案をWeb体験として設計し、ユーザーにとって意味のある価値に変えます。",
    features: ["UX strategy", "Prompt design", "Automation flow", "AI assistant integration"],
    deliverables: ["AI UX prototype", "Frontend integration", "Prompt architecture", "Interaction testing", "Analytics hooks"],
    process: ["DISCOVER", "DEFINE", "PROTOTYPE", "BUILD", "ITERATE"],
    price: null,
    icon: "✦",
    illustration: "ai",
    accent: "#b8b6be",
    relatedServices: ["web-app", "frontend", "ui-ux"],
    technologies: ["TypeScript", "React", "Next.js", "OpenAI / APIs"],
    goodFor: ["問い合わせ対応の自動化", "社内業務効率化", "インタラクティブ体験"],
    faq: [
      {
        question: "AIを導入するには何が必要ですか？",
        answer: "導入したい用途と既存データの可用性を確認し、UXと運用体制の両方を設計してから実装します。",
      },
    ],
  },
  {
    slug: "corporate-site",
    name: "CORPORATE SITE",
    shortName: "CORP",
    category: "Corporate Web",
    headline: "CLEAR. TRUSTED. BUILT FOR THE NEXT STEP.",
    description: "会社の理解を深め、ステークホルダーに伝わる情報設計を担います。",
    longDescription:
      "企業の説明責任とブランドの信頼感を両立するために、事業内容・価値・強みを整理し、訪問者が「この会社を頼みたい」と感じる構成へ落とし込みます。",
    features: ["Narrative structure", "Stakeholder communication", "Service clarity", "Leadership story"],
    deliverables: ["Content structure", "Page design", "Responsive frontend", "SEO setup", "CMS wiring"],
    process: ["RESEARCH", "CONTENT", "DESIGN", "BUILD", "SHIP"],
    price: 260000,
    icon: "▣",
    illustration: "building",
    accent: "#d3d5d2",
    relatedServices: ["brand-website", "website-renewal", "multilingual"],
    technologies: ["Next.js", "TypeScript", "CMS", "Vercel"],
    goodFor: ["企業の再定義", "採用力強化", "事業説明の整理"],
    faq: [
      {
        question: "既存サイトのリニューアルも可能ですか？",
        answer: "はい。コンテンツ整理と設計改善を含めて、現状を踏まえた改善プランを提案します。",
      },
    ],
  },
  {
    slug: "brand-website",
    name: "BRAND WEBSITE",
    shortName: "BRAND",
    category: "Brand Experience",
    headline: "A WEBSITE AS A BRAND EXPERIENCE.",
    description: "言葉だけでなく、視覚・空気感・体験の全体でブランドを伝えます。",
    longDescription:
      "ブランドの価値観がサイトを通じて伝わるように、ビジュアルの方向性と体験設計を一体で考えます。情報を置く場所ではなく、ブランドの主張そのものとして成立するサイトを目指します。",
    features: ["Identity alignment", "Editorial layout", "Campaign storytelling", "Motion direction"],
    deliverables: ["Art direction", "Page design", "Motion system", "Front-end build", "Production support"],
    process: ["BRAND", "STORY", "DESIGN", "BUILD", "LAUNCH"],
    price: null,
    icon: "T",
    illustration: "typography",
    accent: "#d5cfca",
    relatedServices: ["landing-page", "ui-ux", "website-renewal"],
    technologies: ["Figma", "Framer Motion", "Next.js", "TypeScript"],
    goodFor: ["ブランド再設計", "価値観の可視化", "メディア的な発信"],
    faq: [
      {
        question: "既存ブランドの方向性がある場合でも対応できますか？",
        answer: "はい。ブランドの価値観を尊重しながら、伝わりやすさと発信力の両面を高める設計を行います。",
      },
    ],
  },
  {
    slug: "website-renewal",
    name: "WEBSITE RENEWAL",
    shortName: "RENEWAL",
    category: "Improvement",
    headline: "FROM OUTDATED TO EFFECTIVE.",
    description: "古い情報や曖昧な導線を整理し、今のブランドに合うサイトへ更新します。",
    longDescription:
      "現状サイトにある問題は、見た目だけではないことが多いです。情報設計・導線・更新運用・技術面まで含めて、ユーザーと社内双方が使いやすいサイトへ再構築します。",
    features: ["Audit", "UX overhaul", "Content hierarchy", "Tech cleanup"],
    deliverables: ["Current-state review", "Improvement plan", "Design update", "Frontend revision", "QA and launch"],
    process: ["AUDIT", "PLAN", "REBUILD", "TEST", "LAUNCH"],
    price: null,
    icon: "↺",
    illustration: "refresh",
    accent: "#cdd2ca",
    relatedServices: ["corporate-site", "ui-ux", "frontend"],
    technologies: ["Figma", "Next.js", "React", "SEO"],
    goodFor: ["古いサイト更新", "認知改善", "問い合わせ導線の見直し"],
    faq: [
      {
        question: "既存サイトを最大限活かせますか？",
        answer: "はい。全くのゼロから作るのではなく、既存の資産を見直し、改善しやすい範囲から順に構成を整理します。",
      },
    ],
  },
  {
    slug: "ui-ux",
    name: "UI / UX DESIGN",
    shortName: "UI/UX",
    category: "Design System",
    headline: "DESIGN THAT MAKES DECISIONS EASIER.",
    description: "見た目の整然さと、使いやすさを同時に追求するUI/UX設計を行います。",
    longDescription:
      "良いWeb体験は、情報の見せ方と使う人の感情を同時に設計することで生まれます。導線や視認性、信頼感まで含めて、利用者が迷わず進める設計を作ります。",
    features: ["Interface structure", "Design system", "Interaction design", "Usability review"],
    deliverables: ["UX map", "High-fidelity screens", "Design system", "Interaction specs", "Design QA"],
    process: ["RESEARCH", "WIRE", "DESIGN", "TEST", "HANDOFF"],
    price: 220000,
    icon: "▤",
    illustration: "interface",
    accent: "#d0c9c4",
    relatedServices: ["landing-page", "brand-website", "frontend"],
    technologies: ["Figma", "Prototyping", "Design systems", "Accessibility"],
    goodFor: ["サービスの見直し", "導線改善", "BtoB SaaS/UX"],
    faq: [
      {
        question: "デザインだけ依頼できますか？",
        answer: "はい。設計からUI制作まで可能です。実装まで含める場合は、フロントエンド連携も対応します。",
      },
    ],
  },
  {
    slug: "frontend",
    name: "FRONTEND",
    shortName: "FRONTEND",
    category: "Development",
    headline: "DESIGN TO CODE, WITH INTENT.",
    description: "デザインを機能と体験として成立させるフロントエンド開発を行います。",
    longDescription:
      "見た目と挙動が一致し、保守性も高いフロントエンドを構築します。アニメーションは見た目の演出ではなく、理解と導線を支える役割として設計します。",
    features: ["Interaction design", "Component architecture", "Performance tuning", "Responsive implementation"],
    deliverables: ["Component build", "Responsive implementation", "Animation system", "QA and optimization"],
    process: ["PLAN", "BUILD", "REFINE", "TEST", "DEPLOY"],
    price: null,
    icon: "<>",
    illustration: "code",
    accent: "#c3c7c9",
    relatedServices: ["landing-page", "web-app", "ui-ux"],
    technologies: ["TypeScript", "React", "Next.js", "Framer Motion"],
    goodFor: ["デザイン実装", "製品開発", "複雑なUIの構築"],
    faq: [
      {
        question: "既存デザインを実装することはできますか？",
        answer: "はい。Figmaの再現や、設計意図を保った上で実装を行い、必要に応じてパフォーマンスとアクセシビリティまで整えます。",
      },
    ],
  },
  {
    slug: "multilingual",
    name: "MULTILINGUAL",
    shortName: "MULTI",
    category: "Internationalization",
    headline: "ONE MESSAGE. MULTIPLE AUDIENCES.",
    description: "日本語と英語の違いを理解した上で、ブランドとして自然に伝わる構成を作ります。",
    longDescription:
      "多言語サイトは翻訳ではなく、意味の伝わり方と文化差を考える設計が重要です。訪問者が一貫してブランドを理解できるように、文脈と体験を整えます。",
    features: ["Localization strategy", "Content hierarchy", "Cultural clarity", "Route structure"],
    deliverables: ["Content strategy", "English locale build", "Responsive pages", "SEO structure"],
    process: ["RESEARCH", "TRANSLATE", "DESIGN", "BUILD", "REVIEW"],
    price: null,
    icon: "◍",
    illustration: "globe",
    accent: "#c5c6c2",
    relatedServices: ["corporate-site", "brand-website", "landing-page"],
    technologies: ["Next.js", "i18n", "SEO", "TypeScript"],
    goodFor: ["海外向け展示", "英語サイト", "国際展開"],
    faq: [
      {
        question: "翻訳だけでは足りないのはなぜですか？",
        answer: "文言の意味だけでなく、呼びかけ方・導線・見せ方の違いがブランド体験に影響するためです。",
      },
    ],
  },
  {
    slug: "web-app",
    name: "WEB APP",
    shortName: "APP",
    category: "Product Interface",
    headline: "INTERACTIVE TOOLS PEOPLE ENJOY USING.",
    description: "複雑な機能を、わかりやすく、快適に、使いやすくするWebアプリをつくります。",
    longDescription:
      "Webアプリでは、見た目の体験だけでなく、動作感・状態変化・利用者の理解が重要です。入力、出力、進行感を設計し、複雑な機能を自然に扱える体験にします。",
    features: ["Workflow mapping", "Interaction states", "Dashboard UX", "System thinking"],
    deliverables: ["UX flows", "Frontend implementation", "State modeling", "Component library", "QA"],
    process: ["DISCOVER", "MAP", "PROTOTYPE", "BUILD", "SHIP"],
    price: null,
    icon: "◫",
    illustration: "app",
    accent: "#d0cdca",
    relatedServices: ["ai-integration", "frontend", "ui-ux"],
    technologies: ["React", "Next.js", "TypeScript", "API integration"],
    goodFor: ["社内業務ツール", "プロダクトUI", "複雑な体験"],
    faq: [
      {
        question: "Webアプリはどこまで対応できますか？",
        answer: "UIや導線設計から実装まで対応可能です。複雑なデータ処理が必要な場合は、設計と連携を含めて相談可能です。",
      },
    ],
  },
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service]));

export const site_config = {
    title: "Taro Portfolio",
    description: "UI/UXデザイナー山田太郎のポートフォリオサイト",
    siteName: "Taro Portfolio",
    baseUrl: "https://your-domain.com",
    ogImage: "/ogp.png",
    themeColor: "#F89174",
    twitterId: "@YourTwitterHandle",
} as const;

export const nav_items = [
    { 
        href: "/", 
        label: "Home", 
        description: "山田太郎のポートフォリオ。最新のプロジェクトを紹介します。" 
    },
    { 
        href: "/works", 
        label: "Works", 
        // title: "制作実績", // labelとタイトルを変えたい場合
        description: "これまでに手掛けたWebサイトやアプリの一覧です。" 
    },
    { 
        href: "/profile", 
        label: "Profile", 
        description: "経歴、スキルセット、デザインへのこだわりについて。" 
    },
    { 
        href: "/contact", 
        label: "Contact", 
        description: "お仕事の依頼やご相談はこちらから。" 
    },
] as const;

export const font_files = [
    "/fonts/inter-variable.woff2",
    "/fonts/noto-sans-jp-variable.woff2",
] as const;
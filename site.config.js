const CONFIG = {
  // profile setting (required)
  profile: {
    name: "-pearmh-log",
    image: "avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ai researcher & precision engineer",
    bio: "Beyond the precision.",
    email: "yuyuqw92@gmail.com",
    linkedin: "Minhan Bae",
    github: "Minhan-Bae",
    instagram: "",
  },
  projects: [
    {
      name: `-pearmh-log`,
      href: "https://github.com/Minhan-Bae/-pearmh-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "-pearmh-log",
    description: "welcome to -pearmh-log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://-pearmh-log.vercel.app",
  since: , // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },
  
  // notion configuration (required)
  notionConfig: {
    pageId: "13a2d881de054c4b85d307ed6ca0d58b",
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "Minhan-Bae/-pearmh-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }

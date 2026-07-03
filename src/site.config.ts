export const siteConfig = {
  title: "TinyBlog",
  description: "偶尔写点东西，关于代码，关于其他。",
  author: "hqyang",
  defaultLocale: "zh" as const,
  bio: {
    zh: "偶尔写代码，偶尔写字。这里安静得刚刚好。",
    en: "Occasionally writes code, occasionally writes words.",
  },
  nav: [
    { href: "/", zh: "首页", en: "Home" },
    { href: "/about", zh: "关于", en: "About" },
  ],
  social: {
    github: "https://github.com/YangHanqing",
    twitter: "",
    email: "",
  },
};

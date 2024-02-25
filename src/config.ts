import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
    website: "https://astro-paper.pages.dev/",
    author: "Matheus Mota",
    desc: "My personal blog for study everything.",
    title: "Matheus Mota",
    subtitle: "Study Blog",
    ogImage: "astropaper-og.jpg",
    lightAndDarkMode: true,
    postPerPage: 5,
    scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  };
  
export const LOCALE = {
    lang: "en",
    langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
    enable: false,
    svg: true,
    width: 216,
    height: 46,
};

export const SOCIALS: SocialObjects = [
    {
        name: "Github",
        href: "https://github.com/Matheus1714",
        linkTitle: ` ${SITE.title} on Github`,
        active: true,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/Matheus1714/",
        linkTitle: `${SITE.title} on Facebook`,
        active: true,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/matheus_mota1714/",
        linkTitle: `${SITE.title} on Instagram`,
        active: true,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/matheus-mota-44b21a17b/",
        linkTitle: `${SITE.title} on LinkedIn`,
        active: true,
    },
    {
        name: "Mail",
        href: "mailto:matheussilvamartins1714@gmail.com",
        linkTitle: `Send an email to ${SITE.title}`,
        active: false,
    },
    {
        name: "Twitter",
        href: "https://twitter.com/Matheus74220753",
        linkTitle: `${SITE.title} on Twitter`,
        active: false,
    },
    {
        name: "Twitch",
        href: "https://www.twitch.tv/matheus1714",
        linkTitle: `${SITE.title} on Twitch`,
        active: false,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/channel/UCm0NVUtM0mKEMowwK6V24eQ",
        linkTitle: `${SITE.title} on YouTube`,
        active: false,
    }
];

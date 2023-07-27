import { navLinks } from "./navlinks"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  logo: "/icons/android-chrome-192x192.webp",
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  navMenu:navLinks,
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}

import type { MetadataRoute } from "next";
    const sitemap = (): MetadataRoute.Sitemap => {    
    const baseUrl = "https://t3-stack.vercel.app";


    return [
        { url: baseUrl, lastModified: new Date() },
        { url: `${baseUrl}/about-us`, lastModified: new Date() },

    ];
};
export default sitemap;
import type { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/page/'],
        },
        sitemap: 'https://t3-stack.app/sitemap.xml',
    };
};
export default robots;
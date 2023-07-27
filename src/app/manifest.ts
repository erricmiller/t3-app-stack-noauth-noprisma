import type { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "T3 Stack",
    short_name: "T3 Stack",
    description: "T3 Stack Description",

    prefer_related_applications: true,
    "theme_color": "#ffffff",
    "background_color": "#004740",
    "display": "fullscreen",
    "orientation": "portrait",
    "id": "/",
    "start_url": "/",
    "icons": [
      {
        "src": "icons/android-chrome-192x192.webp",
        "sizes": "192x192",
        "type": "image/png",
      },
      {
        "src": "icons/android-chrome-512x512.webp",
        "sizes": "512x512",
        "type": "image/png",
      },
    ],
  };
};

export default manifest;

import "@/styles/globals.css";
import { Metadata } from "next";

import { Toaster } from "@/components/ui/toaster";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { fonts } from "@/lib/fonts";

import { TrpcProvider } from "@/provider/trpc-provider";
import { ThemeProvider } from "@/provider/theme-provider";
//import { SessionProvider } from "next-auth/react";
//import { type Session } from 'next-auth';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    //shortcut: "/favicon-16x16.png",
    //apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
  //session,
}: {
  children: React.ReactNode;
  //session: Session | null | undefined;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen max-w-[1920px] mx-auto bg-background relative",
          fonts.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <TrpcProvider>
            {/* <SessionProvider refetchOnWindowFocus={false} session={session} > */}
              {children}
            {/* </SessionProvider> */}
          </TrpcProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

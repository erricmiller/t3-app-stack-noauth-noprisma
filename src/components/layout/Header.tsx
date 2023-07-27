'use client';
import React from "react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";

import { ThemeToggle } from "@/components/layout/theme-toggle";

import NextImage from "../NextImage";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full border-b">
      <nav className="flex h-16 items-center justify-between space-x-1 px-4">
        <Link href="/">
          <div className="logo flex items-center space-x-3">
            <NextImage
              src={siteConfig.logo}
              alt="Logo"
              width={40}
              height={40}
            />
            <h4 className="site_name font-bold">Next.js</h4>
          </div>
        </Link>
        {siteConfig.navMenu && (
          <div className="menu">
            <NavigationMenu>
              <NavigationMenuList className="">
                {siteConfig.navMenu.map((navLink) => (
                  <NavigationMenuItem
                    key={navLink.id}
                    className="h-full w-full"
                  >
                    {navLink.sublinks ? (
                      <>
                        <NavigationMenuTrigger key={navLink.id}>
                          <NavigationMenuLink
                            className={navigationMenuTriggerStyle()}
                            href={navLink.src}
                            key={navLink.id}
                          >
                            {navLink.name}
                          </NavigationMenuLink>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="flex flex-col items-start justify-center  border-b">
                          {navLink.sublinks.map((sublink) => (
                            <NavigationMenuLink
                            className={
                              'w-full border-b  p-2 last:border-none hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                            }
                              href={sublink.src}
                              key={sublink.id}
                            >
                              {sublink.name}
                            </NavigationMenuLink>
                          ))}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        href={navLink.src}
                      >
                        {navLink.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;

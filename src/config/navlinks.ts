import { NavItem } from "@/types/nav";

export const navLinks:NavItem[] = [
    {
        id:"1",
        name:"Home",
        src:"/",
    },
    {
        id:"2",
        name:"About Us",
        src:"/about-us",
    },
    {
        id: "3",
        name: "Services",
        src: "/services",
        sublinks: [
            {
                id: "301",
                name: "Submenu 1",
                src: "/submenu1",
            },
            {
                id: "302",
                name: "Submenu 2",
                src: "/submenu2",
            },
            {
                id: "303",
                name: "Submenu 3",
                src: "/submenu3",
            },
        ],
    },
    {
        id:"4",
        name:"Contact Us",
        src:"/contact-us",
    },
]
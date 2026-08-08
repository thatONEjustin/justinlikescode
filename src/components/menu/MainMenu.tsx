"use client";

import { useState } from "react";
import MenuItem from "./MenuItem.tsx";
import ToggleMode from "@components/ToggleVisualTheme.tsx";

export default function MainMenu(): any {

    const [active, setActive] = useState('home');

    type MenuItemType = {
        label: string,
        href: string,
        icon: string,
        scrollTo?: string
    }

    const menuItemsJson: MenuItemType[] = [
        /*{
            label: 'home',
            href: '/',
            icon: 'nf-custom-home',
        },*/
        {
            label: 'about me',
            href: '/about-me',
            icon: 'nf-oct-person_fill',
        },
        {
            label: 'portfolio',
            href: '/portfolio',
            icon: 'nf-dev-terminal'
        },
        {
            label: 'contact me',
            href: '/contact-me',
            icon: 'nf-oct-mail',
        }
    ]

    function isActive(href: string) {
        return window.location.pathname.includes(href)
    }

    return (
        <ul className="main-menu">
            {menuItemsJson.map(({ label, href, icon, scrollTo = '' }: MenuItemType, index: number) =>
                <MenuItem key={index} active={isActive(href)} label={label} href={href} icon={icon} scrollTo={scrollTo} />
            )}

            <li>
                <ToggleMode />
            </li>
        </ul>
    )
}

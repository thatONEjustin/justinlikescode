"use client";

import MenuItem from "./MenuItem.tsx";
import ToggleMode from "@components/ToggleVisualTheme.tsx";

import type { MenuItemType } from "@js/types";

export default function MainMenu({ menuItems }: { menuItems: MenuItemType[] }): any {

    function isActive(href: string) {
        return window.location.pathname.includes(href)
    }

    return (
        <ul className="main-menu">
            {menuItems.map(({ href, label, icon, scrollTo = '' }: MenuItemType, index: number) =>
                <MenuItem key={index} active={isActive(href)} label={label} href={href} icon={icon} scrollTo={scrollTo} />
            )}

            <li className="border-0!">
                <ToggleMode />
            </li>
        </ul>
    )
}

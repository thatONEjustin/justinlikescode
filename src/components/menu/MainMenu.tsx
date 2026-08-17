"use client";

import MenuItem from "./MenuItem.tsx";
import ToggleMode from "@components/ToggleVisualTheme.tsx";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@components/shadcn/dropdown-menu";
import { Button } from "@components/shadcn/ui/button.tsx";

import type { MenuItemType } from "@lib/types";

export default function MainMenu({ items }: { items: MenuItemType[] }): any {
    function isActive(href: string): boolean {
        return window.location.pathname.includes(href)
    }

    function getEnglishUrl(): string {
        // return `${window.location.origin}${window.location.pathname}`
        return window.location.origin + '/' + window.location.pathname.replace('/es/', '')
    }

    function getSpanishUrl(): string {
        return `${window.location.origin}/es${window.location.pathname}`
    }

    function getCurrentLang(): string {
        return window.location.href.includes('/es') ? 'es' : 'en'
    }

    return (
        <ul className="main-menu">
            {items.map(({ href, label, icon, scrollTo = '' }: MenuItemType, index: number) =>
                <MenuItem
                    key={index}
                    active={isActive(href)}
                    label={label}
                    href={href}
                    icon={icon}
                    scrollTo={scrollTo} />
            )}

            <li className="main-menu-modeToggle">
                <ToggleMode />
            </li>
            <li className="main-menu-language">
                <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" className="bg-white! dark:border-secondary! dark:bg-darker-700! dark:hover:text-secondary cursor-pointer text-primary dark:text-secondary/70 text-sm" />}>
                        {getCurrentLang()}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuGroup>
                            <DropdownMenuItem className="cursor-pointer">
                                <a href={getEnglishUrl()}>
                                    English
                                </a>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                                <a href={getSpanishUrl()}>
                                    Español
                                </a>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </li>
        </ul>
    )
}

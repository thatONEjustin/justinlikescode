"use client";

import type { MenuItemType } from "@js/types";

import ToggleMode from "#components/ToggleVisualTheme.tsx";

export default function MobileMenu({ items, mobileMenu }: { items: MenuItemType[], mobileMenu: React.RefObject<HTMLUListElement> }) {
    return (
        <ul className="mobile-menu" ref={mobileMenu}>
            {items.map(({ href, label, icon }: MenuItemType, index: number) =>
                <li key={index} className="border-b border-primary dark:border-darker-400 px-8 py-4">
                    <a href={href} className="text-xl text-primary dark:text-secondary">
                        <i className={`nf ${icon} mr-2`}></i> {label}
                    </a>
                </li>
            )}

            <li className="border-0! py-4 px-8">
                <ToggleMode />
            </li>
        </ul>
    )
}

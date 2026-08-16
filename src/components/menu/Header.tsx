import type { MenuItemType } from "@js/types";

import MainMenu from "#components/menu/MainMenu.tsx";
import MobileHamburger from "#components/menu/MobileHamburger.tsx";
import MobileMenu from "#components/menu/MobileMenu.tsx";

import { useRef } from "react";

export default function Header({ items }: { items: MenuItemType[] }): any {
    const mobileMenuRef = useRef(null)
    return (
        <header className="relative">
            <div className="z-30 transition-colors bg-white dark:bg-black border-b-2 border-b-primary dark:border-b-secondary">
                <div className="px-8 xl:px-unset xl:container mx-auto w-full flex flex-row justify-between items-center py-3">
                    <a href="/" className="text-3xl flex items-center no-underline max-w-8/10">
                        <i className="nf nf-md-developer_board text-3xl text-primary dark:text-secondary mr-2"></i>
                        <h1 className="text-primary dark:text-secondary">justinlikescode</h1>
                    </a>
                    <MainMenu items={items} />
                    <MobileHamburger mobileMenu={mobileMenuRef as React.RefObject<any>} />
                </div>
            </div>
            <MobileMenu items={items} mobileMenu={mobileMenuRef as React.RefObject<any>} />
        </header>
    )
}

"use client";

import { useState } from "react";

export default function MobileHamburger({ mobileMenu }: { mobileMenu: React.RefObject<HTMLUListElement> }) {
    const mediaQuery = window.matchMedia("(width <= 768px)")

    const [isMobile, setIsMobile] = useState(mediaQuery.matches)
    const [active, setActive] = useState(false)

    mediaQuery.addEventListener('change', (e) => {
        setIsMobile(e.matches)
    })

    function openMenu() {
        if (isMobile == false) return

        setActive(!active)

        mobileMenu.current.classList.toggle('active')
    }

    return (
        <div className={`hamburger ${active ? 'active' : ''}`} onClick={openMenu}>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
        </div>
    )
}

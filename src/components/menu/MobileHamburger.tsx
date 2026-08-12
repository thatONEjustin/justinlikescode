"use client";

import { useState, useEffect } from "react";

export default function MobileHamburger(): any {
    let mediaQuery = window.matchMedia("(width <= 768px)")

    const [isMobile, setIsMobile] = useState(mediaQuery.matches)
    const [active, setActive] = useState(false)
    // const mainMenu = document.querySelector('.main-menu')

    mediaQuery.addEventListener('change', (e) => {
        setIsMobile(e.matches)
    })

    useEffect(() => {
        console.log(`isMobile: ${isMobile}`, `active: ${active}`)
        if (isMobile) {
            // mainMenu.classList.toggle('is-mobile')
        }
    }, [active, isMobile])

    function openMenu() {
        // if (mainMenu == null) return
        setActive(!active)
        // mainMenu.classList.toggle('active')
    }

    return (
        <div className={`hamburger`} onClick={() => openMenu()}>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
        </div>
    )
}

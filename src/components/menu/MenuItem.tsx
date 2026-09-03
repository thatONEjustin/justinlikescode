"use client";

import { RoughNotation } from "react-rough-notation";

import { useState, useEffect } from "react";

export default function MenuItem({ href, icon, label, active }: any): any {
    const [isActive, setIsActive] = useState(active);

    const [theme, setTheme] = useState(localStorage.theme);

    useEffect(() => {
        setTheme(localStorage.theme);
    });

    function themeColor(): string {
        return theme === "light" ? "var(--color-secondary)" : "var(--color-green)";
    }

    function checkActive(): void {
        if (active) return;

        setIsActive(false);
    }

    return (
        <li className="cursor-pointer">
            <RoughNotation
                type="underline"
                show={isActive}
                animationDuration={350}
                color={themeColor()}
                strokeWidth={2}
            >
                <a
                    href={href}
                    className={`menu-item text-primary hover:text-secondary dark:text-darker-300 dark:hover:text-green ${active ? "active dark:text-green" : ""}`}
                    onMouseEnter={() => setIsActive(true)}
                    onMouseLeave={() => checkActive()}
                >
                    <i className={`nf ${icon} mr-2`}></i>
                    {label}
                </a>
            </RoughNotation>
        </li>
    );
}

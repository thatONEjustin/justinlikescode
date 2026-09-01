"use client";

import { RoughNotation } from "react-rough-notation";

import { useState } from "react";

export default function MenuItem({ href, icon, label, active }: any): any {
    const [isActive, setIsActive] = useState(active);
    function checkActive() {
        if (active) return;

        setIsActive(false);
    }

    return (
        <li>
            <RoughNotation type="underline" show={isActive} color="var(--color-primary)" strokeWidth={2}>
                <a
                    href={href}
                    className={`menu-item ${active ? "active" : ""}`}
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

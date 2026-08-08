"use client";

import { useState } from "react";

export default function ToggleVisualTheme(): any {
    const [theme, setTheme] = useState("light");
    const body = document.querySelector('body');

    function toggleTheme() {
        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }

        body?.classList.toggle('dark');
    }

    return (
        <div className={`flex items-center justify-center ${theme}`}>
            <input type="hidden" name="current_theme" value={theme} />
            <label>
                <span className="sr-only">Light/Dark Mode</span>
            </label>

            <button className="relative inline-flex w-12 max-w-12 rounded-full py-1 transition-all cursor-pointer" onClick={() => toggleTheme()}>
                <span className={`bg-darker-900 h-6 w-6 rounded-full transition-all relative ${theme == 'light' ? 'translate-x-full' : 'translate-x-0'}`} aria-hidden="true">
                    <i className={`nf ${theme == 'light' ? 'nf-fa-sun text-light-50' : 'nf-fa-cloud_moon text-dark-700'}`}></i>
                    {/* <i className="nf nf-fa-sun text-light-50 dark:nf-fa-cloud_moon dark:text-dark-700"></i> */}
                </span>
            </button>
        </div>
    )
}

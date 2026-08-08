"use client";

import { useState } from "react";

export default function ToggleVisualTheme(): any {
    const [theme, setTheme] = useState("light");

    return (
        <div className="flex items-center justify-center">
            <input type="hidden" name="current_theme" value={theme} />
            <label>
                <span className="sr-only">Light/Dark Mode</span>
            </label>

            <button className="relative ml-4 inline-flex w-14 rounded-full py-1 transition">
                <span className="bg-darker-900 h-6 w-6 rounded-full transition shadow-md" aria-hidden="true">
                    <i className={`"nf", ${theme == 'light' ? 'nf-fa-cloud_moon text-dark-700' : 'nf-fa-sun text-light-50'}`}></i>
                </span>
            </button>
        </div>
    )
}

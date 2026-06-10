"use client";

interface TextareaFieldProps {
    name: string,
    required?: boolean,
    children: React.ReactNode,
    placeholder?: string
}

import React from "react";

export default function TextareaField({ name, required = false, children, placeholder }: TextareaFieldProps) {
    return (
        <div className={`form-input`}>
            <textarea name={name} className="peer" id={name} required={required}>{placeholder != '' && placeholder}</textarea>
            <label htmlFor={name}>
                {children}
            </label>
        </div>
    )
}

"use client";

export default function MenuItem({ href, scrollTo = '', icon, label, active }: any): any {
    return (
        <li>
            <a href={href} className={`menu-item ${active ? 'active' : ''}`} data-scroll={scrollTo}>
                <i className={`nf ${icon} mr-2`}></i>
                {label}
            </a>
        </li>
    )
}

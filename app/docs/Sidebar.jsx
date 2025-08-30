"use client";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { docsNav } from './nav';

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <nav aria-label="Documentation" className="text-sm">
            {docsNav.map(section => (
                <div key={section.section} className="docs-nav-group">
                    <h2>{section.section}</h2>
                    <ul className="space-y-1">
                        {section.items.map(item => {
                            const active = !item.disabled && pathname.startsWith(item.href);
                            if (item.disabled) {
                                return (
                                    <li key={item.title}>
                                        <span className="docs-link docs-link-disabled">{item.title}</span>
                                    </li>
                                );
                            }
                            return (
                                <li key={item.title}>
                                    <Link href={item.href} className={`docs-link ${active ? 'docs-link-active' : ''}`}>{item.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </nav>
    );
}

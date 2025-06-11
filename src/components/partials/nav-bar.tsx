'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils/cn';

interface ILink {
    href: string;
    label: string;
}

const LINKS = [
    {
        href: '/',
        label: 'projects',
    },
    {
        href: '/about-me',
        label: 'about-me',
    },
] as const satisfies ILink[];

export default function NavBar() {
    const path = usePathname();

    return (
        <nav className="col-span-4 place-self-center">
            <ul className="flex gap-8">
                {LINKS.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            className={cn(
                                'font-extralight text-white/75 transition-colors hover:text-white',
                                path === link.href ? 'font-normal text-white' : '',
                            )}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

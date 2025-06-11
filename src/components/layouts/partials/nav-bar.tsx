'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { cn } from '@/lib/utils/cn';
import { ILink } from '@/types/link';

const LINKS = [
    {
        href: '/',
        label: 'Projects',
    },
    {
        href: '/about-me',
        label: 'About Me',
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

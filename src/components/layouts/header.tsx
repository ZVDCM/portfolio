'use client';

import Link from 'next/link';
import React from 'react';

import NavBar from '@/components/layouts/partials/nav-bar';
import Socials from '@/components/layouts/partials/socials';
import { TypographySmall } from '@/components/ui/typography';

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] container mx-auto grid h-[100px] grid-cols-6 items-center px-8 py-4">
            <Link
                href="/"
                className="font-extralight text-white/50 transition-colors hover:text-white"
            >
                <TypographySmall>ZVM</TypographySmall>
            </Link>
            <NavBar />
            <Socials />
        </header>
    );
}

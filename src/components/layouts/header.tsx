'use client';

import Link from 'next/link';
import React from 'react';

import NavBar from '@/components/layouts/partials/nav-bar';
import Socials from '@/components/layouts/partials/socials';

export default function Header() {
    return (
        <header className="fixed top-0 z-[100] container mx-auto grid grid-cols-6 items-center px-8 py-4">
            <Link
                href="/"
                className="font-extralight text-white/75 transition-colors hover:text-white"
            >
                ZVM
            </Link>
            <NavBar />
            <Socials />
        </header>
    );
}

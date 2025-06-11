'use client';

import React from 'react';

import Logo from '@/components/layouts/partials/logo';
import NavBar from '@/components/layouts/partials/nav-bar';
import Socials from '@/components/layouts/partials/socials';

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] container mx-auto grid h-[100px] grid-cols-6 items-center px-8 py-4">
            <Logo />
            <NavBar />
            <Socials />
        </header>
    );
}

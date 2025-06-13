'use client';

import React from 'react';

import Logo from '@/components/layouts/partials/logo';

export default function Header() {
    return (
        <header className="pointer-events-none sticky top-0 z-[100] container mx-auto flex h-[100px] items-center justify-between px-4 py-4 md:px-8">
            <Logo />
            {/* <NavBar /> */}
        </header>
    );
}

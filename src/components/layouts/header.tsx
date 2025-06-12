'use client';

import React from 'react';

import Logo from '@/components/layouts/partials/logo';

export default function Header() {
    return (
        <header className="sticky top-0 z-[100] container mx-auto flex h-[100px] items-center justify-between px-8 py-4">
            <Logo />
            {/* <NavBar /> */}
        </header>
    );
}

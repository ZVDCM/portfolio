import Link from 'next/link';
import React from 'react';

import NavBar from '@/components/partials/nav-bar';
import Socials from '@/components/partials/socials';

export default function Header() {
    return (
        <header className="container mx-auto grid grid-cols-6 items-center px-8 py-4">
            <Link href="/">ZVM</Link>
            <NavBar />
            <Socials />
        </header>
    );
}

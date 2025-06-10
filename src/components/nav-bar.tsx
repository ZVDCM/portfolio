import Link from 'next/link';
import React from 'react';

export default function NavBar() {
    return (
        <nav className="col-span-4 place-self-center">
            <ul className="flex gap-8">
                <li>
                    <Link href="#" className="underline">
                        projects
                    </Link>
                </li>
                <li>
                    <Link href="#" className="underline">
                        about-me
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

'use client';

import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

interface ILink {
    href: string;
    icon: IconType;
}

const LINKS = [
    { href: 'https://www.linkedin.com/in/zehrei-verj-morales', icon: FaLinkedin },
    { href: 'https://github.com/ZVDCM', icon: FaSquareGithub },
] as const satisfies ILink[];

export default function Socials() {
    return (
        <div className="fixed right-5 bottom-5">
            {LINKS.map((link, index) => {
                const Icon = link.icon;

                return (
                    <Link href={link.href} key={index}>
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <Icon />
                        </Button>
                    </Link>
                );
            })}
        </div>
    );
}

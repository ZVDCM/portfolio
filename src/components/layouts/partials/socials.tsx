'use client';

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';
import { ILinkWithIcon } from '@/types/link';

const LINKS = [
    { href: 'https://www.linkedin.com/in/zehrei-verj-morales', icon: FaLinkedin },
    { href: 'https://github.com/ZVDCM', icon: FaSquareGithub },
] as const satisfies ILinkWithIcon[];

export default function Socials() {
    return (
        <div className="flex items-center justify-between gap-2">
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

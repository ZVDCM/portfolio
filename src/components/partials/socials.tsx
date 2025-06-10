import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6';

import { Button } from '@/components/ui/button';

export default function Socials() {
    return (
        <div className="flex gap-1 justify-self-end">
            <Link href="#">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <FaLinkedin />
                </Button>
            </Link>
            <Link href="#">
                <Button variant="ghost" size="icon" className="cursor-pointer">
                    <FaSquareGithub />
                </Button>
            </Link>
        </div>
    );
}

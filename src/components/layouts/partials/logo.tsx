'use client';

import Link from 'next/link';
import React from 'react';

import { TypographySmall } from '@/components/ui/typography';
import { cn } from '@/lib/utils/cn';

export default function Logo({ className, ...rest }: React.ComponentProps<'small'>) {
    return (
        <Link
            passHref
            href="/"
            className="pointer-events-auto w-fit text-white/50 transition-colors hover:text-white"
        >
            <TypographySmall className={cn('font-extralight', className)} {...rest}>
                ZVM
            </TypographySmall>
        </Link>
    );
}

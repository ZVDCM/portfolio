import React from 'react';

import { TypographyH1 } from '@/components/ui/typography';

export default function NotFound() {
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <TypographyH1 className="-translate-y-10 text-gray-500/50">Page not found</TypographyH1>
        </div>
    );
}

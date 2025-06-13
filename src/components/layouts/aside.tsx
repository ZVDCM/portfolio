'use client';

import React from 'react';

import DownloadResume from '@/components/layouts/partials/download-resume';
import Socials from '@/components/layouts/partials/socials';

export default function Aside() {
    return (
        <aside className="fixed bottom-8 w-full">
            <div className="container mx-auto flex items-center justify-between px-8">
                <DownloadResume />
                <Socials />
            </div>
        </aside>
    );
}

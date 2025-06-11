'use client';

import { Download as LCDownload } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function DownloadResume() {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/files/resume.pdf';
        link.download = 'morales-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button onClick={handleDownload}>
            Download Resume <LCDownload />
        </Button>
    );
}

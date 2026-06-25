'use client';

import FullstackHQ from '@/components/employments/fullstackhq';
import Hanpoom from '@/components/employments/hanpoom';
import Mrkd from '@/components/employments/mrkd';

export default function Employments() {
    return (
        <section className="container mx-auto flex flex-col items-center justify-center gap-20 px-4 md:px-8">
            <FullstackHQ />
            <Hanpoom />
            <Mrkd />
        </section>
    );
}

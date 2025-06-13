'use client';

import React from 'react';

import Me from '@/assets/images/me.jpg';
import Project from '@/components/pages/projects/project';
import { IProject } from '@/types/project';

const PROJECTS = [
    {
        category: 'AI',
        dateCreated: new Date(),
        href: '#',
        image: Me,
        title: 'Barbara Blair',
        type: 'GitHub',
    },
] as const satisfies IProject[];

export default function ProjectGrid() {
    return (
        <section className="grid grid-cols-3">
            {PROJECTS.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

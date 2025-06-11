'use client';

import React from 'react';

import Project from '@/components/pages/projects/project';
import { IProject } from '@/types/project';

const PROJECTS = [] as const satisfies IProject[];

export default function ProjectGrid() {
    return (
        <section className="grid grid-cols-3">
            {PROJECTS.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </section>
    );
}

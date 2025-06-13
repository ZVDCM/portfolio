'use client';

import Image from 'next/image';
import React from 'react';

import Eoty from '@/assets/images/eoty.jpg';
import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
} from '@/components/ui/typography';

export default function Employments() {
    return (
        <section className="container mx-auto flex items-center justify-center px-8">
            <article className="mt-10 w-[800px]">
                <figure className="square-text-wrap float-left aspect-square w-[300px]">
                    <Image
                        src={Eoty}
                        alt="A picture of me being awarded as Employee of the Year"
                        placeholder="blur"
                        className="size-full object-cover"
                    />
                    <figcaption>
                        <TypographyMuted className="mt-2 text-center">
                            I won employee of the year!
                        </TypographyMuted>
                    </figcaption>
                </figure>
                <TypographyMuted>2024-2025</TypographyMuted>
                <TypographyH1 className="text-6xl">FullStack HQ</TypographyH1>
                <TypographyH2>Full Stack Developer</TypographyH2>
                <TypographyP className="text-justify">
                    I joined FullStack HQ on February 14, 2024. It is my first company. Through this
                    experience, I&apos;ve learned what it&apos;s like to work in the industry and
                    how different it is compared to college or developing applications on my own. I
                    had the chance to socialize with like-minded peers—people who are deeply
                    passionate about coding. I&apos;ve met individuals who became my silent mentors,
                    unknowingly teaching me how to handle high-pressure situations and shaping the
                    way I think and act. I now understand what it means to be professional. At
                    FullStack HQ, I discovered that coding is even more enjoyable when shared with
                    others.
                </TypographyP>
                <TypographyP className="text-justify">
                    At FullStack HQ, I worked as a Full Stack Developer where I contributed to a
                    wide range of web and mobile projects using technologies such as Next.js,
                    Node.js, Laravel, InertiaJS, and React Native. I built and maintained
                    applications spanning various architectures—from custom WordPress themes and
                    headless CMS setups to full-scale platforms and internal tools. I integrated
                    third-party services like Clockify and Strapi, implemented authentication
                    systems using JWT with rotating refresh tokens and IronSession, and developed
                    features such as role-based access control, analytics tracking, and map
                    integration. I also handled deployments across platforms including AWS,
                    DigitalOcean, Netlify, and Vercel, while configuring CDNs and optimizing backend
                    performance. My work at FullStack HQ deepened my technical versatility,
                    strengthened my DevOps skills, and taught me how to deliver scalable,
                    production-ready applications as part of a collaborative engineering team.
                </TypographyP>
            </article>
        </section>
    );
}

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
import useMediaQuery from '@/hooks/use-mediaquery';
import { cn } from '@/lib/utils/cn';

export default function Employments() {
    const isDesktop = useMediaQuery('(min-width:768px)');

    return (
        <section className="container mx-auto flex items-center justify-center px-4 md:px-8">
            <article className="mt-10 flex w-[800px] flex-col md:block">
                <figure
                    className={cn(
                        isDesktop ? 'square-text-wrap float-left' : '',
                        'mb-15 aspect-square w-full md:mb-0 md:w-[300px]',
                    )}
                >
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
                <TypographyH1>FullStack HQ</TypographyH1>
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
                    wide range of web and mobile projects using technologies such as{' '}
                    <strong>
                        <u>Next.js</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Node.js</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Laravel</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>InertiaJS</u>
                    </strong>
                    , and{' '}
                    <strong>
                        <u>React Native</u>
                    </strong>
                    . I built and maintained applications spanning various architectures—from custom{' '}
                    <strong>
                        <u>WordPress</u>
                    </strong>{' '}
                    themes and headless CMS setups to full-scale platforms and internal tools. I
                    integrated third-party services like{' '}
                    <strong>
                        <u>Clockify</u>
                    </strong>{' '}
                    and{' '}
                    <strong>
                        <u>Strapi</u>
                    </strong>
                    , implemented authentication systems using{' '}
                    <strong>
                        <u>JWT</u>
                    </strong>{' '}
                    with rotating refresh tokens and{' '}
                    <strong>
                        <u>IronSession</u>
                    </strong>
                    , and developed features such as role-based access control (
                    <strong>
                        <u>RBAC</u>
                    </strong>
                    ), analytics tracking, and map integration. I also handled deployments across
                    platforms including{' '}
                    <strong>
                        <u>AWS</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>DigitalOcean</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Netlify</u>
                    </strong>
                    , and{' '}
                    <strong>
                        <u>Vercel</u>
                    </strong>
                    , while configuring CDNs and optimizing backend performance. My work at
                    FullStack HQ deepened my technical versatility, strengthened my DevOps skills,
                    and taught me how to deliver scalable, production-ready applications as part of
                    a collaborative engineering team.
                </TypographyP>
            </article>
        </section>
    );
}

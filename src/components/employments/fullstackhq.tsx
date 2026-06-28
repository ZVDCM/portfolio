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

function FullstackHQ() {
    return (
        <article className="mt-10 flex w-full max-w-[800px] flex-col md:block">
            <figure className="float-left mb-15 aspect-square w-full md:mr-4 md:mb-0 md:w-[300px]">
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
            <TypographyMuted>Feb 2024 - Apr 2025</TypographyMuted>
            <TypographyH1>FullStack HQ</TypographyH1>
            <TypographyH2>Full Stack Developer</TypographyH2>
            <TypographyP className="text-justify">
                I started at FullStack HQ on February 14, 2024 &mdash; my first real job, and where
                most of what I know about being a developer began. College and tinkering on my own
                hadn&apos;t prepared me for any of it. The part that stuck wasn&apos;t the code; it
                was the people. A few of them became quiet mentors who never set out to teach me
                anything, yet watching them stay composed under pressure rewired the way I work.
                This is where I figured out what being professional actually looks like, and that
                the whole thing is more fun when the people around you care about it as much as you
                do.
            </TypographyP>
            <TypographyP className="text-justify">
                The project I owned end to end was Raket.PH, a{' '}
                <strong>
                    <u>Next.js</u>
                </strong>{' '}
                +{' '}
                <strong>
                    <u>Strapi</u>
                </strong>{' '}
                storefront where I handled everything from the UI/UX down to a backend refactor, API
                performance, and the{' '}
                <strong>
                    <u>Google Analytics</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>Tag Manager</u>
                </strong>{' '}
                setup &mdash; then shipped it onto{' '}
                <strong>
                    <u>AWS</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>DigitalOcean</u>
                </strong>{' '}
                behind a{' '}
                <strong>
                    <u>Cloudflare</u>
                </strong>{' '}
                CDN. WeCampaign pulled me in a different direction, spanning web and mobile at once:
                a{' '}
                <strong>
                    <u>Next.js</u>
                </strong>{' '}
                +{' '}
                <strong>
                    <u>Xano</u>
                </strong>{' '}
                site paired with a{' '}
                <strong>
                    <u>React Native</u>
                </strong>{' '}
                app. On BlankSpaceGolf I spent most of my time in the backend, building{' '}
                <strong>
                    <u>JWT</u>
                </strong>{' '}
                auth with rotating refresh tokens,{' '}
                <strong>
                    <u>RBAC</u>
                </strong>
                , and image detection on a{' '}
                <strong>
                    <u>Next.js</u>
                </strong>{' '}
                +{' '}
                <strong>
                    <u>Node.js</u>
                </strong>{' '}
                stack.
            </TypographyP>
            <TypographyP className="text-justify">
                The rest landed across a steady stream of client work &mdash; full-stack delivery on
                HikeSEO (
                <strong>
                    <u>Laravel</u>
                </strong>{' '}
                +{' '}
                <strong>
                    <u>InertiaJS</u>
                </strong>
                /
                <strong>
                    <u>Vue</u>
                </strong>
                ), a headless{' '}
                <strong>
                    <u>WordPress</u>
                </strong>{' '}
                +{' '}
                <strong>
                    <u>Next.js</u>
                </strong>{' '}
                build for Natiive, and a long tail of headless sites, API integrations, and mobile
                bugs that needed chasing down.
            </TypographyP>
        </article>
    );
}

export default FullstackHQ;

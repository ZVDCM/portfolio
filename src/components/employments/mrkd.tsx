'use client';

import React from 'react';

import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
} from '@/components/ui/typography';

function Mrkd() {
    return (
        <article className="mt-10 flex w-[800px] flex-col">
            <TypographyMuted>Sept 2025 - Present</TypographyMuted>
            <TypographyH1>MRKD.Inc</TypographyH1>
            <TypographyH2>Full Stack Developer</TypographyH2>
            <TypographyP className="font-semibold">Winner, Claude Agentic Hackathon</TypographyP>
            <TypographyP className="text-justify">
                watertyt is the project I&apos;m proudest of so far &mdash; a platform for pool
                builders that carries a job from the first quote through scheduling, the day-to-day
                project management, and the financials behind it. I started it from nothing and
                shaped the architecture as it grew: an{' '}
                <strong>
                    <u>Nx</u>
                </strong>{' '}
                monorepo with a{' '}
                <strong>
                    <u>React 19</u>
                </strong>{' '}
                front end on{' '}
                <strong>
                    <u>TanStack Router and Query</u>
                </strong>
                , talking to a{' '}
                <strong>
                    <u>NestJS</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>Fastify</u>
                </strong>{' '}
                API backed by{' '}
                <strong>
                    <u>PostgreSQL</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>Drizzle</u>
                </strong>
                .
            </TypographyP>
            <TypographyP className="text-justify">
                The part I&apos;ve enjoyed most is the AI layer. With{' '}
                <strong>
                    <u>Google Gemini</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>pgvector</u>
                </strong>{' '}
                I built semantic search across the data, an assistant that actually remembers the
                conversation, and a feed that surfaces the next things worth doing and ranks them by
                urgency. Tying it into the business meant wiring up{' '}
                <strong>
                    <u>Xero</u>
                </strong>{' '}
                for P&amp;L and budget sync,{' '}
                <strong>
                    <u>Gmail</u>
                </strong>{' '}
                and{' '}
                <strong>
                    <u>Mailgun</u>
                </strong>{' '}
                for email, and{' '}
                <strong>
                    <u>Twilio</u>
                </strong>{' '}
                for SMS.
            </TypographyP>
            <TypographyP className="text-justify">
                Underneath sits the work nobody notices until it breaks: multi-tenant row-level
                security,{' '}
                <strong>
                    <u>OAuth</u>
                </strong>{' '}
                through Google and Apple with{' '}
                <strong>
                    <u>Argon2</u>
                </strong>{' '}
                hashing, and{' '}
                <strong>
                    <u>BullMQ</u>
                </strong>{' '}
                handling the background jobs. It all ships through a{' '}
                <strong>
                    <u>Docker</u>
                </strong>{' '}
                pipeline that builds multi-arch images and pushes them to{' '}
                <strong>
                    <u>Google Cloud</u>
                </strong>{' '}
                via{' '}
                <strong>
                    <u>GitHub Actions</u>
                </strong>
                , with north of 800 tests keeping me honest.
            </TypographyP>
        </article>
    );
}

export default Mrkd;

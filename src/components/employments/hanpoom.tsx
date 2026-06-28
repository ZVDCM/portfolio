'use client';

import React from 'react';

import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
} from '@/components/ui/typography';

function Hanpoom() {
    return (
        <article className="mt-10 flex w-full max-w-[800px] flex-col">
            <TypographyMuted>Jul 2025 - Sept 2025</TypographyMuted>
            <TypographyH1>Hanpoom</TypographyH1>
            <TypographyH2>Full Stack Developer</TypographyH2>
            <TypographyP className="text-justify">
                Hanpoom runs a{' '}
                <strong>
                    <u>Shopify</u>
                </strong>{' '}
                store selling Korean products, and they wanted to reach English-speaking customers
                &mdash; so almost everything I worked on came down to closing that language gap with{' '}
                <strong>
                    <u>LLMs</u>
                </strong>
                . The first tool reads the Korean text baked into the product photos and swaps in
                English on its own, which meant nobody had to rebuild those images by hand anymore.
                The second was for reviews: it translates what customers wrote and condenses long
                threads into a short summary, so shoppers who don&apos;t read Korean can still get
                the gist of what people actually think.
            </TypographyP>
        </article>
    );
}

export default Hanpoom;

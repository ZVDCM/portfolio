'use client';

import Image from 'next/image';
import React from 'react';

import Me from '@/assets/images/me.png';
import { TypographyH1, TypographyP } from '@/components/ui/typography';
import useMediaQuery from '@/hooks/use-mediaquery';
import { cn } from '@/lib/utils/cn';

export default function Hero() {
    const isDesktop = useMediaQuery('(min-width:768px)');

    return (
        <section className="container mx-auto flex items-center justify-center px-4 md:px-8">
            <article className="mt-10 flex w-[800px] flex-col md:block">
                <Image
                    src={Me}
                    alt="A cool picture of myself"
                    className={cn(
                        isDesktop ? 'square-text-wrap float-left' : '',
                        'mb-15 aspect-square w-full object-cover md:mb-0 md:w-[300px]',
                    )}
                    placeholder="blur"
                />
                <TypographyH1>I&apos;m Zehrei Verj Morales</TypographyH1>
                <TypographyP className="text-justify">
                    I graduated from Angeles University Foundation with a{' '}
                    <strong>
                        <u>Bachelor&apos;s degree in Information Technology</u>
                    </strong>
                    . My hobbies include reading comics, coding, singing, and staying updated with
                    the latest technologies.
                </TypographyP>
                <TypographyP className="text-justify">
                    I&apos;m a{' '}
                    <strong>
                        <u>full stack developer</u>
                    </strong>{' '}
                    with a strong foundation in frontend, backend, and cloud development, as well as
                    DevOps and infrastructure management. I specialize in building applications
                    across a range of technologies—from frontend frameworks like{' '}
                    <strong>
                        <u>React</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Vue</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Angular</u>
                    </strong>
                    , and to backend tools such as{' '}
                    <strong>
                        <u>Node.js</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Laravel</u>
                    </strong>
                    , and{' '}
                    <strong>
                        <u>.NET</u>
                    </strong>
                    . My experience spans software architectures (
                    <strong>
                        <u>Clean Architecture</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Event-Driven Architecture</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Microservices</u>
                    </strong>
                    ), codebase strategies (
                    <strong>
                        <u>Monorepos</u>
                    </strong>
                    ), development practices (
                    <strong>
                        <u>TDD</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>BDD</u>
                    </strong>
                    ), and design paradigms like Domain-Driven Design (
                    <strong>
                        <u>DDD</u>
                    </strong>
                    ).
                </TypographyP>
                <TypographyP className="text-justify">
                    In cloud computing, I&apos;ve deployed and managed applications using platforms
                    like Google Cloud Platform (
                    <strong>
                        <u>GCP</u>
                    </strong>
                    ) and Amazon Web Services (
                    <strong>
                        <u>AWS</u>
                    </strong>
                    ), as well as hosting environments such as{' '}
                    <strong>
                        <u>DigitalOcean</u>
                    </strong>
                    ,{' '}
                    <strong>
                        <u>Vercel</u>
                    </strong>
                    , and{' '}
                    <strong>
                        <u>Netlify</u>
                    </strong>
                    . On the DevOps side, I work with tools such as{' '}
                    <strong>
                        <u>Docker</u>
                    </strong>{' '}
                    and{' '}
                    <strong>
                        <u>Kubernetes</u>
                    </strong>{' '}
                    for containerization and orchestration,{' '}
                    <strong>
                        <u>Jenkins</u>
                    </strong>{' '}
                    for CI/CD automation, and{' '}
                    <strong>
                        <u>Cloudflare</u>
                    </strong>{' '}
                    for CDN and security optimization. I&apos;ve also used{' '}
                    <strong>
                        <u>RabbitMQ</u>
                    </strong>{' '}
                    for message queuing in distributed systems.
                </TypographyP>
            </article>
        </section>
    );
}

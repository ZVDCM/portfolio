import Image from 'next/image';
import React from 'react';

import Me from '@/assets/images/me.jpg';
import { TypographyH1, TypographyP } from '@/components/ui/typography';

export default function Hero() {
    return (
        <section className="container mx-auto flex items-center justify-center px-8">
            <article className="mt-10 w-[800px]">
                <Image
                    src={Me}
                    alt="A cool picture of myself"
                    className="square-text-wrap float-left aspect-square w-[300px] object-cover"
                    placeholder="blur"
                />
                <TypographyH1 className="text-6xl">I&apos;m Zehrei Verj Morales</TypographyH1>
                <TypographyP>
                    I graduated from Angeles University Foundation with a{' '}
                    <strong>
                        <u>Bachelor&apos;s degree in Information Technology</u>
                    </strong>
                    . My hobbies include reading comics, coding, singing, and staying updated with
                    the latest technologies.
                </TypographyP>
                <TypographyP>
                    I&apos;m a{' '}
                    <strong>
                        <u>full stack developer</u>
                    </strong>{' '}
                    with a strong foundation in frontend, backend, and cloud development, as well as
                    DevOps and infrastructure management. I specialize in building applications
                    across a range of technologies—from frontend frameworks like{' '}
                    <strong>
                        <u>React, Vue, and Angular</u>
                    </strong>{' '}
                    to backend tools such as{' '}
                    <strong>
                        <u>Node.js, Laravel, and .NET</u>
                    </strong>
                    . I&apos;m also experienced in software architectures such as{' '}
                    <strong>
                        <u>Clean Architecture and Microservices</u>
                    </strong>
                    , codebase strategies like{' '}
                    <strong>
                        <u>Monorepos</u>
                    </strong>
                    , and design paradigms such as Test-Driven Development{' '}
                    <strong>
                        <u>(TDD)</u>
                    </strong>
                    , Behavior-Driven Development{' '}
                    <strong>
                        <u>(BDD)</u>
                    </strong>
                    , Event-Driven Development{' '}
                    <strong>
                        <u>(EDD)</u>
                    </strong>
                    , and Domain-Driven Design{' '}
                    <strong>
                        <u>(DDD)</u>
                    </strong>
                    .
                </TypographyP>
                <TypographyP>
                    In cloud computing, I&apos;ve deployed and managed applications using platforms
                    like Google Cloud Platform{' '}
                    <strong>
                        <u>(GCP)</u>
                    </strong>{' '}
                    and Amazon Web Services{' '}
                    <strong>
                        <u>(AWS)</u>
                    </strong>
                    , as well as hosting environments such as{' '}
                    <strong>
                        <u>DigitalOcean, Vercel, and Netlify</u>
                    </strong>
                    . On the DevOps side, I work with tools such as{' '}
                    <strong>
                        <u>Docker and Kubernetes</u>
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

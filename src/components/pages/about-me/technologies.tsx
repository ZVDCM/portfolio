'use client';

import Link from 'next/link';
import React from 'react';
import { FaTheaterMasks } from 'react-icons/fa';
import {
    FaAngular,
    FaAws,
    FaBitbucket,
    FaCloudflare,
    FaCss3Alt,
    FaDigitalOcean,
    FaDocker,
    FaFly,
    FaGitAlt,
    FaHtml5,
    FaJenkins,
    FaJira,
    FaJs,
    FaLaravel,
    FaNodeJs,
    FaReact,
    FaSlack,
    FaSquareGithub,
    FaStripe,
    FaVuejs,
    FaWordpress,
} from 'react-icons/fa6';
import { RiNextjsFill } from 'react-icons/ri';
import {
    SiCommitlint,
    SiCypress,
    SiDotnet,
    SiEslint,
    SiFirebase,
    SiGoogleanalytics,
    SiGooglecloud,
    SiGoogletagmanager,
    SiHeroku,
    SiInertia,
    SiJest,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiNestjs,
    SiNetlify,
    SiNuxtdotjs,
    SiPostgresql,
    SiPrettier,
    SiPuppeteer,
    SiRabbitmq,
    SiRedis,
    SiRender,
    SiSendgrid,
    SiStorybook,
    SiSupabase,
    SiTailwindcss,
    SiTurborepo,
    SiVercel,
    SiVitest,
    SiXendit,
} from 'react-icons/si';
import { TbDog } from 'react-icons/tb';

import { Button } from '@/components/ui/button';
import { ILinkWithIcon } from '@/types/link';

const LINKS = [
    { href: 'https://git-scm.com/', icon: FaGitAlt },
    { href: 'https://github.com/', icon: FaSquareGithub },
    { href: 'https://bitbucket.org/', icon: FaBitbucket },
    { href: 'https://www.atlassian.com/software/jira', icon: FaJira },
    { href: 'https://slack.com/', icon: FaSlack },
    { href: 'https://developer.mozilla.org/docs/Web/HTML', icon: FaHtml5 },
    { href: 'https://developer.mozilla.org/docs/Web/CSS', icon: FaCss3Alt },
    { href: 'https://developer.mozilla.org/docs/Web/JavaScript', icon: FaJs },
    { href: 'https://react.dev/', icon: FaReact },
    { href: 'https://nextjs.org/', icon: RiNextjsFill },
    { href: 'https://vuejs.org/', icon: FaVuejs },
    { href: 'https://nuxt.com/', icon: SiNuxtdotjs },
    { href: 'https://angular.io/', icon: FaAngular },
    { href: 'https://tailwindcss.com/', icon: SiTailwindcss },
    { href: 'https://typicode.github.io/husky/', icon: TbDog },
    { href: 'https://eslint.org/', icon: SiEslint },
    { href: 'https://prettier.io/', icon: SiPrettier },
    { href: 'https://commitlint.js.org/', icon: SiCommitlint },
    { href: 'https://vitest.dev/', icon: SiVitest },
    { href: 'https://jestjs.io/', icon: SiJest },
    { href: 'https://www.cypress.io/', icon: SiCypress },
    { href: 'https://playwright.dev/', icon: FaTheaterMasks },
    { href: 'https://pptr.dev/', icon: SiPuppeteer },
    { href: 'https://storybook.js.org/', icon: SiStorybook },
    { href: 'https://turbo.build/repo', icon: SiTurborepo },
    { href: 'https://nodejs.org/', icon: FaNodeJs },
    { href: 'https://nestjs.com/', icon: SiNestjs },
    { href: 'https://firebase.google.com/', icon: SiFirebase },
    { href: 'https://supabase.com/', icon: SiSupabase },
    { href: 'https://wordpress.org/', icon: FaWordpress },
    { href: 'https://inertiajs.com/', icon: SiInertia },
    { href: 'https://laravel.com/', icon: FaLaravel },
    { href: 'https://dotnet.microsoft.com/', icon: SiDotnet },
    { href: 'https://cloud.google.com/', icon: SiGooglecloud },
    { href: 'https://aws.amazon.com/', icon: FaAws },
    { href: 'https://www.digitalocean.com/', icon: FaDigitalOcean },
    { href: 'https://www.netlify.com/', icon: SiNetlify },
    { href: 'https://vercel.com/', icon: SiVercel },
    { href: 'https://fly.io/', icon: FaFly },
    { href: 'https://render.com/', icon: SiRender },
    { href: 'https://www.heroku.com/', icon: SiHeroku },
    { href: 'https://www.cloudflare.com/', icon: FaCloudflare },
    { href: 'https://analytics.google.com/', icon: SiGoogleanalytics },
    { href: 'https://tagmanager.google.com/', icon: SiGoogletagmanager },
    { href: 'https://sendgrid.com/', icon: SiSendgrid },
    { href: 'https://stripe.com/', icon: FaStripe },
    { href: 'https://www.xendit.co/', icon: SiXendit },
    { href: 'https://www.docker.com/', icon: FaDocker },
    { href: 'https://kubernetes.io/', icon: SiKubernetes },
    { href: 'https://www.jenkins.io/', icon: FaJenkins },
    { href: 'https://www.rabbitmq.com/', icon: SiRabbitmq },
    { href: 'https://www.mysql.com/', icon: SiMysql },
    { href: 'https://www.postgresql.org/', icon: SiPostgresql },
    { href: 'https://www.mongodb.com/', icon: SiMongodb },
    { href: 'https://redis.io/', icon: SiRedis },
] as const satisfies ILinkWithIcon[];

export default function Technologies() {
    return (
        <section className="bg-white/5 py-8">
            <div className="container mx-auto flex items-center justify-center px-8">
                <div className="flex w-[800px] flex-wrap justify-between gap-4">
                    {LINKS.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Link passHref key={index} href={link.href} className="last:mr-auto">
                                <Button variant="ghost" className="aspect-square h-[none] p-0">
                                    <Icon className="size-[28px]" />
                                </Button>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

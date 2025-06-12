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
    { href: '#', icon: FaGitAlt },
    { href: '#', icon: FaSquareGithub },
    { href: '#', icon: FaBitbucket },
    { href: '#', icon: FaJira },
    { href: '#', icon: FaSlack },
    { href: '#', icon: FaHtml5 },
    { href: '#', icon: FaCss3Alt },
    { href: '#', icon: FaJs },
    { href: '#', icon: FaReact },
    { href: '#', icon: RiNextjsFill },
    { href: '#', icon: FaVuejs },
    { href: '#', icon: SiNuxtdotjs },
    { href: '#', icon: FaAngular },
    { href: '#', icon: SiTailwindcss },
    { href: '#', icon: TbDog },
    { href: '#', icon: SiEslint },
    { href: '#', icon: SiPrettier },
    { href: '#', icon: SiCommitlint },
    { href: '#', icon: SiVitest },
    { href: '#', icon: SiJest },
    { href: '#', icon: SiCypress },
    { href: '#', icon: FaTheaterMasks },
    { href: '#', icon: SiPuppeteer },
    { href: '#', icon: SiStorybook },
    { href: '#', icon: SiTurborepo },
    { href: '#', icon: FaNodeJs },
    { href: '#', icon: SiNestjs },
    { href: '#', icon: SiFirebase },
    { href: '#', icon: SiSupabase },
    { href: '#', icon: FaWordpress },
    { href: '#', icon: SiInertia },
    { href: '#', icon: FaLaravel },
    { href: '#', icon: SiDotnet },
    { href: '#', icon: SiGooglecloud },
    { href: '#', icon: FaAws },
    { href: '#', icon: FaDigitalOcean },
    { href: '#', icon: SiNetlify },
    { href: '#', icon: SiVercel },
    { href: '#', icon: FaFly },
    { href: '#', icon: SiRender },
    { href: '#', icon: SiHeroku },
    { href: '#', icon: FaCloudflare },
    { href: '#', icon: SiGoogleanalytics },
    { href: '#', icon: SiGoogletagmanager },
    { href: '#', icon: SiSendgrid },
    { href: '#', icon: FaStripe },
    { href: '#', icon: SiXendit },
    { href: '#', icon: FaDocker },
    { href: '#', icon: SiKubernetes },
    { href: '#', icon: FaJenkins },
    { href: '#', icon: SiRabbitmq },
    { href: '#', icon: SiMysql },
    { href: '#', icon: SiPostgresql },
    { href: '#', icon: SiMongodb },
    { href: '#', icon: SiRedis },
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

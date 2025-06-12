'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { FaGithub, FaImage } from 'react-icons/fa6';
import { TbWorldWww } from 'react-icons/tb';

import { TypographyH2, TypographyInlineCode, TypographySmall } from '@/components/ui/typography';
import { IProject, TProjectType } from '@/types/project';

const ICONS = {
    Web: TbWorldWww,
    GitHub: FaGithub,
    Image: FaImage,
} as const satisfies Record<TProjectType, IconType>;

export default function Project({
    title,
    category,
    type,
    dateCreated,
    href,
    image,
}: Readonly<IProject>) {
    const Icon = ICONS[type];

    return (
        <Link href={href}>
            <article className="relative aspect-square overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    className="size-full object-cover"
                    placeholder="blur"
                />
                <div className="absolute top-5 z-[1] flex w-full items-center justify-between px-5">
                    <TypographyH2>{title}</TypographyH2>
                    <TypographySmall>
                        {dateCreated.toLocaleDateString('en-PH', {
                            month: 'long',
                            year: 'numeric',
                        })}
                    </TypographySmall>
                </div>
                <div className="absolute bottom-5 left-5 z-[1]">
                    <TypographyInlineCode>{category}</TypographyInlineCode>
                </div>
                <div className="absolute right-5 bottom-5 z-[1]">
                    <Icon />
                </div>
            </article>
        </Link>
    );
}

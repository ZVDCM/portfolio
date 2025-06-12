import { StaticImageData } from 'next/image';

export type TProjectCategory =
    | 'Architecture and Design'
    | 'Frontend'
    | 'Backend'
    | 'Full Stack'
    | 'DevOps'
    | 'AI';

export type TProjectType = 'GitHub' | 'Web' | 'Image';

export interface IProject {
    href: string;
    image: StaticImageData;
    type: TProjectType;
    category: TProjectCategory;
    title: string;
    dateCreated: Date;
}

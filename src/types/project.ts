import { StaticImageData } from 'next/image';

type TProjectCategory =
    | 'Architecture and Design'
    | 'Front end'
    | 'Back end'
    | 'Full Stack'
    | 'DevOps'
    | 'AI';

type TProjectType = 'GitHub' | 'App' | 'Image';

export interface IProject {
    href: string;
    image: StaticImageData;
    type: TProjectType;
    category: TProjectCategory;
    title: string;
    description: string;
    dateCreated: Date;
}

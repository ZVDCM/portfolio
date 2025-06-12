import { IconNode } from 'lucide-react';
import { IconType } from 'react-icons';

interface ILinkBase {
    href: string;
}

export interface ILinkWithLabel extends ILinkBase {
    label: string;
}

export interface ILinkWithIcon extends ILinkBase {
    icon: IconNode | IconType;
}

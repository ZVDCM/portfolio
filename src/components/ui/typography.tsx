'use client';

import { cn } from '@/lib/utils/cn';

export function TypographyH1({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'h1'>>) {
    return (
        <h1
            className={cn(
                'scroll-m-20 text-4xl font-extrabold tracking-tight text-balance',
                className,
            )}
            {...rest}
        >
            {children}
        </h1>
    );
}

export function TypographyH2({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'h2'>>) {
    return (
        <h2
            className={cn(
                'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
                className,
            )}
            {...rest}
        >
            {children}
        </h2>
    );
}

export function TypographyP({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'p'>>) {
    return (
        <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)} {...rest}>
            {children}
        </p>
    );
}

export function TypographySmall({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'small'>>) {
    return (
        <small className={cn('text-sm leading-none font-medium', className)} {...rest}>
            {children}
        </small>
    );
}

export function TypographyInlineCode({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'code'>>) {
    return (
        <code
            className={cn(
                'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                className,
            )}
            {...rest}
        >
            {children}
        </code>
    );
}

export function TypographyMuted({
    className,
    children,
    ...rest
}: Readonly<React.PropsWithChildren & React.ComponentProps<'p'>>) {
    return (
        <p className={cn('text-muted-foreground text-sm', className)} {...rest}>
            {children}
        </p>
    );
}

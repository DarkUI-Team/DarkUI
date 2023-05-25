// export type DynamicTag<T extends keyof JSX.IntrinsicElements> = {
//   tag: T;
// } & JSX.IntrinsicElements[T];

import { ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react';

export type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto';
export type colors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type variant = 'primary' | 'flat' | 'ghost' | 'text';
export type border = 'squared' | 'pilled' | 'rounded' | 'none';
export type shape = 'circle' | 'square';

export type DynamicTag<T extends ElementType> = PropsWithChildren<{ tag?: T } & ComponentPropsWithoutRef<T>>;

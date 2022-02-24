import { ElementType } from 'react';

export interface TypographyVariants {
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'caption'
    | 'subtitle'
    | 'body'
    | 'underline';
  as?: ElementType;
}

export interface TypographyProps extends TypographyVariants {
  children?: any;
  className?: string;
}

export type StyledTypographyProps = TypographyVariants;

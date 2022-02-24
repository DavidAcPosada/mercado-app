import styled from 'styled-components/macro';
import tw from 'twin.macro';

import { TypographyProps } from './Typography.interface';

const typographyVariants = {
  h1: tw`text-6xl font-bold font-head`,
  h2: tw`text-5xl font-bold font-head`,
  h3: tw`text-4xl font-bold leading-tight font-head`,
  h4: tw`text-3xl font-medium leading-tight font-head`,
  h5: tw`text-2xl font-medium font-head`,
  h6: tw`text-xl leading-snug font-head`,
  body: tw`text-base`,
  subtitle1: tw`text-lg`,
  subtitle2: tw`text-[14px] font-medium`,
  caption: tw`text-[12px] leading-tight`,
};

export const StyledTypography = styled.p<TypographyProps>`
  ${tw`text-base font-normal my-0`}
  ${({ variant }: TypographyProps) =>
    typographyVariants[variant as keyof typeof typographyVariants] ||
    typographyVariants['body']}
`;

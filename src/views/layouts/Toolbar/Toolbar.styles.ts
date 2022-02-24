import styled from 'styled-components/macro';
import tw from 'twin.macro';
import { Typography } from 'views/components';

export const StyledWrapper = styled.main`
  ${tw`w-full pt-[80px]`}
`;

export const StyledAppbar = styled.div`
  ${tw`w-full h-[80px] bg-white fixed top-0 z-10`}
  box-shadow: 0 5px 16px rgba(0, 0, 0, .05);
`;

export const StyledToolbar = styled.div`
  ${tw`container mx-auto flex justify-between items-center h-full px-4`}
`;

export const StyledBrandImage = styled.img`
  ${tw`w-[200px]`}
`;

export const StyledTotalWrapper = styled.div`
  ${tw`h-[48px] flex items-center`}
`;

export const StyledDivider = styled.span`
  ${tw`h-5/6 w-[1px] bg-gray-300 block mx-3`}
`;

export const StyledSummaryWrapper = styled.div`
  ${tw`text-right`}
`;

export const StyledTypography = styled(Typography)`
  ${tw`text-black font-semibold`}
`;

export const StyledSummary = styled(Typography)`
  ${tw`text-primary text-[20px] font-medium`}
`;

export const StyledFooter = styled.footer`
  ${tw`w-full bg-black text-white font-head font-medium text-[18px] text-right py-3`}
`;

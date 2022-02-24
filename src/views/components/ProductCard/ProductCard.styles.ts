import styled from 'styled-components/macro';
import tw from 'twin.macro';

import { Card, Chip, Typography } from 'views/components';

export const StyledCard = styled(Card)`
  ${tw`p-6 relative w-full max-w-[285px] mx-auto flex flex-col justify-between`}
`;

export const StyledSpecialPrice = styled.div`
  ${tw`bg-complementary px-4 py-1 font-medium text-white text-[10px] absolute left-[50%] -top-2 rounded-full shadow-[0 2px 4px rgba(242, 75, 106, 0.49)]`}
  transform: translateX(-50%);
`;

export const StyledImage = styled.div`
  ${tw`w-full h-full overflow-hidden rounded-[24px]`}
  & img {
    ${tw`h-full mx-auto`}
  }
`;

export const StyledImageWrapper = styled.div`
  ${tw`relative rounded-[24px] w-full h-[220px] shadow-[0 3px 6px rgba(0, 0, 0, 0.16)]`}
`;

export const StyledChip = styled(Chip)`
  ${tw`absolute bottom-[-13px] right-[20px]`}
`;

export const StyledOriginalPrice = styled.div`
  ${tw`text-[11px] text-white relative mr-2`}
  &::before {
    content: ' ';
    ${tw`h-[1px] w-full absolute left-0 top-[calc(50% - 1px)] bg-white`}
  }
`;

export const StyledTextWrapper = styled.div`
  ${tw`text-center py-6 pb-5`}
`;

export const StyledTitle = styled(Typography)`
  ${tw`font-head font-medium text-[20px] leading-tight`}
`;

export const StyledPum = styled(Typography)`
  ${tw`font-main font-normal text-[14px] text-[#A4A4A4]`}
`;

export const StyledQuantityWrapper = styled.div`
  ${tw`w-full h-[48px] rounded-full bg-[#F2F2F2] shadow-[inset 0 3px 6px rgba(0, 0, 0, 0.16)] text-[28px] font-head font-medium flex items-center justify-between text-gray-700`}
`;

export const StyledQuantityButton = styled.button`
  ${tw`h-full rounded-full w-[48px] bg-secondary shadow-secondary text-white flex items-center justify-center`}
`;

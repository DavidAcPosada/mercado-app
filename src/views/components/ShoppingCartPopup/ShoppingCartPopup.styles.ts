import styled from 'styled-components/macro';
import tw from 'twin.macro';

import { Typography, Button } from 'views/components';

export const StyledTitle = styled(Typography)`
  ${tw`font-head font-bold text-black relative mb-2`}
  &:before {
    content: ' ';
    ${tw`absolute h-[2px] w-[30px] bg-secondary -bottom-1`}
  }
`;

export const StyledEmptyText = styled(Typography)`
  ${tw`text-center text-gray-700 font-main text-lg mt-2`}
`;

export const StyledEmptyWrapper = styled.div`
  ${tw`text-gray-700 flex items-center justify-center flex-col my-8`}
`;

export const StyledProductCard = styled.div`
  ${tw`w-full p-3 transition-all rounded-xl flex items-center gap-2 hover:shadow-md `}
`;

export const StyledProductImageWrapper = styled.div`
  ${tw`rounded-xl shadow-md w-[60px] h-[60px]`}
`;

export const StyledProductImage = styled.img`
  ${tw`h-full mx-auto`}
`;

export const StyledProductTitle = styled(Typography)`
  ${tw`font-bold`}
`;

export const StyledControlsWrapper = styled.div`
  ${tw`w-full flex justify-between items-center mt-2`}
`;

export const StyledPriceWrapper = styled.span`
  ${tw`font-bold text-lg text-primary`}
`;

export const StyledButtonsWrapper = styled.div`
  ${tw`h-[25px] rounded-full bg-[#F2F2F2] shadow-[inset 0 3px 6px rgba(0, 0, 0, 0.16)] font-medium items-center text-gray-700 text-sm`}
  & span {
    ${tw`mx-2`}
  }
`;

export const StyledButtonControl = styled.button<{ complementary?: boolean }>`
  ${tw`w-[25px] h-[25px] rounded-full bg-secondary shadow-secondary text-white`}
  ${({ complementary }) =>
    complementary && tw`bg-complementary shadow-complementary`}
  & svg {
    ${tw`mx-auto`}
  }
`;

export const StyledButton = styled(Button)`
  ${tw`mt-5`}
`;

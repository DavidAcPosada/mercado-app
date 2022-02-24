import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`w-full h-[48px] bg-tercery shadow-tercery rounded-full text-white font-head font-medium flex items-center p-2`}
  & span {
    ${tw`w-full block text-center`}
  }
`;

export const StyledIconWrapper = styled.div`
  ${tw`w-[33px] h-[33px] min-w-[33px] bg-white text-tercery rounded-full flex items-center justify-center`}
`;

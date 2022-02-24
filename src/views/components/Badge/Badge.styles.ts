import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const StyledWrapper = styled.div`
  ${tw`relative`}
`;

export const StyledBadge = styled.div`
  ${tw`absolute -top-2 -right-2 rounded-full w-[20px] h-[20px] bg-complementary text-white shadow-complementary flex items-center justify-center text-[12px]`}
`;

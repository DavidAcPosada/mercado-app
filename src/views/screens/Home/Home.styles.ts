import styled from 'styled-components/macro';
import tw from 'twin.macro';

import { Typography } from 'views/components';

export const StyledWrapper = styled.section`
  ${tw`py-[40px] max-w-[1364px] mx-auto min-h-screen`}
`;

export const StyledCardsWrapper = styled.div`
  ${tw`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7`}
`;

export const StyledTitle = styled(Typography)`
  ${tw`text-[48px] font-head font-medium text-gray-700 mb-[40px]`}
`;

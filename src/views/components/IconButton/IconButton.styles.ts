import styled from 'styled-components/macro';
import tw from 'twin.macro';

export const StyledButton = styled.button`
  ${tw`
    min-w-[48px] min-h-[48px] flex items-center justify-center border-2 border-gray-700 text-gray-700 text-xl rounded-[13px] transition-all
    hover:(border-primary text-primary cursor-pointer bg-[rgba(242, 136, 75, 0.15)])  
    active:(border-[#D57B47] text-[#D57B47] bg-[rgba(213, 123, 71, 0.15)])
  `}
`;

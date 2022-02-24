import { FC } from 'react';

import { StyledWrapper } from './Chip.styles';

const Chip: FC = ({ children, ...props }) => {
  return <StyledWrapper {...props}>{children}</StyledWrapper>;
};

export default Chip;

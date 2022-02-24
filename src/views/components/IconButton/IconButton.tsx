import { FC } from 'react';

import { StyledButton } from './IconButton.styles';

const IconButton: FC = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default IconButton;

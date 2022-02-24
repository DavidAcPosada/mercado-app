import { ButtonHTMLAttributes, FC } from 'react';

import { StyledButton } from './IconButton.styles';

const IconButton: FC<ButtonHTMLAttributes<any>> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default IconButton;

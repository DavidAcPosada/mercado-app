import { FC } from 'react';

import { ButtonProps } from './Button.interface';
import { StyledButton, StyledIconWrapper } from './Button.styles';

const Button: FC<ButtonProps> = ({ children, icon, ...props }) => {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
      {icon && <StyledIconWrapper>{icon}</StyledIconWrapper>}
    </StyledButton>
  );
};

export default Button;

import { FC } from 'react';

import { StyledBadge, StyledWrapper } from './Badge.styles';

const Badge: FC<{ value?: string | number }> = ({ value, children }) => {
  return (
    <StyledWrapper>
      <StyledBadge>{value}</StyledBadge>
      {children}
    </StyledWrapper>
  );
};

export default Badge;

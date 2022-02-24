import { FC } from 'react';

import { StyledCard } from './Card.styles';

const Card: FC = ({ children, ...props }) => {
  return <StyledCard {...props}>{children}</StyledCard>;
};

export default Card;

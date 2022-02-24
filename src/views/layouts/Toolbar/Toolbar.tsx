import { FiShoppingCart } from 'react-icons/fi';
import { FC } from 'react';

import useViews from 'views';

import Logo from 'assets/img/logo.png';

import {
  StyledAppbar,
  StyledToolbar,
  StyledWrapper,
  StyledBrandImage,
  StyledTotalWrapper,
  StyledDivider,
  StyledSummaryWrapper,
  StyledTypography,
  StyledSummary,
} from './Toolbar.styles';

const Toolbar: FC = ({ children }) => {
  const { useComponents } = useViews();
  const { IconButton } = useComponents();

  return (
    <StyledWrapper>
      <StyledAppbar>
        <StyledToolbar>
          {/* Brand image */}
          <StyledBrandImage src={Logo} alt='Brand' />

          {/* Shopping cart summary */}
          <StyledTotalWrapper>
            <StyledSummaryWrapper>
              <StyledTypography>Total</StyledTypography>
              <StyledSummary>
                <span className='mr-1'>$</span>
                {Intl.NumberFormat('de', {
                  minimumFractionDigits: 2,
                }).format(0)}
              </StyledSummary>
            </StyledSummaryWrapper>
            <StyledDivider />
            <IconButton>
              <FiShoppingCart />
            </IconButton>
          </StyledTotalWrapper>
        </StyledToolbar>
      </StyledAppbar>
      {children}
    </StyledWrapper>
  );
};

export default Toolbar;

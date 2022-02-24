import { FiShoppingCart } from 'react-icons/fi';
import { FC } from 'react';

import useControllers from 'controllers';
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
  StyledFooter,
} from './Toolbar.styles';

const Toolbar: FC = ({ children }) => {
  const { useComponents } = useViews();
  const { IconButton, Badge } = useComponents();

  const { useGeneralHooks } = useControllers();
  const { useShoppingCartController } = useGeneralHooks();
  const { shoppingCart, summary } = useShoppingCartController();

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
                }).format(summary)}
              </StyledSummary>
            </StyledSummaryWrapper>
            <StyledDivider />
            <Badge value={shoppingCart.length}>
              <IconButton>
                <FiShoppingCart />
              </IconButton>
            </Badge>
          </StyledTotalWrapper>
        </StyledToolbar>
      </StyledAppbar>
      {children}
      <StyledFooter>
        <div className='container mx-auto'>Hecho por David Acevedo</div>
      </StyledFooter>
    </StyledWrapper>
  );
};

export default Toolbar;

import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
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
  const { IconButton, Badge, ShoppingCartPopup } = useComponents();

  const { useGeneralHooks, useComponentsHooks } = useControllers();
  const { useShoppingCartController } = useGeneralHooks();
  const { summary, counting } = useShoppingCartController();

  const { useLayoutsControllers } = useComponentsHooks();
  const { useToolbarLayoutController } = useLayoutsControllers();
  const { anchorEl, handleCloseMenu, handleOpenMenu } =
    useToolbarLayoutController();

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

            {/* Shopping Cart button */}
            <Badge value={counting}>
              <IconButton onClick={handleOpenMenu}>
                {counting > 0 ? <MdShoppingCart /> : <MdOutlineShoppingCart />}
              </IconButton>
            </Badge>
            <ShoppingCartPopup
              open={!!anchorEl}
              anchorEl={anchorEl}
              onClose={handleCloseMenu}
            />
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

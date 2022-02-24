import { FiXCircle, FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import { Menu } from '@mui/material';
import { FC } from 'react';

import useControllers from 'controllers';
import useViews from 'views';

import { ShoppingCartPopupProps } from './ShoppingCartPopup.interface';

import {
  StyledTitle,
  StyledProductCard,
  StyledEmptyText,
  StyledEmptyWrapper,
  StyledProductImage,
  StyledProductTitle,
  StyledControlsWrapper,
  StyledPriceWrapper,
  StyledButtonControl,
  StyledButtonsWrapper,
  StyledButton,
  StyledProductImageWrapper,
} from './ShoppingCartPopup.styles';

const ShoppingCartPopup: FC<ShoppingCartPopupProps> = ({
  open,
  anchorEl,
  onClose,
}) => {
  const { useGeneralHooks } = useControllers();
  const { useShoppingCartController } = useGeneralHooks();
  const {
    handleAddProduct,
    handleRemoveProduct,
    shoppingCart,
    handleDeleteShoppingCart,
  } = useShoppingCartController();

  const { useComponents } = useViews();
  const { Price } = useComponents();

  return (
    <Menu
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.16))',
          mt: 1.5,
          width: 400,
          borderRadius: 4,
          p: 2,
          pt: 0.5,
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      <StyledTitle>Carrito de compras</StyledTitle>
      {shoppingCart.map((value) => (
        <StyledProductCard key={value.product.id}>
          <StyledProductImageWrapper>
            <StyledProductImage
              src={value.product.image_small_url}
              alt='Product image'
            />
          </StyledProductImageWrapper>
          <div className='w-full'>
            <StyledProductTitle variant='caption'>
              {value.product.name}
            </StyledProductTitle>
            <StyledControlsWrapper>
              <StyledPriceWrapper>
                <Price
                  value={value.product.special_price ?? value.product.price}
                />
              </StyledPriceWrapper>
              <StyledButtonsWrapper>
                <StyledButtonControl
                  onClick={handleRemoveProduct(value.product)}
                  complementary={value.quantity === 1}
                >
                  {value.quantity > 1 ? <FiMinus /> : <FiTrash />}
                </StyledButtonControl>
                <span>{value.quantity}</span>
                <StyledButtonControl onClick={handleAddProduct(value.product)}>
                  <FiPlus />
                </StyledButtonControl>
              </StyledButtonsWrapper>
            </StyledControlsWrapper>
          </div>
        </StyledProductCard>
      ))}
      {!shoppingCart.length && (
        <StyledEmptyWrapper>
          <FiXCircle style={{ fontSize: 40 }} />
          <StyledEmptyText>El carrito esta vacío</StyledEmptyText>
        </StyledEmptyWrapper>
      )}
      <StyledButton onClick={handleDeleteShoppingCart}>
        Vaciar carrito
      </StyledButton>
    </Menu>
  );
};

export default ShoppingCartPopup;

import { MdOutlineShoppingCart } from 'react-icons/md';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FC } from 'react';

import useControllers from 'controllers';
import useViews from 'views';

import { ProductCardProps } from './ProductCard.interface';
import {
  StyledCard,
  StyledImage,
  StyledSpecialPrice,
  StyledChip,
  StyledImageWrapper,
  StyledOriginalPrice,
  StyledTextWrapper,
  StyledTitle,
  StyledPum,
  StyledQuantityWrapper,
  StyledQuantityButton,
} from './ProductCard.styles';

const ProductCard: FC<ProductCardProps> = ({ info }) => {
  const { useComponents } = useViews();
  const { Price, Button } = useComponents();

  const { useGeneralHooks, useComponentsHooks } = useControllers();
  const { useShoppingCartController } = useGeneralHooks();
  const { handleAddProduct, handleRemoveProduct } = useShoppingCartController();

  const { useProductCard } = useComponentsHooks();
  const { quantity } = useProductCard(info.id);

  return (
    <StyledCard>
      {info.special_price && (
        <StyledSpecialPrice>Precio especial</StyledSpecialPrice>
      )}
      <StyledImageWrapper>
        <StyledImage>
          <img src={info.image_medium_url} alt={info.name} />
          <StyledChip>
            {info.special_price && (
              <StyledOriginalPrice>
                <Price value={info.price} />
              </StyledOriginalPrice>
            )}
            <Price value={info.special_price ?? info.price} />
          </StyledChip>
        </StyledImage>
      </StyledImageWrapper>
      <StyledTextWrapper>
        <StyledTitle variant='h3'>{info.name}</StyledTitle>
        <StyledPum as='p'>{info.pum[0]}</StyledPum>
      </StyledTextWrapper>
      <div>
        {quantity > 0 ? (
          <StyledQuantityWrapper>
            <StyledQuantityButton onClick={handleRemoveProduct(info)}>
              <FiMinus />
            </StyledQuantityButton>
            {quantity}
            <StyledQuantityButton onClick={handleAddProduct(info)}>
              <FiPlus />
            </StyledQuantityButton>
          </StyledQuantityWrapper>
        ) : (
          <Button
            icon={<MdOutlineShoppingCart />}
            onClick={handleAddProduct(info)}
          >
            Agregar al carrito
          </Button>
        )}
      </div>
    </StyledCard>
  );
};

export default ProductCard;

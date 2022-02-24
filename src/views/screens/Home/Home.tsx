import { FiFrown } from 'react-icons/fi';

import useControllers from 'controllers';
import useViews from 'views';

import {
  StyledWrapper,
  StyledCardsWrapper,
  StyledTitle,
  StyledEmptyWrapper,
} from './Home.styles';

const Home = () => {
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { products } = useHome();

  const { useComponents } = useViews();
  const { ProductCard, Typography } = useComponents();

  return (
    <StyledWrapper>
      <StyledTitle as='h3'>Productos destacados</StyledTitle>
      {!products.length && (
        <StyledEmptyWrapper>
          <FiFrown className='text-gray-700' style={{ fontSize: 120 }} />
          <Typography variant='h2' as='h5' className='text-gray-700'>
            No hay productos cargados
          </Typography>
        </StyledEmptyWrapper>
      )}
      <StyledCardsWrapper>
        {products.map((value) => (
          <ProductCard key={value.id} info={value} />
        ))}
      </StyledCardsWrapper>
    </StyledWrapper>
  );
};

export default Home;

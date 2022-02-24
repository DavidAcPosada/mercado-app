import useControllers from 'controllers';
import useViews from 'views';

import { StyledWrapper, StyledCardsWrapper, StyledTitle } from './Home.styles';

const Home = () => {
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { products } = useHome();

  const { useComponents } = useViews();
  const { ProductCard } = useComponents();

  return (
    <StyledWrapper>
      <StyledTitle as='h3'>Productos destacados</StyledTitle>
      <StyledCardsWrapper>
        {products.map((value) => (
          <ProductCard key={value.id} info={value} />
        ))}
      </StyledCardsWrapper>
    </StyledWrapper>
  );
};

export default Home;

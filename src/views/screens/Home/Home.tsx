import useControllers from 'controllers';
import useViews from 'views';

import { StyledWrapper } from './Home.styles';

const Home = () => {
  const { useScreenHooks } = useControllers();
  const { useHome } = useScreenHooks();
  const { products } = useHome();

  const { useComponents } = useViews();
  const { ProductCard } = useComponents();

  return (
    <StyledWrapper>
      {products.map((value) => (
        <ProductCard key={value.id} />
      ))}
    </StyledWrapper>
  );
};

export default Home;

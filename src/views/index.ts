import useComponents from './components';
import useScreens from './screens';
import useLayouts from './layouts';

const useViews = () => {
  return {
    useComponents,
    useScreens,
    useLayouts,
  };
};

export default useViews;

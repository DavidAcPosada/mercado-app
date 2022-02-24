import useScreenHooks from './screenHooks';
import useGeneralHooks from './generalHooks';

const useControllers = () => {
  return { useScreenHooks, useGeneralHooks };
};

export default useControllers;

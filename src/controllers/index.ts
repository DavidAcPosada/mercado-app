import useScreenHooks from './screenHooks';
import useGeneralHooks from './generalHooks';
import useComponentsHooks from './componentHooks';

const useControllers = () => {
  return { useScreenHooks, useGeneralHooks, useComponentsHooks };
};

export default useControllers;

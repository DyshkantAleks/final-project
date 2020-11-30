import {useEffect} from 'react';

export const ScrollOnTop = (dependence) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [dependence]);
  return null;
};
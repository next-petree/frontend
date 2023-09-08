import { useEffect } from 'react';

/**
 * useEffect를 한 번만 실행합니다.
 * @param effect 마운트 될 때 한 번만 실행되는 effect
 */
export const useEffectOnce = (effect: React.EffectCallback) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};

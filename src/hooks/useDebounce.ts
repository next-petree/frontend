import { useState, useEffect } from 'react';

/**
 * 디바운싱을 구현한 커스텀 훅입니다.
 * @param value 디바운싱을 적용할 값
 * @param delay 디바운싱 딜레이
 * @auther 이호연
 */
export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

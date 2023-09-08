import { useEffect } from 'react';

export const useConsolelog = (value: any, ...optionalParams: any) => {
  useEffect(() => {
    console.log(value, ...optionalParams);
  }, [value, optionalParams]);
};

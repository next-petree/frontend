import { useState } from 'react';

const useChangValue = (initialState: any) => {
  const [value, setValue] = useState(initialState);

  const changeValue = (name: string, value: any) => {
    setValue({
      [name]: value,
    });
  };

  return {
    value,
    setValue,
    changeValue,
  };
};

export default useChangValue;

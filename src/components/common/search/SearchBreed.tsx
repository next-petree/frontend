import axios, { AxiosResponse } from 'axios';
import { useDebounce } from 'hooks/useDebounce';
import { forwardRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { BreedSearchType } from '../select/MajorSelect';
import { API_PATHS } from '../../../constants';

const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding-left: 1rem;
  border: 1px solid #f5f5f5;
  border-radius: 1rem;
  background-color: #f5f5f5;
  color: #000000;

  &:focus {
    box-shadow: none;
    outline: 1px solid #4ec1bf;
    background-color: #f5f5f5;
  }
`;

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  setSearchResult: React.Dispatch<React.SetStateAction<BreedSearchType[]>>;
}

export default forwardRef(function SearchBreed(
  { setSearchResult, ...props }: Props,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  const debounced = useDebounce(props.value?.toString() ?? '', 500);

  const searchBreed = async (breed: string) => {
    try {
      const { data } = await axios.get<AxiosResponse<BreedSearchType[]>>(API_PATHS.searchBreed(breed));

      setSearchResult(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!debounced) {
      setSearchResult([]);
      return;
    }
    searchBreed(debounced);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return <Input type="text" ref={ref} {...props} />;
});

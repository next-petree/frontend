import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { BreedSearchType, BreedSelectType } from './MajorSelect';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useEffectOnce } from 'hooks/useEffectOnce';
import SearchBreed from '../search/SearchBreed';
import { styled } from 'styled-components';
import Option from './Option';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

interface IBreedSelect extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  onChange?: (value: BreedSelectType) => void;
}

/**
 * 단일 견종을 검색해서 선택하는 select 컴포넌트
 * onChange 이벤트로 선택된 종을 전달
 * @param onChange: (value: BreedSelectType) => void
 */
export default function BreedSelect({ onChange, ...props }: IBreedSelect) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchResult, setSearchResult] = useState<BreedSearchType[]>([]);
  const [inputText, setInputText] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (Array.isArray(searchResult) && searchResult.length > 0) setIsDropdownOpen(true);
    props.onFocus?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useOutsideClick(containerRef, () => {
    closeDropdown();
  });

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onOptionLi = (breed: BreedSelectType) => {
    onChange?.(breed);
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const markMatchingText = (text: string) => {
    const regex = new RegExp(inputText, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  useEffect(() => {
    if (Array.isArray(searchResult) && searchResult.length > 0) {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [searchResult]);

  useEffectOnce(() => {
    requestAnimationFrame(() => {
      if (isDropdownOpen) {
        focusInput();
      } else {
        closeDropdown();
      }
    });
    return () => {
      closeDropdown();
    };
  });

  return (
    <Container ref={containerRef}>
      <SearchBreed
        ref={inputRef}
        placeholder="원하는 견종을 검색하세요"
        setSearchResult={setSearchResult}
        onFocus={handleFocus}
        onChange={handleChange}
        value={inputText}
      />
      {isDropdownOpen && (
        <Option>
          {Array.isArray(searchResult) &&
            searchResult?.map((breed) => (
              <Option.Item key={breed.id} onClick={() => onOptionLi(breed)}>
                <Option.Text dangerouslySetInnerHTML={{ __html: markMatchingText(breed.name) }} />
              </Option.Item>
            ))}
        </Option>
      )}
    </Container>
  );
}

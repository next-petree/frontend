import { HTMLAttributes, useEffect, useRef, useState } from 'react';
import { styled } from 'styled-components';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { useEffectOnce } from 'hooks/useEffectOnce';
import SearchBreed from '../search/SearchBreed';
import Option from './Option';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

interface BreedSearchProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (values: BreedSelectType[]) => void;
  maxNum?: number;
}

export interface BreedSearchType {
  id: number;
  imgUrl: string;
  name: string;
  size?: string;
}

export type BreedSelectType = Pick<BreedSearchType, 'id' | 'name'>;

/**
 * 강아지의 종 maxNum개까지 선택 가능한 select 컴포넌트
 * onChange 이벤트로 선택된 종을 전달
 * @param onChange: (value: BreedSelectType[]) => void
 */
export default function MajorSelect({ onChange, style, maxNum = 3, ...props }: BreedSearchProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selected, setSelected] = useState<BreedSelectType[]>([]); // MAX 3
  const [searchResult, setSearchResult] = useState<BreedSearchType[]>([]);
  const [inputText, setInputText] = useState('');

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (Array.isArray(searchResult) && searchResult.length > 0) setIsDropdownOpen(true);
  };

  useOutsideClick(containerRef, () => {
    closeDropdown();
  });

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const onOptionLi = (breed: BreedSelectType) => {
    if (isIncluded(breed.id)) {
      setSelected((prev) => prev.filter((e) => e.id !== breed.id));
    } else {
      if (selected.length >= maxNum) return;
      setSelected((prev) => [...prev, { name: breed.name, id: breed.id }]);
    }
    focusInput();
  };

  const isIncluded = (id: number) => {
    return selected.filter((e) => e.id === id)?.length > 0;
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const markMatchingText = (text: string) => {
    const regex = new RegExp(inputText, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
  };

  useEffect(() => {
    onChange?.(selected);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

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
    <Container ref={containerRef} style={style}>
      <SearchBreed
        ref={inputRef}
        placeholder="원하시는 견종을 입력해 주세요."
        setSearchResult={setSearchResult}
        onFocus={handleFocus}
        onChange={(e) => setInputText(e.target.value)}
        value={inputText}
      />
      {isDropdownOpen && (
        <Option>
          {Array.isArray(searchResult) &&
            searchResult?.map((breed) => (
              <Option.Item key={breed.id} onClick={() => onOptionLi(breed)}>
                {isIncluded(breed.id) && <span>V </span>}
                <Option.Text dangerouslySetInnerHTML={{ __html: markMatchingText(breed.name) }} />
                {isIncluded(breed.id) && <button>X</button>}
              </Option.Item>
            ))}
        </Option>
      )}
    </Container>
  );
}

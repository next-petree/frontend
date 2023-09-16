import axios, { AxiosError, AxiosResponse } from 'axios';
import Pagination from 'components/common/board/Pagination';
import Button, { ButtonSize } from 'components/common/button/Button';
import SearchInput from 'components/common/search/SearchInput';
import { API_PATHS } from '../../../constants';
import MypageLayout from 'layout/MypageLayout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Page, Pageable } from 'pageable-response';
import DogsCard from 'components/mypage/breed/DogsCard';
import MypageForm from 'layout/MypageForm';
import SelectOption from 'components/common/select/SelectOption';
import { styled } from 'styled-components';
interface Option {
  value: string;
  label: string;
}
export interface IMyDogs {
  id: number;
  birthDate: string;
  gender: 'MALE' | 'FEMALE';
  imgUrl: string;
  management: string;
  name: string;
  status: 'AVAILABLE' | 'UNDERWAY';
  type: string;
}
const options: Option[] = [
  { value: 'all', label: '전체' },
  { value: 'name', label: '강아지 이름' },
  { value: 'content', label: '견종' },
];
export default function Breed() {
  const [page, setPage] = useState(1);
  const [myDogs, setMyDogs] = useState<IMyDogs[]>([]);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };
  const handleFormSubmit = (keyword: string) => {
    console.log(keyword);
    setSearchTerm(keyword);
    fetchMyDogs(page);
  };
  const fetchMyDogs = async (page: number) => {
    try {
      const { data } = await axios<AxiosResponse<Pageable<IMyDogs[]>>>(API_PATHS.myDogs, {
        params: {
          page: page - 1,
          searchType: selectedOption,
          keyword: searchTerm,
        },
      });
      setPageInfo({
        totalPages: data.data.totalPages,
        first: data.data.first,
        last: data.data.last,
        number: data.data.number,
      });
      setMyDogs(data.data.content);
    } catch (error: unknown) {
      const err = error as AxiosError;
      console.log(err);
    }
  };
  useEffect(() => {
    fetchMyDogs(page);
  }, [page]);

  return (
    <MypageLayout>
      <ReviewContentsBox>
        <MypageForm>
          <MypageLayout.Label>보유견종 관리</MypageLayout.Label>
          <MypageLayout.ContentsHeaders>
            <SelectOption
              size="md"
              placeholder="선택해주세요"
              selectedValue={selectedOption}
              onSelect={handleOptionSelect}
              options={options}
            />
            <SearchInput placeholder="검색어를 입력해주세요." onSearch={handleFormSubmit} />
          </MypageLayout.ContentsHeaders>

          <MypageLayout.Content
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gridTemplateRows: 'repeat(2, 1fr)',
              gap: '3rem',
              marginBottom: '6rem',
            }}
          >
            {myDogs.map((v, i) => (
              <DogsCard
                key={i}
                dogId={v.id}
                name={v.name}
                birthDate={v.birthDate}
                gender={v.gender}
                type={v.type}
                status={v.status}
                management={v.management}
                imgUrl={v.imgUrl}
              />
            ))}
          </MypageLayout.Content>
          <MypageLayout.Footer>
            <Pagination
              style={{
                alignSelf: 'center',
              }}
              currentpage={page}
              totalPage={pageInfo.totalPages}
              onChange={(page) => setPage(page)}
            />
            <Link
              to="/mypage/breed/new"
              style={{
                position: 'absolute',
                right: 0,
              }}
            >
              <Button buttonSize={ButtonSize.MEDIUM} style={{ fontSize: 18 }}>
                추가
              </Button>
            </Link>
          </MypageLayout.Footer>
        </MypageForm>
      </ReviewContentsBox>
    </MypageLayout>
  );
}
const ReviewContentsBox = styled.div`
  max-width: 1080px;
  min-height: 960px;
`;

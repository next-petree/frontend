import Pagination from 'components/common/board/Pagination';
import Button, { ButtonSize } from 'components/common/button/Button';
import SearchInput from 'components/common/search/SearchInput';
import MypageLayout from 'layout/MypageLayout';
import { API_PATHS } from '@constants';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { Page } from 'pageable-response';
import MypageForm from 'layout/MypageForm';
import SelectOption from 'components/common/select/OptionsSelected';
interface Option {
  value: string;
  label: string;
}
const options: Option[] = [
  { value: '전체', label: '전체' },
  { value: '견종', label: '견종' },
  { value: '제목', label: '제목' },
  { value: '강아지 이름', label: '강아지 이름' },
];
const Reviews = () => {
  const [page, setPage] = useState(1);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
  };
  return (
    <MypageLayout>
      <MypageForm>
        <MypageLayout.ContentsHeaders
          style={{
            marginBottom: '4rem',
          }}
        >
          <MypageLayout.Label>분양후기 관리</MypageLayout.Label>
          <SelectOption
            placeholder="선택해주세요"
            selectedValue={selectedOption}
            onSelect={handleOptionSelect}
            options={options}
          />
          <SearchInput placeholder="검색어를 입력해주세요." onSearch={(v) => console.log(v)} />
        </MypageLayout.ContentsHeaders>
        <MypageLayout.Content
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(2, 1fr)',
            gap: '3rem',
            marginBottom: '6rem',
          }}
        ></MypageLayout.Content>
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
            to=""
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
    </MypageLayout>
  );
};

export default Reviews;

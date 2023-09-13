import { useJwtInfo } from 'hooks/useJwtInfo';
import SelectOption from 'components/common/select/SelectOption';
import SearchInput from 'components/common/search/SearchInput';
import MypageLayout from 'layout/MypageLayout';
import MypageForm from 'layout/MypageForm';
import { useState } from 'react';
import Pagination from 'components/common/board/Pagination';
import BreederBoard from './Breeder';
import UserBoard from './User';
import { styled } from 'styled-components';
import { Page } from 'pageable-response';

const AdoptWrapper = styled.section`
  .container {
    min-height: 58rem;
  }
`;

export default function Adopt() {
  const [page, setPage] = useState(0);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });
  const { role } = useJwtInfo();
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
  const searchOptions = [
    { value: 'all', label: '전체' },
    { value: 'breed', label: '견종' },
    { value: 'name', label: '강아지 이름' },
  ];

  const onSearch = async (keyword: string) => {
    // keyword로 찾기 api 쓰겠쥬
  };
  // {role === 'BREEDER' ? <Breeder /> : <User />}
  return (
    <AdoptWrapper>
      <MypageLayout>
        <MypageForm>
          <MypageLayout.Label
            subText={
              role === 'BREEDER'
                ? '분양 승인시, 분양희망자의 연락처가 공개됩니다.'
                : '분양 승인시, 신청내역 > 상세보기를 클릭하면 브리더 정보를 확인할 수 있습니다.'
            }
          >
            분양신청내역
          </MypageLayout.Label>
          <MypageLayout.ContentsHeaders
            style={{
              marginBottom: '26px',
            }}
          >
            <SelectOption
              selectedValue={selectedOption}
              onSelect={setSelectedOption}
              options={searchOptions}
              placeholder="항목을 선택해 주세요"
              size="sm"
            ></SelectOption>
            <SearchInput
              placeholder="내역을 검색하세요"
              onSearch={(value) => {
                onSearch(value);
              }}
            />
          </MypageLayout.ContentsHeaders>
          <MypageLayout.Content>{role === 'BREEDER' ? <BreederBoard /> : <UserBoard />}</MypageLayout.Content>
          <MypageLayout.Footer>
            <Pagination
              style={{
                alignSelf: 'center',
                margin: '64px auto',
              }}
              currentpage={page}
              totalPage={pageInfo.totalPages}
              onChange={(page) => setPage(page)}
            />
          </MypageLayout.Footer>
        </MypageForm>
      </MypageLayout>
    </AdoptWrapper>
  );
}

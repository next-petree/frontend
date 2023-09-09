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
import { styled } from 'styled-components';
import EXEOG from 'assets/images/reviews/dog_01.png';
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
      <ReviewBox>
        <ReviewContentsBox>
          <MypageForm>
            <MypageLayout.Label>분양후기 관리</MypageLayout.Label>
            <MypageLayout.ContentsHeaders
              style={{
                marginBottom: '4rem',
              }}
            >
              <SelectOption
                size="md"
                placeholder="선택해주세요"
                selectedValue={selectedOption}
                onSelect={handleOptionSelect}
                options={options}
              />
              <SearchInput placeholder="검색어를 입력해주세요." onSearch={(v) => console.log(v)} />
            </MypageLayout.ContentsHeaders>
            <MypageLayout.Content>
              <ListBox>
                <li>
                  <ListImg src={EXEOG} />
                  <ListContentsBox>
                    <h3 className="titlle">럭키를 분양받아 너무 기쁩니다!</h3>
                    <div className="desc">
                      <div className="name">이름</div> <div>럭키</div>
                    </div>
                    <div className="desc">
                      <div className="name">견종</div> <div>시바견</div>
                    </div>
                    <div className="desc">
                      <div className="name">성별</div> <div>수컷</div>
                    </div>
                  </ListContentsBox>
                </li>
                <li>
                  <ListImg src={EXEOG} />
                  <ListContentsBox>
                    <h3 className="titlle">럭키를 분양받아 너무 기쁩니다!</h3>
                    <div className="desc">
                      <div className="name">이름</div> <div>럭키</div>
                    </div>
                    <div className="desc">
                      <div className="name">견종</div> <div>시바견</div>
                    </div>
                    <div className="desc">
                      <div className="name">성별</div> <div>수컷</div>
                    </div>
                  </ListContentsBox>
                </li>
                <li>
                  <ListImg src={EXEOG} />
                  <ListContentsBox>
                    <h3 className="titlle">럭키를 분양받아 너무 기쁩니다!</h3>
                    <div className="desc">
                      <div className="name">이름</div> <div>럭키</div>
                    </div>
                    <div className="desc">
                      <div className="name">견종</div> <div>시바견</div>
                    </div>
                    <div className="desc">
                      <div className="name">성별</div> <div>수컷</div>
                    </div>
                  </ListContentsBox>
                </li>{' '}
                <li>
                  <ListImg src={EXEOG} />
                  <ListContentsBox>
                    <h3 className="titlle">럭키를 분양받아 너무 기쁩니다!</h3>
                    <div className="desc">
                      <div className="name">이름</div> <div>럭키</div>
                    </div>
                    <div className="desc">
                      <div className="name">견종</div> <div>시바견</div>
                    </div>
                    <div className="desc">
                      <div className="name">성별</div> <div>수컷</div>
                    </div>
                  </ListContentsBox>
                </li>
              </ListBox>
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
        </ReviewContentsBox>
      </ReviewBox>
    </MypageLayout>
  );
};

export default Reviews;

const ReviewBox = styled.div`
  max-width: 1280px;
`;

const ReviewContentsBox = styled.div`
  max-width: 1080px;
  min-height: 960px;
`;

const ListBox = styled.ul`
  display: flex;
  width: 100%;
  flex-direction: column;
  li {
    display: flex;
    padding: 10px 0;
    justify-content: flex-start;
    &:first-of-type {
      padding-top: 0;
    }
  }
`;

const ListImg = styled.img`
  width: 200px;
  height: 120px;
  margin-right: 25px;
`;

const ListContentsBox = styled.div`
  padding: 5px 0;
  font-size: 0;
  box-sizing: border-box;
  color: #333;
  .titlle {
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 140% */
    margin-bottom: 15px;
  }
  .desc {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 125% */
    display: flex;
    & > * {
      margin-bottom: 4px;
    }
    .name {
      width: 38px;
      margin-right: 9px;
    }
  }
`;

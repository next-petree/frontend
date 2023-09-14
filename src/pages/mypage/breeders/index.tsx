import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BreederCard from 'components/breeders/BreederCard';
import { styled } from 'styled-components';
import Layout from 'components/common/Layout';
import Switch from 'components/common/toggle/Switch';
import Board from 'components/common/board/Board';
import Pagination from 'components/common/board/Pagination';
import SearchInput from 'components/common/search/SearchInput';
import type { Page, Pageable } from 'pageable-response';

export interface IBreeder {
  id: number;
  email: string;
  nickname: string;
  phoneNumber: string;
  address: string;
  verified: boolean;
  distance: number;
  types: string[];
  profileImagUrl: string;
}

const Text = styled.p`
  display: flex;
  align-items: center;
  color: #4ec1bf;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.42px;
  margin-left: 15px;
  margin-right: 27px;
`;

const Title = styled.p`
  color: #4ec1bf;
  font-family: Noto Sans KR;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 111.111% */
  letter-spacing: -1.8px;
  margin-bottom: 42px;
`;
export default function Breeders() {
  const SIZE = 8 as const;
  const [page, setPage] = useState(1);
  const [verification, setVerification] = useState(false);
  const [breeders, setBreeders] = useState<IBreeder[]>([]);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });
  const fetchBreeders = async ({ keyword = '', page = 0, verification = true }) => {
    try {
      const { data: res } = await axios.get<AxiosResponse<Pageable<IBreeder[]>>>('/breeders', {
        params: {
          page,
          keyword,
          size: SIZE,
          sort: 'string',
          verification: verification ? 'yes' : '',
        },
      });

      setBreeders(res.data.content);
      setPageInfo({
        totalPages: res.data.totalPages,
        first: res.data.first,
        last: res.data.last,
        number: res.data.number,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async (keyword: string) => {
    fetchBreeders({ keyword, verification });
  };
  const handleSwitchChange = () => {
    setVerification(!verification);
  };

  useEffect(() => {
    fetchBreeders({ page: page - 1, verification });
  }, [page, verification]);

  return (
    <Layout style={{ marginTop: '10rem' }}>
      <Title>브리더 모아보기</Title>
      <div style={{ display: 'flex' }}>
        <Switch checked={verification} onChange={handleSwitchChange} />
        <Text>인증 브리더만 보기</Text>
        <SearchInput placeholder="원하시는 견종을 입력해주세요." onSearch={onSearch} />
      </div>

      {breeders.length ? (
        <Board
          style={{
            marginBottom: '7.25rem',
            marginTop: '5.5rem',
          }}
        >
          {breeders.map((breeder) => (
            <BreederCard key={breeder.id} {...breeder} />
          ))}
        </Board>
      ) : (
        <div>
          <h1>검색 결과가 없습니다.</h1>
        </div>
      )}

      <Pagination
        style={{
          marginBottom: '4.25rem',
        }}
        totalPage={pageInfo.totalPages}
        currentpage={page}
        first={pageInfo.first}
        last={pageInfo.last}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </Layout>
  );
}

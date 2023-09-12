import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import BreederCard from 'components/breeders/BreederCard';
import Layout from 'components/common/Layout';
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

export default function Breeders() {
  const SIZE = 8 as const;
  const [page, setPage] = useState(1);
  const [breeders, setBreeders] = useState<IBreeder[]>([]);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });

  const fetchBreeders = async ({ keyword = '', page = 0 }) => {
    try {
      const { data: res } = await axios.get<AxiosResponse<Pageable<IBreeder[]>>>('/breeders', {
        params: {
          page,
          keyword,
          size: SIZE,
          sort: 'string',
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
    fetchBreeders({ keyword });
  };

  useEffect(() => {
    fetchBreeders({ page: page - 1 });
  }, [page]);

  return (
    <Layout>
      <SearchInput placeholder="원하는 견종을 입력하세요..." onSearch={onSearch} />
      <Board
        style={{
          marginBottom: '7.25rem',
          marginTop: '4rem',
        }}
      >
        {breeders.map((breeder) => (
          <BreederCard key={breeder.id} {...breeder} />
        ))}
      </Board>
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
      {breeders.length === 0 && (
        <div>
          <h1>검색 결과가 없습니다.</h1>
        </div>
      )}
    </Layout>
  );
}

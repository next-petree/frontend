/**
 * @author 임유정
 * @description 강아지 모아보기 메인
 */

import axios, { AxiosResponse } from 'axios';
import Layout from 'components/common/Layout';
import Board from 'components/common/board/Board';
import Pagination from 'components/common/board/Pagination';
import SearchInput from 'components/common/search/SearchInput';
import { useState, useEffect, FC } from 'react';
import { Page, Pageable } from 'pageable-response';
import DogCard from './DogCard';
import { E_Dog_Status } from './constatns';

export interface IDog {
  id: number;
  name: string;
  type: string;
  gender: 'MALE' | 'FEMALE';
  birthDate: string;
  imgUrl: string;
  status: E_Dog_Status;
  breederNickName: string;
  isBreederVerified: boolean;
}

const Dogs: FC = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [pageInfo, setPageInfo] = useState<Page>({
    totalPages: 0,
    first: false,
    last: false,
    number: 0,
  });

  useEffect(() => {
    fetchDogs({ page: page - 1 });
  }, [page]);

  const fetchDogs = async ({ keyword = '', page = 0 }) => {
    try {
      const {
        data: {
          data: { content, totalPages, first, last, number },
        },
      } = await axios.get<AxiosResponse<Pageable<IDog[]>>>('/dogs', {
        params: {
          page,
          keyword,
        },
      });

      setDogs(content);
      setPageInfo({
        totalPages: totalPages,
        first: first,
        last: last,
        number: number,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onSearch = async (keyword: string) => {
    setPage(1); // reset pagination
    fetchDogs({ keyword });
  };

  return (
    <Layout
      style={{
        marginTop: '10rem',
      }}
    >
      <SearchInput placeholder="원하시는 견종을 입력해주세요" onSearch={onSearch} />
      <Board
        style={{
          marginBottom: '7.25rem',
          marginTop: '4rem',
        }}
      >
        {dogs.map((dog: IDog) => (
          <DogCard key={dog.id} {...dog} />
        ))}
      </Board>

      {dogs.length ? (
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
      ) : (
        <div>
          <h1>검색 결과가 없습니다.</h1>
        </div>
      )}
    </Layout>
  );
};

export default Dogs;

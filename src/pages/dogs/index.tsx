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
import { E_Dog_Gender, E_Dog_Status } from './constatns';
import Detail from './Detail';
import { styled } from 'styled-components';

export interface IDog {
  id: number;
  name: string;
  type: string;
  gender: E_Dog_Gender;
  birthDate: string;
  imgUrl: string;
  status: E_Dog_Status;
  breederNickName: string;
  isBreederVerified: boolean;
}

export interface DogDetailProp extends IDog {
  imagesUrl: Array<string>;
  management: string;
}

const Dogs: FC = () => {
  const [dogs, setDogs] = useState<any>([]);
  const [selectedDogId, setSelectedDogId] = useState<number | undefined>();
  const [selectedDogInfo, setSelectedDogInfo] = useState<DogDetailProp | undefined>();
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

  const handleDetail = async (id: number) => {
    setSelectedDogId(id);
    try {
      const {
        data: { data },
      } = await axios.get(`dogs/${id}`);
      setSelectedDogInfo(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <SearchInput placeholder="원하시는 견종을 입력해주세요" onSearch={onSearch} style={{ marginTop: 175 }} />
      <Board
        style={{
          marginBottom: '7.25rem',
          marginTop: '4rem',
        }}
      >
        {dogs.map((dog: IDog) => (
          <DogCard key={dog.id} {...dog} onClick={() => handleDetail(dog.id)} />
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
      {selectedDogId && (
        <Mask style={{ display: `${selectedDogId ? 'block' : 'none'}` }} onClick={() => setSelectedDogId(undefined)} />
      )}
      {selectedDogId && <Detail info={selectedDogInfo} />}
    </Layout>
  );
};

export default Dogs;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #5a5a5a40;
`;

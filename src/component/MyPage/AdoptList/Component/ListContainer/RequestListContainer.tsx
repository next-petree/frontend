import { useState, useMemo, useEffect } from 'react';
import { styled } from 'styled-components';
import { TitleWrap, Title, SubTitle, PageNationWrap } from './RequestListStyle';
import BreederTableComp from '../TableComponent/BreederTable/BreederTableComp';
import AdopterTableComp from '../TableComponent/AdopterTable/AdopterTableComp';
import SearchComp from './SearchComp/SearchComp';
import { get } from '../../../../../api/api';

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
`;
type BreederColumn = {
  Header: string;
  accessor: keyof BreederdataType;
};
type BreederdataType = {
  name: string;
  breed: string;
  bday: string;
  state: string;
};
type AdopterColumn = {
  Header: string;
  accessor: keyof AdopterdataType;
};
type AdopterdataType = {
  breeder: string;
  bday: string;
  breed: string;
  state: string;
  breakdown: () => void;
};

const RequestListContainer = () => {
  // 브리더 가데이터!!!!!!!!!!!!!!!!!!
  const BreederheaderData: BreederColumn[] = [
    { accessor: 'name', Header: '분양희망자' },
    { accessor: 'breed', Header: '강아지(견종명)' },
    { accessor: 'bday', Header: '출생일' },
    { accessor: 'state', Header: '분양상태' },
  ];
  const BreederHeaders = useMemo(() => BreederheaderData, []);

  // 입양자 가데이터!!!!!!!!!!!!!!!!!
  const AdopterheaderData: AdopterColumn[] = [
    { accessor: 'breeder', Header: '브리더' },
    { accessor: 'breed', Header: '강아지(견종명)' },
    { accessor: 'bday', Header: '출생일' },
    { accessor: 'state', Header: '분양상태' },
    { accessor: 'breakdown', Header: '신청내역' }, // 추가
  ];
  const AdopterHeaders = useMemo(() => AdopterheaderData, []);
  const BreederItems = useMemo(
    () => [
      {
        name: '수현',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양승인',
      },
      {
        name: '케이틀린',
        breed: '말파이트(돌덩이)',
        bday: '2013-05-29',
        state: '분양거절',
      },
      {
        name: '룰루',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '미승인',
      },
      {
        name: '욱종',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양거절',
      },
      {
        name: '종욱',
        breed: '아리(구미호)',
        bday: '2013-05-29',
        state: '분양승인',
      },
    ],
    []
  );
  useEffect(() => {
    const getBreederData = async () => {
      try {
        const response = await get<BreederdataType>('/me/matchings?page=2');
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getBreederData();
  }, []);
  const getTableData = (
    breeder: string,
    breed: string,
    bday: string,
    state: string
  ) => {
    return {
      breeder,
      breed,
      bday,
      state,
      breakdown: () => {
        console.log(
          `브리더: ${breeder}, 강아지(견종명): ${breed}, 출생일: ${bday}`
        );
      },
    };
  };

  const AdopterItems = useMemo(
    () => [
      getTableData('페이커', '티원(르블랑)', '2013-01-22', '분양승인'),
      getTableData('케이틀린', '말파이트(돌덩이)', '2013-05-29', '분양거절'),
      getTableData('룰루', '아리(구미호)', '2013-05-29', '미승인'),
    ],
    []
  );

  return (
    <Container>
      {location.pathname === '/mypage/adoptlist/breeder' ? (
        <>
          <TitleWrap>
            <Title>분양신청내역</Title>
            <SubTitle>분양 승인 시, 분양희망자의 연락처가 공개됩니다.</SubTitle>
          </TitleWrap>
          <SearchComp />
          <BreederTableComp
            columns={BreederHeaders}
            data={BreederItems}
          ></BreederTableComp>
          <PageNationWrap>
            <div>
              <button>&lt;</button>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>&gt;</button>
            </div>
          </PageNationWrap>
        </>
      ) : location.pathname === '/mypage/adoptlist/adopter' ? (
        <>
          <TitleWrap>
            <Title>분양신청내역</Title>
            <SubTitle>
              분양 승인시, 신청내역 &gt; 상세보기를 클릭하면{' '}
              <span>브리더 정보</span>를 확인할 수 있습니다.
            </SubTitle>
          </TitleWrap>
          <SearchComp />
          <AdopterTableComp columns={AdopterHeaders} data={AdopterItems} />
        </>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;

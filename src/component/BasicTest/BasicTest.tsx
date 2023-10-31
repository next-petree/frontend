import React from 'react';
import TestComp from './BasicTestComp/TestComp';
import petfoot from '../../assets/images/pets_black_24dp.png';
import petree from '../../assets/images/펫트리.png';
import TestBG from '../../assets/images/TestBG.png';

import {
  Wrapper,
  TitleWrap,
  TestWrapper,
  BGImg,
  TestModalWrap,
  TestTitle,
  MoveBtnWrap,
  PreBtn,
  NextBtn,
} from './BasicTestStyle';

function BasicTest() {
  // 백엔드 연결해서 props로 줘야됨!!!
  return (
    <Wrapper>
      <TestWrapper>
        <TitleWrap>
          <img src={petfoot} />
          <img src={petree}></img>
        </TitleWrap>
        <TestModalWrap>
          <TestTitle>반려견 기초 지식 테스트</TestTitle>
          {/* 백엔드 연결 후 map 함수로 반복문으로 Props 넣어야됨!!*/}
          <TestComp
            TestNum={'01'}
            Question={'이건 테스트 문제다잉'!!!}
            Example={[
              '1 나는 강아지다.',
              '2 나는 고양이다',
              '3 나는 거북이다',
              '4 나는 너구리다',
              '5 나는 라쿤이다',
            ]}
          ></TestComp>
          <MoveBtnWrap>
            <PreBtn>이전</PreBtn>
            <NextBtn>다음</NextBtn>
          </MoveBtnWrap>
        </TestModalWrap>
      </TestWrapper>
      <BGImg src={TestBG} />
    </Wrapper>
  );
}

export default BasicTest;

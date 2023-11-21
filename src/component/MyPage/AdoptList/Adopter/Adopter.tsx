import React from 'react';
import styled from 'styled-components';
import RequestListContainer from '../Component/ListContainer/RequestListContainer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
`;

export default function AdoptListAdopter() {
  return (
    <Wrapper>
      <RequestListContainer />
    </Wrapper>
  );
}

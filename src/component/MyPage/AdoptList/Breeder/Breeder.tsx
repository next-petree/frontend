import React from 'react';
import styled from 'styled-components';
import BreederForm from './BreederForm';
import RequestListContainer from '../RequestListContainer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5vh;
  border: 1px solid black;
`;

export default function AdoptListBreeder() {
  return (
    <Wrapper>
      {/* <BreederForm /> */}
      <RequestListContainer />
    </Wrapper>
  );
}

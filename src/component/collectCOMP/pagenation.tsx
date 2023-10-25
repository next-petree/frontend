import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  border: 1.5px solid #dfe3e8;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  &:hover {
    background-color: #919eab;
    color: #c4cdd5;
    border: none;
  }
`;

export default function Pagenation() {
  return (
    <Container>
      <Btn>
        <svg
          width="9"
          height="13"
          viewBox="0 0 9 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.16016 1.91L3.58016 6.5L8.16016 11.09L6.75016 12.5L0.750156 6.5L6.75016 0.5L8.16016 1.91Z"
            fill="#C4CDD5"
          />
        </svg>
      </Btn>
      <Btn>1</Btn>
      <Btn>2</Btn>
      <Btn>...</Btn>
      <Btn>9</Btn>
      <Btn>10</Btn>
      <Btn>
        <svg
          width="9"
          height="13"
          viewBox="0 0 9 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.839844 1.91L5.41984 6.5L0.839844 11.09L2.24984 12.5L8.24984 6.5L2.24984 0.5L0.839844 1.91Z"
            fill="#C4CDD5"
          />
        </svg>
      </Btn>
    </Container>
  );
}

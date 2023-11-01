import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface IPagenation {
  page: number;
  totalPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  name: string;
}

const Container = styled.div`
  display: flex;
  width: fit-content;
  gap: 8px;
`;

const Btn = styled.button<{ current?: string | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  background: none;
  background-color: ${(props) => (props.current === "page" ? "#4ec1bf" : null)};
  color: ${(props) => (props.current === "page" ? "white" : null)};
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

export default function Pagenation({
  page,
  totalPage,
  setPage,
  name,
}: IPagenation) {
  const [currPage, setCurrPage] = useState<number>(page);
  const navi = useNavigate();
  let firstNum = currPage - (currPage % 5) + 1;
  return (
    <Container>
      <Btn
        onClick={() => {
          setPage(page - 1);
          setCurrPage(page - 2);
          navi(`/${name}/${page-1}`)
        }}
        disabled={page === 1}
      >
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
      {[0, 1, 2, 3, 4].map((i) =>
        firstNum + i <= totalPage ? (
          <Btn
            key={i + 1}
            current={page === firstNum + i ? "page" : null}
            onClick={() => {setPage(firstNum + i); navi(`/${name}/${firstNum + i }`)}}
          >
            {firstNum + i}{" "}
          </Btn>
        ) : (
          <Btn key={i + 1} disabled>
            ...
          </Btn>
        )
      )}
      <Btn
        onClick={() => {
          setPage(page + 1);
          setCurrPage(page);
          navi(`/${name}/${page+1}`)
        }}
        disabled={page === totalPage}
      >
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

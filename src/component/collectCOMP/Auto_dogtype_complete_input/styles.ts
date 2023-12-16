import { styled } from "styled-components";

export const SearchContainer = styled.div`
  width: 400px;
  height: 45px;
  position: relative;
  border: 0;
  margin: 0 auto;
`;

export const Search = styled.input`
  display: flex;
  align-items: center;
  border: none;
  width: 314px;
  height: 48px;
  border-radius: 12px;
  background-color: #f5f5f5;
  padding-left: 2vw;
  font-size: 1.7rem;
  &::placeholder {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 600;
    font-size: 1.7rem;
    color: #939393;
  }
  &:focus {
    outline: none;
  }
`;

export const AutoSearchContainer = styled.div`
  z-index: 3;
  height: fit-content;
  width: 314px;
  padding: 14px 0 14px 14px;
  background-color: #fff;
  position: absolute;
  top: 45px;
  border: 1px solid #edf5f5;
  border-radius: 12px;
`;

export const AutoSearchWrap = styled.ul``;

export const AutoSearchData = styled.li`
  width: 100%;
  list-style: none;
  /* height: 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #5d5d5d;
  z-index: 4;
  letter-spacing: 2px;
  margin-left: -2.5vw;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  position: relative;
`;
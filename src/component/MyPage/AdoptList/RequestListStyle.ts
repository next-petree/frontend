import styled from 'styled-components';

export const TitleWrap = styled.div``;
export const Title = styled.h3`
  font-size: 20px;
  margin: 0;
`;
export const SubTitle = styled.p`
  color: #7a7a7a;
  font-size: 13px;
`;
export const SearchWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 20px;
  padding: 10px 0;
`;
export const DropDown = styled.div`
  font-size: 14px;
  color: #000;
  padding: 10px 8px;
  border-radius: 16px;
  position: relative;
`;
export const Selected = styled.div`
  width: 170px;
  border-radius: 16px;
  border: 1px solid #dddddd;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  color: #939393;
  cursor: pointer;
`;
export const DropDownWrap = styled.div`
  width: 170px;
  box-shadow: 1px 5px 10px 3px #eee;
  padding: 0 15px;
  border-radius: 16px;
  position: absolute;
  background-color: #fff;
  div.sel {
    border-top: 0.5px solid #eee;
    padding: 15px;
  }
`;
export const DisNone = styled.div`
  display: none;
`;

export const Input = styled.input`
  background: #f5f5f5;
  color: #939393;
  border: none;
  border-radius: 16px;
  padding: 0 20px;
  height: 54px;
  font-size: 14px;
`;
export const Button = styled.button`
  background: #4ec1bf;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 0 39px;
  font-size: 14px;
  font-weight: 700;
  height: 54px;
  cursor: pointer;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`;
export const THead = styled.thead`
  width: 100%;
  text-align: center;
  padding: 0;
  background-color: rgba(221, 221, 221, 0.5);
  color: #7a7a7a;
  font-size: 13px;
  font-weight: 600;
`;
export const TBody = styled.tbody`
  width: 100%;
  text-align: center;
  padding: 0;
  color: #9e9e9e;
  font-size: 15px;
  font-weight: 600;
`;
export const Tr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
`;
export const Th = styled.th``;
export const Td = styled.td``;

export const DetailButton = styled.button`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background: #4ec1bf;
  border: none;
  border-radius: 10px;
  padding: 12px 15px;
  cursor: pointer;
`;

import styled from 'styled-components';
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
  padding: 5px 0;
  background-color: rgba(221, 221, 221, 0.5);
  color: #7a7a7a;
  font-size: 14px;
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
  padding: 20px 0;
`;
export const Th = styled.th`
  width: 16%;
`;
export const Td = styled.td`
  width: 16%;
`;

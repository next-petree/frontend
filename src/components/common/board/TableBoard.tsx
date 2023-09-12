import { styled, css } from 'styled-components';

interface TableBoardProps {
  category: Category[];
  children: React.ReactNode;
}

interface Category {
  uid?: string;
  name: string;
}

interface TbodyItemsProps {
  key: string | number;
  isDisabled: boolean;
  children: React.ReactNode;
}

const line = css`
  1px solid #ddd;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
  thead {
    tr {
      border-top: ${line};
      border-bottom: ${line};
      background: rgba(158, 158, 158, 0.1);
      color: #7a7a7a;
      text-align: center;
      font-size: 17px;
      font-style: normal;
      font-weight: 600;
      line-height: 130%;
      th {
        padding: 16px 17px;
        text-align: center;
        vertical-align: middle;
        word-break: break-all;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 22px 10px;
        text-align: center;
        vertical-align: middle;
        color: #9e9e9e;
        text-align: center;
        font-size: 19px;
        font-style: normal;
        font-weight: 600;
        line-height: 130%; /* 24.708px */
        word-break: break-all;
        & + td {
          border-bottom: ${line};
        }
        &.uid {
          color: #9e9e9e;
          font-size: 23px;
          font-style: normal;
          font-weight: 600;
          line-height: 130%;
          border-bottom: ${line};
        }
        button {
          padding: 14px 18px;
          border-radius: 8px;
          background: #4ec1bf;
          color: ${({ theme }) => theme.colors.white};
          text-align: center;
          font-family: ${({ theme }) => theme.fonts.NOTOSANSKR};
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }
        span {
          display: block;
          padding: 14px 0;
        }
      }
      &.disabled {
        background: #f5f5f5;
        td,
        &.uid {
          color: #ccc;
        }
      }
    }
  }
`;

const TableBoard = ({ category, children, ...props }: TableBoardProps) => {
  return (
    <Table {...props}>
      <thead>
        <tr>
          {category?.map((item) => (
            <th key={item.uid} className={item.uid}>
              {item.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};

const TbodyItems = ({ isDisabled, children, ...props }: TbodyItemsProps) => {
  return (
    <tr className={isDisabled ? '' : 'disabled'} {...props}>
      {children}
    </tr>
  );
};

TableBoard.TbodyItems = TbodyItems;

export default TableBoard;

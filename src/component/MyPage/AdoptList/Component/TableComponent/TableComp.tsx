import { useTable } from 'react-table';
import {
  Table,
  THead,
  TBody,
  DetailButton,
  Tr,
  Th,
  Td,
} from './TableCompStyle';

type dataType = {
  name: string;
  breed: string;
  bday: string;
  state: string;
};

type Column = {
  Header: string;
  accessor: keyof dataType;
};

const TableComp = ({
  columns,
  data,
}: {
  columns: Column[];
  data: dataType[];
}) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Table {...getTableProps()}>
      <THead>
        {headerGroups.map((header) => (
          // getHeaderGroupProps를 통해 header 배열을 호출한다
          <Tr {...header.getHeaderGroupProps()}>
            <Th>No</Th>
            {header.headers.map((col) => (
              // getHeaderProps는 각 셀 순서에 맞게 header를 호출한다
              <Th {...col.getHeaderProps()}>{col.render('Header')}</Th>
            ))}
            <Th>신청내역</Th>
          </Tr>
        ))}
      </THead>
      <TBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // getRowProps는 각 row data를 호출해낸다
            <Tr
              {...row.getRowProps()}
              style={
                row.original.state === '분양거절'
                  ? { backgroundColor: '#F5F5F5', color: '#CCCCCC' }
                  : {}
              }
            >
              <Td>{i + 1}</Td>
              {row.cells.map((cell) => (
                // getCellProps는 각 cell data를 호출해낸다
                <Td {...cell.getCellProps()}>{cell.render('Cell')}</Td>
              ))}
              <Td>
                <DetailButton>상세보기</DetailButton>
              </Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default TableComp;

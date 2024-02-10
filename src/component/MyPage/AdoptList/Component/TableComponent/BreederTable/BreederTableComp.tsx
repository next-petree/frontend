import { useTable } from "react-table";
import RowModal from "../../Modal/Breeder/BreederRowModal";
import { Table, THead, TBody, Tr, Th, Td } from "./TableCompStyle";

type dataType = {
  name: string;
  breed: string;
  bday: string;
  state: string;
  id: number;
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
        {headerGroups.map(header => (
          <Tr {...header.getHeaderGroupProps()}>
            <Th>No</Th>
            {header.headers.map(col => (
              <Th {...col.getHeaderProps()}>{col.render("Header")}</Th>
            ))}
            <Th>신청내역</Th>
          </Tr>
        ))}
      </THead>
      <TBody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <Tr
              {...row.getRowProps()}
              style={
                row.original.state === "분양거절"
                  ? { backgroundColor: "#F5F5F5", color: "#CCCCCC" }
                  : {}
              }
            >
              <Td>{i + 1}</Td>
              {row.cells.map(cell => (
                <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
              ))}
              <RowModal matchingId={row.original.id} />
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default TableComp;

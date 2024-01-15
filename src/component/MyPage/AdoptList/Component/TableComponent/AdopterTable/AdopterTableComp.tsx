import { useTable } from "react-table";
import { Table, THead, TBody, Tr, Th, Td } from "./TableCompStyle";
import Button from "../../Button/Button";

type dataType = {
  breeder: string;
  bday: string;
  breed: string;
  state: string;
  breakdown: () => void;
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
                <Td {...cell.getCellProps()}>
                  {cell.column.id === "breakdown" ? (
                    <Button
                      bgcolor="#4EC1BF"
                      buttonwidth="70px;"
                      buttonheight="40px;"
                      onClick={row.original.breakdown}
                    >
                      상세보기
                    </Button>
                  ) : cell.column.id === "state" &&
                    cell.value === "분양승인" ? (
                    <>
                      {cell.render("Cell")}
                      <Button
                        bgcolor="#4EC1BF"
                        buttonwidth="70px;"
                        buttonheight="40px;"
                        onClick={() => {
                          console.log("후기 작서이이잉!!");
                        }}
                      >
                        후기작성
                      </Button>
                    </>
                  ) : (
                    cell.render("Cell")
                  )}
                </Td>
              ))}
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default TableComp;

import { useState } from "react";
import { get } from "../../../../../../api/api";
import { useTable } from "react-table";
import { Table, THead, TBody, Tr, Th, Td } from "./TableCompStyle";
import Button from "../../Button/Button";
import AdopterRowModal from "../../Modal/Adopter/AdopterRowModal";

type dataType = {
  id: number;
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

type ModalDataType = {
  imgUrl: string;
  name: string;
  breedType: string;
  gender: string;
  birthDate: string;
  breederPhoneNumber: string;
  breederAddress: string;
  breederName: string;
};

type ApiResponse = {
  status: string;
  data: ModalDataType;
};

const TableComp = ({
  columns,
  data,
}: {
  columns: Column[];
  data: dataType[];
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ModalDataType | null>(null);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  const fetchAndShowModal = async (matchingId: number) => {
    try {
      const response = await get<ApiResponse>(`/me/matchings/${matchingId}`);
      setModalData(response.data.data);
      console.log(response.data.data);
      setShowModal(true);
    } catch (error) {
      console.error("매칭 상세 조회 중 오류 발생:", error);
    }
  };
  return (
    <>
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
                    {cell.column.id === "breakdown" &&
                    row.original.state !== "분양거절" ? (
                      <Button
                        bgcolor="#4EC1BF"
                        buttonwidth="70px;"
                        buttonheight="40px;"
                        onClick={() => fetchAndShowModal(row.original.id)}
                      >
                        상세보기
                      </Button>
                    ) : cell.column.id === "state" ? (
                      <div>
                        <span>{cell.render("Cell")}</span>
                        {cell.value === "분양승인" && (
                          <div style={{ marginTop: "10px" }}>
                            <Button
                              bgcolor="#4EC1BF"
                              buttonwidth="70px;"
                              buttonheight="40px;"
                              onClick={() => {
                                console.log("후기 작성 데이터:", row.original);
                              }}
                            >
                              후기작성
                            </Button>
                          </div>
                        )}
                      </div>
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
      <AdopterRowModal
        showModal={showModal}
        setShowModal={setShowModal}
        data={modalData}
      />
    </>
  );
};

export default TableComp;

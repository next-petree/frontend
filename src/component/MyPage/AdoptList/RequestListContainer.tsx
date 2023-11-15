import { styled } from 'styled-components';

export const Container = styled.div`
  background-color: white;
  width: 49vw;
  height: fit-content;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.09);
  border-radius: 32px;
  padding: 4vw 3vw 2.5vw;
  z-index: 100;
  border: 1px solid green;
`;

const RequestListContainer = () => {
  return (
    <Container>
      {location.pathname === '/adoptlist/breeder' ? (
        <>
          <div>
            <h3>분양신청내역</h3>
            <p>분양 승인 시, 분양희망자의 연락처가 공개됩니다.</p>
          </div>
          <div>
            <div>검색</div>
            <div>인풋창</div>
            <button>검색</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>분양 희망자</th>
                <th>출생일</th>
                <th>강아지(견종명)</th>
                <th>분양상태</th>
                <th>신청내역</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1-1</th>
                <th>1-2</th>
              </tr>
              <tr>
                <th>2-1</th>
                <th>2-2</th>
              </tr>
            </tbody>
          </table>
        </>
      ) : location.pathname === '/adoptlist/adopter' ? (
        <div>Adopter</div>
      ) : null}
    </Container>
  );
};

export default RequestListContainer;

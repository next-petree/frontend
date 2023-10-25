import styled from "styled-components";

const Card = styled.div`
  padding: 0px;

  width: 240px;
  height: 341px;

  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 24px;
`;

const Container = styled.div`
  width: 240px;
  height: 265px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;
`;

const DescContainer = styled.div`
  min-width: 195px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Desc = styled.div`
  width: 195px;
  display: flex;
  justify-content: space-between;
`;

const DescText = styled.p`
  font-family: Noto Sans KR;
  font-size: 20px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 240px;
  height: 144px;
  position: relative;
  border-radius: 12px;
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.35;
  z-index: 1;
  border-radius: 12px;
`;

const Image = styled.img<{ src: string }>`
  height: 144px;
  top: 0;
  left: 0;
  position: absolute;
  border-radius: 12px;
`;

const Status = styled.p`
  position: absolute;
  z-index: 999;
  margin: 0 auto;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
  width: 60%;
  font-family: Noto Sans KR;
  font-size: 18px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: -0.05em;
  text-align: center;
  color: #ffffff;
`;

const Button = styled.button`
  width: 120px;
  height: 52px;
  padding: 29px, 327px;
  border: none;
  border-radius: 16px;
  gap: 10px;
  background-color: #4ec1bf;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;
  font-family: Noto Sans KR;
  cursor: pointer;
`;

interface IProp {
  src: string;
  name: string;
  species: string;
  DOB: string;
  status?: string;
}

const DogCard = ({ src, name, species, DOB, status }: IProp) => {
  return (
    <Card>
      <Container>
        {status ? (
          <ImageContainer>
            <Gradient></Gradient>
            <Image src={src} />
            <Status>{status}</Status>
          </ImageContainer>
        ) : (
          <ImageContainer>
            <Image src={src} />
          </ImageContainer>
        )}
        {/* <ImageContainer>
          <img
            src={src}
            style={{ width: "100%", height: "100%", borderRadius: "12px" }}
          />
        </ImageContainer> */}
        <DescContainer>
          <Desc>
            <DescText>견종:</DescText>
            <DescText>{species}</DescText>
          </Desc>
          <Desc>
            <DescText>이름:</DescText>
            <DescText>{name}</DescText>
          </Desc>
          <Desc>
            <DescText>출생일:</DescText>
            <DescText>{DOB}</DescText>
          </Desc>
        </DescContainer>
      </Container>
      <Button>상세보기</Button>
    </Card>
  );
};

export default DogCard;

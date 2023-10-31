import { CustomerBadge, BreederBadge, Avatar } from "../../assets/icons";
import styled from "styled-components";

const SvgWrapper = styled.div`
  width: 140px;
  height: 140px;
  opacity: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;
`;

const Container = styled.div`
  width: 140px;
  height: 140px;
  /* background-color: aqua; */
  position: absolute;
  width: 52px;
  height: 52px;
  left: 83px;
  top: 83px;
`;

const BadgeContainer = styled.div`
  position: absolute;
  width: 52px;
  height: 52px;
`;

const BadgeInnerContainer = styled.div`
  position: absolute;
  left: 10%;
  right: 8.33%;
  top: 3.34%;
  bottom: 3.33%;
`;

interface IProps {
  isQualifiedBreeder?: boolean;
  isQualifiedCustomer?: boolean;
}

const CustomAvatar = ({ isQualifiedBreeder, isQualifiedCustomer }: IProps) => {
  if (isQualifiedCustomer) {
    return (
      <SvgWrapper>
        <Avatar borderColor={"#23F39C"} />
        <Container>
          <BadgeContainer>
            <BadgeInnerContainer>
              <CustomerBadge />
            </BadgeInnerContainer>
          </BadgeContainer>
        </Container>
      </SvgWrapper>
    );
  }

  if (isQualifiedBreeder) {
    return (
      <SvgWrapper>
        <Avatar borderColor={"#FF6363"} />
        <Container>
          <BadgeContainer>
            <BadgeInnerContainer>
              <BreederBadge />
            </BadgeInnerContainer>
          </BadgeContainer>
        </Container>
      </SvgWrapper>
    );
  }

  return (
    <SvgWrapper>
      <Avatar />
    </SvgWrapper>
  );
};

export default CustomAvatar;

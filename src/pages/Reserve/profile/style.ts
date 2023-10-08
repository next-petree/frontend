import { styled } from "styled-components";
import MARK_SVG from "assets/images/reserve/level_mark.svg";
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 1248px;
  .wrap {
    display: flex;
    flex-direction: row;
  }
  .agreement {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 57px auto;
    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 350;
      line-height: normal;
      letter-spacing: -0.48px;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  width: 674px;
  margin-right: 44px;
`;
// flex-direction - 주축 방향
// justify-content - 주축
// align-items - 교차축
export const ProfileImg = styled.img`
  display: flex-item;
  width: 251px;
  height: 251px;
  margin-right: 80px;
  border-radius: 10px;
`;
export const ProfileDesc = styled.div`
  display: flex-item;
  width: 343px;
  height: 251px;
`;
export const ProfileTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  line-height: 40px;
  margin-bottom: 10px;
`;
export const ProfileUl = styled.ul`
  display: block;
  width: 343px;
  padding: 27px 0px;
  border: 1px solid #aeaeae;
  border-left-width: 0px;
  border-right-width: 0px;
`;
export const ProfileLi = styled.li`
  display: block;
  width: 343px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
export const Mark = styled.span<{ $level: boolean }>`
  display: block;
  width: 343px;
  height: 27px;
  background: url(${MARK_SVG}) no-repeat left center;
  padding-left: 30px;
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  width: 520px;
`;
export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    margin-left: 20px;
  }
  button:button {
    margin-left: 0px;
  }
`;

export const DetailTitle = styled.h3`
  letter-spacing: 0.6px;
  font-size: 20px;
  height: 35px;
`;
export const DetailContent = styled.p`
  display: flex;
  width: 520px;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 22px;
  border-radius: 16px;
  background: #f5f5f5;
  min-height: 96px;
`;

import {
  AlreadyImg,
  Availtext,
  BoxWrapper,
  Doginfo,
  Img,
  ImgBox,
  LitteBadge,
  Name,
  Nameline,
  Poss,
  Span,
} from "../StylesCollect1/CollectBoxStyled1";
import { DogsContent } from "../../../types/DogsCollectTypes1";

export default function DogyBox({
  name,
  type,
  gender,
  status,
  birthDate,
  imgUrl,
  breederNickName,
  isBreederVerified,
}: DogsContent) {
  return (
    <BoxWrapper>
      <ImgBox>
        {status === "AVAILABLE" ? (
          <Img src={imgUrl} alt="Dog_image" />
        ) : status === "UNDERWAY" ? (
          <>
            <AlreadyImg src={imgUrl} alt="Dog_image" />
            <Availtext>예약 중</Availtext>
          </>
        ) : (
          <>
            <AlreadyImg src={imgUrl} alt="Dog_image" />
            <Availtext>분양 완료</Availtext>
          </>
        )}
      </ImgBox>
      <Nameline>
        <Name>{name}</Name>
      </Nameline>
      <Doginfo>
        <Span>견종 : {type}</Span>
        <Span>
          성별 :{" "}
          {gender === "MALE"
            ? "수컷"
            : gender === "FEMALE"
            ? "암컷"
            : "알 수 없음"}
        </Span>
        <Span>출생일 : {birthDate}</Span>
      </Doginfo>
      <Poss>
        <Span>{breederNickName}님의 보유견종</Span>
        {isBreederVerified ? (
          <LitteBadge>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 33 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M30.9414 25.2668C29.9107 27.9868 28.3515 30.351 26.3066 32.2943C23.9787 34.5066 20.9309 36.2644 17.2472 37.518C17.1263 37.559 17.0002 37.5926 16.8733 37.6174C16.7059 37.6495 16.5363 37.6671 16.3674 37.6693H16.3343C16.1542 37.6693 15.9733 37.6517 15.7938 37.6174C15.667 37.5926 15.5424 37.559 15.4222 37.5188C11.7348 36.2673 8.68251 34.5102 6.3531 32.298C4.30745 30.3546 2.74826 27.9919 1.7183 25.2719C-0.153931 20.3273 -0.0473324 14.8808 0.0382469 10.5031L0.0397483 10.4359C0.0570143 10.0742 0.0682747 9.69504 0.0742803 9.27568C0.105809 7.21688 1.78737 5.51388 3.90283 5.39918C8.31316 5.15954 11.7251 3.75974 14.6408 0.994459L14.6663 0.971811C15.1505 0.539302 15.7601 0.327432 16.3674 0.336199C16.9522 0.344235 17.5355 0.555375 18.0024 0.971811L18.0272 0.994459C20.9429 3.75974 24.3548 5.15954 28.7651 5.39918C30.8806 5.51388 32.5621 7.21688 32.5937 9.27568C32.5997 9.69796 32.6109 10.0771 32.6282 10.4359V10.4643C32.7145 14.8501 32.8204 20.3076 30.9414 25.2668Z"
                fill="#FF6363"
              />
              <path
                d="M25.8939 18.9994C25.8939 24.1186 21.6232 28.2859 16.3676 28.3041H16.3338C11.0624 28.3041 6.77295 24.1295 6.77295 18.9994C6.77295 13.8692 11.0624 9.69531 16.3338 9.69531H16.3676C21.6232 9.71358 25.8939 13.8801 25.8939 18.9994Z"
                fill="white"
              />
              <path
                d="M20.673 17.6597L16.367 21.8504L15.4369 22.7556C15.217 22.9697 14.9287 23.0763 14.6412 23.0763C14.3537 23.0763 14.0646 22.9697 13.8447 22.7556L11.8441 20.8078C11.4042 20.3797 11.4042 19.6871 11.8441 19.259C12.2832 18.8309 12.9957 18.8309 13.4356 19.259L14.6404 20.4316L19.0808 16.1102C19.5207 15.682 20.2331 15.682 20.6723 16.1102C21.1122 16.5383 21.1122 17.2316 20.6723 17.659L20.673 17.6597Z"
                fill="#918181"
              />
            </svg>
          </LitteBadge>
        ) : null}
      </Poss>
    </BoxWrapper>
  );
}


export const dogdetailInfo =
  "온순한 포메라니안입니다. 4개월 정도 되었고 활달하고 강아지 껌을 \n좋아합니다. 장난치는 것을 좋아합니다. 털관리를 자주 해야합니다.";
export const agreementInfo =
  "본인은 분양신청서를 작성함에 있어 브리더가 해당 서류를 열람하도록 동의합니다. \n또한, 법적 문제 발생 시 사전 통보 없이 관련 서류를 경찰 또는 법 집행 당국에 제출할 수 있음을 인지하고 동의합니다.";

import { IMG2, IMG3, IMG4, IMG5 } from "./assets/images";

export const desc =
  "안녕하세요! 강아지를 키우는 것에 있어 진심인 학생입니다. \n새로운 반려견을 분양받으면 먼저 분양을 받은 강아지와 함께 성심을다하여 잘 키우겠습니다.";

export const dogCardData = [
  {
    src: IMG4,
    name: "루카스",
    species: "포메라니안",
    DOB: "2023.05.23",
    status: "분양완료",
  },
  {
    src: IMG5,
    name: "아미",
    species: "골든리트리버",
    DOB: "2022.06.13",
    status: "예약중",
  },
  {
    src: IMG5,
    name: "아미",
    species: "골든리트리버",
    DOB: "2022.06.13",
    status: "분양완료",
  },
  {
    src: IMG4,
    name: "루카스",
    species: "포메라니안",
    DOB: "2023.05.23",
  },
  {
    src: IMG5,
    name: "아미",
    species: "골든리트리버",
    DOB: "2022.06.13",
  },
  {
    src: IMG5,
    name: "아미",
    species: "골든리트리버",
    DOB: "2022.06.13",
  },
];

export const BASE_URL = process.env.REACT_APP_API_URL;
export const BREEDERS_URL = "/api/breeders";
export const DOGS_URL = "/api/dogs";
export const ADOPTER_URL = "/api/adopters";
export const RESERVATION_URL = "/api/me/matchings";

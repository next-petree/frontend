/** 상수 */
export const CONSTANTS = {
  get API_URL() {
    const url = process.env.REACT_APP_API_URL || 'http://3.38.177.118:8080';
    if (!url) {
      throw new Error('API_URL 환경변수가 설정되지 않았습니다.');
    }
    return url;
  },
  /** accessToken 이름 */
  ACCESS_TOKEN: 'petree_atk',
  /** refreshToken 이름 */
  REFRESH_TOKEN: 'petree_rtk',
  /** accessToken 만료 시간 */
  ACCESS_TOKEN_EXPIRE: 60 * 60 * 24 * 7, // 7일
  /** refreshToken 만료 시간 */
  REFRESH_TOKEN_EXPIRE: 60 * 60 * 24 * 30, // 30일
  /** 프로필 이미지 키 */
  PROFILE_IMAGE_URL: 'profile_url',
  /** JWT ROLE */
  ROLE: {
    /** 분양 희망자 */
    ADOPTER: 'ROLE_ADOPTER',
    /** 브리더 */
    BREEDER: 'ROLE_BREEDER',
  },
};

/** 날짜 포맷 */
export const DATE_FORMAT = {
  /** 년-월-일 */
  YMD: 'YYYY-MM-DD',
  /** 년-월-일 시:분 */
  get YMDHM() {
    return `${this.YMD} HH:mm`;
  },
};

/** API 경로 */
export const API_PATHS = {
  /** 로그인 */
  login: '/login',
  /** 회원가입 */
  signup2: '/signup/step-2',
  /** 로그아웃 */
  logout: '/logout',
  /** 이메일 찾기 */
  findEmail: '/auth/find-email',
  /** 이메일 찾기 완료*/
  findEmailComplete: '/auth/find-email-complete',
  /** 비밀번호 찾기 */
  findPassword: '/auth/find-password',
  /** 비밀번호 찾기 완료*/
  findPasswordComplete: '/auth/find-password-complete',
  /** 비밀번호 바꾸기*/
  findPasswordChange: '/auth/find-password-change',
  /** 비밀번호 바꾸기 완료*/
  findPasswordDone: '/auth/find-password-done',
  /** 견종 검색 */
  searchBreed: (keyword?: string) => `/dog-type/search${keyword ? `?keyword=${keyword}` : ''}`,
  /** 보유 견종 다건 조회 */
  myDogs: '/breeder/dogs',
  /** 보유 견종 단건 조회 */
  myDog: (id: number) => `/breeder/dogs/${id}`,
  /** 브리더 단건 조회 */
  breeder: (id: number) => `/breeders/${id}`,
  /** 유저 단건 조회 */
  user: (id: number) => `/adopters/${id}`,
  /** 분양 신청 */
  doMatching: () => `/me/matchings/`,
};

/** 업로드 파일 확장자 */
export const FILE_ACCEPT = {
  /** 이미지 */
  image: 'image/gif, image/jpeg, image/png, image/webp',
};

/** 페이지 목록 */
export const PATHS = {
  /** 루트 페이지 */
  root: '/',
  /** 로그인 페이지 */
  login: '/login',
  /** 회원가입 */
  signup1: '/signup/step-1',
  signup2: '/signup/step-2',
  signup3: '/signup/step-3',
  /** 이메일 찾기 */
  findEmail: '/auth/find-email',
  /** 이메일 찾기 완료*/
  findEmailComplete: '/auth/find-email-complete',
  /** 비밀번호 찾기 */
  findPassword: '/auth/find-password',
  /** 비밀번호 찾기 완료*/
  findPasswordComplete: '/auth/find-password-complete',
  /** 비밀번호 바꾸기*/
  findPasswordChange: '/auth/find-password-change',
  /** 비밀번호 바꾸기 완료*/
  findPasswordDone: '/auth/find-password-done',
  /** 마이페이지 */
  mypage: {
    /**분양 신청 내역 */
    adopt: '/mypage/adopt',
    /**분양 후기 관리 */
    reviews: {
      root: '/mypage/reviews',
      edit: '/mypage/reviews/edit/:id',
    },
    /** 보유견종 관리 */
    breed: {
      /** 보유견종 관리 루트 */
      root: '/mypage/breed',
      /** 보유견종 등록 */
      new: '/mypage/breed/new',
      /** 보유견종 수정 */
      edit: '/mypage/breed/edit/:id',
    },
    /** 프로필 관리 */
    profile: '/mypage/profile',
    /** 회원정보 수정 */
    modify: '/mypage/profile/member-info',
  },
  /** 자격 테스트 */
  certification: {
    /** 자격 테스트 루트 */
    root: '/certification',
    /** 자격 테스트 안내 */
    guide: '/certification/guide',
    /** 자격 테스트 */
    test: {
      /** 자격 테스트 루트 */
      root: '/certification/test',
      /** 자격 테스트 문제 */
      question: '/certification/test/:id',
    },
    /** 자격 테스트 결과 */
    result: '/certification/result',
    /** 자격 테스트 결과 해설 */
    explanation: '/certification/result/explanation',
  },
  /** 브리더 인증 */
  verification: {
    /** 브리더 인증 루트 */
    root: '/verification',
  },
  /** 강아지 모아보기 */
  dogs: {
    /** 강아지 모아보기 루트 */
    root: '/dogs',
    /** 강아지 상세보기 */
    detail: '/dogs/:id',
  },
  /** 브리더 모아보기 */
  breeders: {
    /** 브리더 모아보기 루트 */
    root: '/breeders',
    /** 브리더 상세보기 */
    detail: '/breeders/:id',
  },
  /** 브리더 예약하기 */
  reserve: {
    /** 브리더 모아보기 루트 */
    root: '/reserve/:id',
  },
  /** 유저 보기 */
  users: {
    /** 유저 상세보기 */
    detail: '/user/:id',
  },
};

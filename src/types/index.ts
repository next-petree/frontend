// ************ Components ************
export interface IWBProps {
  width: number;
  height: number;
  top: number;
  left: number;
  children?: React.ReactNode;
} // white box

export interface IDCProps {
  src: string;
  name: string;
  species: string;
  DOB: string;
  status?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
} // dog card

export interface IPBProp {
  children: React.ReactNode;
} // primary button

export interface IDMProps {
  customTop: string;
  customLeft: string;
  dogId: number | undefined;
  onClick: React.MouseEventHandler<HTMLDivElement>;
} // detail modal

export interface ICAProps {
  isQualifiedBreeder?: boolean;
  isQualifiedCustomer?: boolean;
  imgSrc?: string;
} // custom avatar

// ************ Pages ************
export interface ICLProps {
  children: React.ReactNode;
  height: number;
} // custom layout

// 테스트 페이지
export type Choice = {
  id: number;
  choiceText: string;
};

export interface Question {
  id: number;
  questionText: string;
  TestNum: number;
  choices: Choice[];
}

export type TestResponse = {
  status: string;
  data: {
    questions: [
      id: number,
      questionText: string,
      choices: [id: number, choiceText: string]
    ];
  };
};

export type ResultResponse = {
  status: string;
  score: number;
  explanations: [
    { questionId: number; explanationText: string; correctChoiceId: number }
  ];
  passed: boolean;
};

// 로그인 모달
export interface LoginModalProps {
  onLogin: () => void;
  onClose: () => void;
  errorMessage: string;
}

export type LogoutResponse = {
  status: string;
  data: string;
};

// 해답 페이지
export type QuestionType = {
  id: number;
  questionText: string;
  choices: Array<{ id: number; choiceText: string }>;
}[];

export type AnswersType = {
  questionId: number;
  selectedChoiceId: number;
}[];
export type ResultType = {
  explanations: {
    questionId: number;
    explanationText: string;
    correctChoiceId: number;
  }[];
  passed: boolean;
  score: number;
};

// 해답페이지 컴포넌트
export type AnswerProps = {
  id: number;
  num: number;
  questionId: number;
  question: string;
  choices: Array<{ id: number; choiceText: string }>;
  solution: string;
  correctChoiceId: number | undefined;
  selectedChoiceId: number | undefined; // selectedChoiceId 추가
};

//브리더 인증 페이지
export type CertificationResponse = {
  status: string;
  data: {
    message: string;
    certification: string;
    verificationFiles: string;
  };
};

export interface IDog {
  birthDate: string;
  breederNickName: string;
  gender: string;
  id: number;
  imgUrl: string;
  isBreederVerified: boolean;
  name: string;
  status: string;
  type: string;
}

export interface IDMProps {
  dogId: number | undefined;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

declare global {
  interface Window {
    Kakao: any;
  }
}

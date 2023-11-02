export const dogfilters = [
  {
    id: 1,
    name: "브리더 인증 여부",
    value:"verification",
    isLong:false,
    category: [
      {
        str: "전체",
        key: 1,
        value: false,
      },
      {
        str: "인증 O",
        key: 2,
        value: true,
      },
    ],
  },
  {
    id: 2,
    name: "분양 가능 여부",
    value:"isAvailable",
    isLong:true,
    category: [
      {
        str: "전체",
        key: 1,
        value: false,
      },
      {
        str: "분양 가능 강아지",
        key: 2,
        value: true,
      },
    ],
  },
  {
    id: 3,
    name: "성별",
    isLong:false,
    value:"gender",
    category: [
      {
        str: "전체",
        key: 1,
        value: "",
      },
      {
        str: "수컷",
        key: 2,
        value: "MALE",
      },
      {
        str: "암컷",
        key: 3,
        value: "FEMALE",
      },
    ],
  },
  {
    id: 4,
    name: "크기",
    isLong:false,
    value:"size",
    category: [
      {
        str: "전체",
        key: 1,
        value: "",
      },
      {
        str: "초소형",
        key: 2,
        value: "EXTRA_SMALL",
      },
      {
        str: "소형",
        key: 3,
        value: "SMALL",
      },
      {
        str: "중형",
        key: 4,
        value: "MEDIUM",
      },
      {
        str: "대형",
        key: 5,
        value: "LARGE",
      },
      {
        str: "그 외",
        key: 6,
        value: "UNKNOWN"
      }
    ],
  },
];





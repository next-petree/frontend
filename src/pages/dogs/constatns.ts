type List<T> = Array<{
  code: T;
  label: string;
}>;

const parseListToMap = <T>(list: List<keyof T>): Record<keyof T, string> => {
  const result: Record<keyof T, string> = Object.create(null);
  list.forEach(item => (result[item.code] = item.label));
  return result;
};

export enum E_Dog_Status {
  AVAILABLE = 'AVAILABLE',
  UNDERWAY = 'UNDERWAY',
  DONE = 'DONE',
}

const dogStatusList: List<E_Dog_Status> = [
  {
    code: E_Dog_Status.UNDERWAY,
    label: '예약중',
  },
  {
    code: E_Dog_Status.DONE,
    label: '분양완료',
  },
];

export const dogStatusMap = parseListToMap(dogStatusList);

export enum E_Dog_Gender {
  ALL = 'ALL',
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export const dogGenderList : List<E_Dog_Gender> = [
  {
    code: E_Dog_Gender.ALL,
    label: '전체',
  },
  {
    code: E_Dog_Gender.MALE,
    label: '수컷',
  },
  {
    code: E_Dog_Gender.FEMALE,
    label: '암컷',
  }
]

export enum E_is_verified {
  ALL = 'ALL',
  IS_VERIFIED = 'IS_VERIFIED',
}

export enum E_is_available {
  ALL = 'ALL',
  IS_AVAILABLE = 'IS_AVAILABLE',
}

export enum E_dog_size {
  ALL = 'ALL',
  EXTRA_SMALL = 'EXTRA_SMALL',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  UNKNOWN = 'UNKNOWN',
}

export const dogGenderMap = parseListToMap(dogGenderList);
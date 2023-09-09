import { PATHS } from '../../constants';

interface ISidemenuItem {
  name: string;
  path: string;
}

export const adoptmenuItem: ISidemenuItem[] = [
  {
    name: '분양신청내역',
    path: PATHS.mypage.adopt,
  },
  {
    name: '분양후기 관리',
    path: PATHS.mypage.reviews,
  },
  {
    name: '프로필 관리',
    path: PATHS.mypage.profile,
  },
  {
    name: '회원정보 수정',
    path: PATHS.mypage.modify,
  },
];

export const breedmenuItem: ISidemenuItem[] = [
  {
    name: '분양신청내역',
    path: PATHS.mypage.adopt,
  },
  {
    name: '보유견종 관리',
    path: PATHS.mypage.breed.root,
  },
  {
    name: '프로필 관리',
    path: PATHS.mypage.profile,
  },
  {
    name: '회원정보 수정',
    path: PATHS.mypage.modify,
  },
];

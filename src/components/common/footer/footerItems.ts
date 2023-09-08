import { PATHS } from '../../../constants';

interface FooterItem {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
}

export const footerItems: FooterItem[] = [
  {
    title: 'Categories',
    links: [
      {
        name: '인증 테스트',
        path: PATHS.certification.root,
      },
      {
        name: '강아지 모아보기',
        path: PATHS.dogs.root,
      },
      {
        name: '브리더 모아보기',
        path: PATHS.breeders.root,
      },
    ],
  },
  {
    title: 'Pages',
    links: [
      {
        name: 'About Us',
        path: '/about',
      },
      {
        name: 'Contact Us',
        path: '/contact',
      },
    ],
  },
];

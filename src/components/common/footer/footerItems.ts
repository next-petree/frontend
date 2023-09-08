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
        name: '홈',
        path: PATHS.root,
      },
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
        name: 'About',
        path: '/about',
      },
      {
        name: 'Contact',
        path: '/contact',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy',
        path: '/privacy-policy',
      },
      {
        name: 'Terms of Use',
        path: '/terms-of-use',
      },
    ],
  },
];

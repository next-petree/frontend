import AdoptProfile from 'components/mypage/AdoptProfile';
import BreedProfile from 'components/mypage/BreedProfile';
import { useJwtInfo } from 'hooks/useJwtInfo';
import MypageLayout from 'layout/MypageLayout';

export default function Profile() {
  const { role } = useJwtInfo();
  return <MypageLayout>{role === 'BREEDER' ? <BreedProfile /> : <AdoptProfile />}</MypageLayout>;
}

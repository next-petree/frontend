import CustomLayout from '../Layout/CustomLayout';
import WhiteBox from '../../component/WhiteBox/WhiteBox';
import CustomAvatar from '../../component/Avatar/CustomAvatar';
import PrimaryButton from '../../component/Button/PrimaryButton';

import * as S from './styles';
import { IMG2 } from '../../assets/images';
import { desc } from '../../constants';

const CustomerDetails = () => {
  return (
    <CustomLayout height={1148}>
      <S.TopContainer>
        <S.AvatarContainer>
          <CustomAvatar isQualifiedCustomer />
          <S.Name>닉넴은분양자</S.Name>
        </S.AvatarContainer>
        <S.IntroductionContainer>
          <S.Headline textsize={24}>자기소개</S.Headline>
          <S.ButtonGroup>
            <PrimaryButton>#강아지에 진심</PrimaryButton>
            <PrimaryButton>#반려견 기초지식 테스트 통과자</PrimaryButton>
            <PrimaryButton>#반려견은 나의 가족</PrimaryButton>
          </S.ButtonGroup>
          <S.DescContainer>{desc}</S.DescContainer>
        </S.IntroductionContainer>
      </S.TopContainer>
      <S.BottomContainer>
        <S.Headline textsize={28}>주거환경</S.Headline>
        <S.Group>
          <S.GroupItem>
            <S.ImageBox src={IMG2}></S.ImageBox>
            <S.GroupTextContainer>
              <S.GroupText>마당</S.GroupText>
            </S.GroupTextContainer>
          </S.GroupItem>
          <S.GroupItem>
            <S.ImageBox src={IMG2}></S.ImageBox>
            <S.GroupTextContainer>
              <S.GroupText>거실</S.GroupText>
            </S.GroupTextContainer>
          </S.GroupItem>
          <S.GroupItem>
            <S.ImageBox src={IMG2}></S.ImageBox>
            <S.GroupTextContainer>
              <S.GroupText>화장실</S.GroupText>
            </S.GroupTextContainer>
          </S.GroupItem>
        </S.Group>
      </S.BottomContainer>
      <WhiteBox width={1060} height={811} top={279} left={300}></WhiteBox>
    </CustomLayout>
  );
};

export default CustomerDetails;

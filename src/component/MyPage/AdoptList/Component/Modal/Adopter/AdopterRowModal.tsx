import {
  Td,
  DetailButton,
  Modal,
  ModalWrap,
  Title,
  InfoWrap,
  Img,
  DetailInfoWrap,
  DogName,
  BreedDog,
  Gender,
  BDay,
  ContentWrap,
} from './style';
import useModal from '../../../../../Modal/Modal';
import DogImg from '../../../../../../assets/images/AdpotListA.png';
import Button from '../../Button/Button';

const RowModal = ({
  index,
  breed,
  bday,
  breeder,
}: {
  index: number;
  breed: string;
  bday: string;
  breeder: string;
}) => {
  const { isModalVisible, showModal, hideModal } = useModal();

  const dogName = breed.match(/(.+)(?=\()/g)?.[0] || '';
  const typeofdog = breed.match(/(?<=\().+?(?=\))/g)?.[0] || '';

  return (
    <Td>
      <Button
        bgcolor="#4EC1BF"
        buttonwidth="70px;"
        buttonheight="40px;"
        onClick={showModal}
      >
        상세보기
      </Button>
      {/* <DetailButton onClick={showModal}>상세보기</DetailButton> */}
      {isModalVisible && (
        <ModalWrap onClick={hideModal}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <ContentWrap>
              <Title>신청 내역</Title>
              <InfoWrap>
                <Img src={DogImg}></Img>
                <DetailInfoWrap>
                  <DogName>{dogName}</DogName>

                  <BreedDog>견종 : {typeofdog}</BreedDog>
                  <Gender>성별 : 수컷</Gender>
                  <BDay>출생일 : {bday}</BDay>
                  <br />
                  <Gender>브리더 : {breeder}</Gender>
                  <Gender>연락처 : 010-1233-1233</Gender>
                  <Gender>활동지역 : 인천시 남동구 구월동 신천로 112-3</Gender>
                </DetailInfoWrap>
              </InfoWrap>
            </ContentWrap>
            <Button
              bgcolor="#4EC1BF"
              buttonwidth="25vw;"
              buttonheight="40px;"
              onClick={hideModal}
            >
              확인
            </Button>
          </Modal>
        </ModalWrap>
      )}
    </Td>
  );
};

export default RowModal;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import alertList from "../../../utils/swal";

import {
  Container,
  Content,
  TitleArea,
  Title,
  SubTitle,
  InfomationArea,
  CheckInputArea,
  CheckInput,
  CheckInputText,
  ButtonArea,
  CancelButton,
  RemoveAccountButton,
} from "./RemoveAccountContentStyle";

import DropDownButton from "../../../assets/icons/Group 5.png";

const RemoveAccountContent = () => {
  const [checkbox, setCheckbox] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckbox(event.target.checked);
  };
  const navigation = useNavigate();
  const handleRemoveAccountClick = () => {
    if (checkbox) {
      Swal.fire(
        alertList.doubleCheckTitkeMsg(
          "회원탈퇴 안내",
          "펫트리 회원서비스를 탈퇴 하시겠습니까?",
        ),
      ).then(result => {
        if (result.isConfirmed) {
          Swal.fire(alertList.successMessage("회원탈퇴가 완료되었습니다."));
          navigation("/");
        }
      });
    } else {
      Swal.fire(alertList.infoMessage("항목에 동의해주세요."));
    }
  };

  return (
    <Container>
      <Navbar />
      <Content>
        <TitleArea>
          <Title>회원탈퇴</Title>
          <SubTitle>회원탈퇴 안내</SubTitle>
        </TitleArea>
        <InfomationArea>
          <img src={DropDownButton} alt="DropDown button" />
          [회원탈퇴 약관]제11조 (계약 해지)
          <br /> 회원이 서비스 이용 계약을 해지 하고자 할 때는 개인정보수정의
          '회원탈퇴' 메뉴에서 회원탈퇴를 신청하시면 됩니다.
          <br /> 탈퇴를 신청하시면 즉시 탈퇴처리가 완료되며, 탈퇴후 7일 동안은
          회사에 다시 가입하실 수 없습니다.
          <br /> 제12조 (탈퇴 회원의 개인정보 이용) <br />
          1. 회사는 회원정보를 회원이 탈퇴하는 시점으로부터 1년까지 보유할 수
          있습니다.
          <br /> 2. 회사가 보관하고 있는 탈퇴 회원의 정보는 회원의
          가입이력관리와 지적재산권 관리,개인정보보호를 위해서만 활용할 수
          있습니다.
          <br />
          3. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와
          같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.
          <br />
          -표시/광고에 관한 기록 : 6개월 -계약 또는 청약철회 등에 관한 기록 :
          5년 -대금결제 및 재화 등의 공급에 관한 기록 : 5년 제13조 (자격상실)
          <br />
          다음 각 항의 사유에 해당하는 경우 회사는 사전 통보 없이, 이용계약을
          해지하거나 기간을 정하여 서비스 이용을 중지 또는 이용계약 해지 후
          무기한 가입제한 할 수 있습니다.
          <br /> 1. 가입시 또는 정보변경시 제6조 3항의 회원정보를 누락시키거나
          허위 기재한 경우
          <br /> 2. 미풍양속을 저해하는 비속한 아이디, 필명, 별명을 사용한 경우
          <br />
          3. 타인의 아이디와 비밀번호, 주민등록번호 등 회원정보를 수집, 저장,
          도용한 경우 <br />
          4. 회사 임직원, 운영자 등을 포함한 타인을 사칭하는 행위 5.회사, 다른
          회원 또는 제3자의 지적재산권을 침해하는 경우 <br />
          6. 사회의 안녕과 질서, 미풍양속을 해치는 행위를 하는 경우
          <br /> 7. 타인의 명예를 훼손, 모욕, 스톡 등 괴롭히거나 불이익을 주는
          행위를 한 경우 <br />
          8. 정보통신망에 장애를 일으킬 수 있는 행위를 하는 경우
          <br /> 9. 회사의 허락 없이 회사의 서비스를 이용해 영리행위를 하는 경우
          <br />
          10. 회사가 허락하지 않은 방법으로 회사가 운영, 관리하는 포인트를
          취득한 경우 <br />
          11. 전기통신기본법, 전기통신사업법, 정보통신 윤리강령, 정보통신
          윤리위원회 심의규정, 프로그램 보호법 및 기타관련 법령과 약관이
          금지하는 행위를 한 경우
        </InfomationArea>
        <CheckInputArea>
          <CheckInput checked={checkbox} onChange={handleCheckboxChange} />
          <CheckInputText>
            안내 사항을 모두 확인하였으며, 이에 동의합니다.
          </CheckInputText>
        </CheckInputArea>
        <ButtonArea>
          <CancelButton>취소</CancelButton>
          <RemoveAccountButton onClick={handleRemoveAccountClick}>
            회원 탈퇴
          </RemoveAccountButton>
        </ButtonArea>
      </Content>
    </Container>
  );
};

export default RemoveAccountContent;

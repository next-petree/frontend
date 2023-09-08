import React from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';

export default function Post(props: any) {
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  return (
    <Div>
      <DaumPostcode style={{ width: '40rem', height: '28rem' }} className="postmodal" autoClose onComplete={complete} />
    </Div>
  );
}

const Div = styled.div`
  .postmodal {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    margin-top: 13rem;
    left: 31%;
    right: 0;
  }
`;

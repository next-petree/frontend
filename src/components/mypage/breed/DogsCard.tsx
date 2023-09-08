import { IMyDogs } from 'pages/mypage/breed';
import { HTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { styled } from 'styled-components';

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Image = styled.img`
  width: 12.5rem;
  height: 7.5rem;
  border-radius: 0.75rem;
`;

const Name = styled.h6`
  color: #333;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem; /* 160% */
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow: hidden;
  color: #333;
  text-overflow: ellipsis;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.6875rem;
`;

export default function DogsCard({
  dogId,
  name,
  type,
  gender,
  birthDate,
  imgUrl,
  ...props
}: Omit<IMyDogs, 'id'> & Omit<LinkProps, 'to'> & HTMLAttributes<HTMLAnchorElement> & { dogId: number }) {
  return (
    <Container to={`/mypage/breed/edit/${dogId}`} {...props}>
      <Image src={imgUrl} alt="강아지 사진" />
      <Name>{name}</Name>
      <Description>
        <span>견종: {type}</span>
        <span>성별: {gender === 'MALE' ? '암' : '수'}컷</span>
        <span>출생일: {birthDate}</span>
      </Description>
    </Container>
  );
}

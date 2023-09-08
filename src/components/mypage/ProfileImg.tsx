import styled from '@emotion/styled';
import CAMERA from 'assets/images/mypage/camera.svg';
import BADGE from 'assets/images/mypage/badge.svg';
import React, { HTMLAttributes, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import NOPROFOLE from 'assets/images/mypage/noprofile.svg';
import CLOSE from 'assets/images/mypage/close.svg';
import { useModal } from 'hooks/useModal';

interface ProfileImgProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value: File) => void;
  certification?: boolean;
}

interface PofileImageResponse {
  status: 'SUCCESS' | 'FAIL';
  data: IProfileImage;
}

interface IProfileImage {
  id: number;
  fileUrl: string;
}

export default function ProfileImg({ certification, onChange }: ProfileImgProps) {
  const { open } = useModal();
  const inputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<IProfileImage | undefined>();
  const [checkImage, setCheckeImage] = useState<IProfileImage | undefined>();
  const [imgFile, setImgFile] = useState<File | null>();

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files !== null) {
      const file = e.target.files[0];
      setImgFile(file);
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
      } else {
        setImgFile(null);
      }
    }
  };

  const getProfileImage = async () => {
    try {
      const { data: res } = await axios.get<PofileImageResponse>('/me/profile/image');
      setProfileImage(res?.data);
      setCheckeImage(res?.data);
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  const handleDelete = async () => {
    if (checkImage?.fileUrl !== undefined) {
      try {
        axios.delete(`/me/profile/image/${profileImage?.id}`).then((res: any) => {
          if (res.status === 200) {
            open(res.data.data, {
              accept: {
                text: '확인',
                onClick: () => {
                  window.location.reload();
                },
              },
            });
          }
        });
      } catch (e) {}
    } else {
      setProfileImage((prev: any) => ({ ...prev, fileUrl: null }));
      setImgFile(null);
    }
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage((prev: any) => ({ ...prev, fileUrl: reader.result as string }));
      };
      reader.readAsDataURL(imgFile);
    } else {
      setProfileImage((prev: any) => ({ ...prev, fileUrl: null }));
    }
  }, [imgFile]);

  useEffect(() => {
    onChange?.(imgFile as File);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgFile]);

  useEffect(() => {
    getProfileImage();
  }, []);

  return (
    <Container>
      <Img src={profileImage?.fileUrl ? profileImage?.fileUrl : NOPROFOLE} certification={certification} />
      <Button onClick={handleUpload} />
      <Input type="file" multiple accept="image/*" onChange={(e) => onChangeImg(e)} ref={inputRef} />
      {certification && <Badge src={BADGE} />}
      <Close onClick={handleDelete} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 2.5rem;
`;

const Img = styled.img<{ certification?: boolean }>`
  width: 10.688rem;
  height: 10.688rem;
  border-radius: 70%;
  border: ${(props) => (props.certification ? '2px solid #23f39c;' : '')};
`;

const Input = styled.input`
  visibility: hidden;
  position: absolute;
  width: 2.185rem;
  height: 2.021rem;
  left: 4.2rem;
  top: 4.2rem;
`;

const Button = styled.button`
  position: absolute;
  width: 2.185rem;
  height: 2.021rem;
  left: 4.2rem;
  top: 4.2rem;
  background-image: url(${CAMERA});
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
`;

const Badge = styled.img`
  position: absolute;
  width: 2.654rem;
  height: 3.033rem;
  top: 7.5rem;
  left: 8rem;
`;

const Close = styled.button`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;
  background-image: url(${CLOSE});
  background-repeat: no-repeat;
  margin-left: 7.5rem;
`;

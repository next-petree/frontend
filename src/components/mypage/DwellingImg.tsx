import styled from 'styled-components';
import IMG from 'assets/images/mypage/blockimg.svg';
import CLOSE from 'assets/images/mypage/close.svg';

import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
interface IDweling {
  label: string;
}

interface ResidentialEnvironmentsResponse {
  status: 'SUCCESS' | 'FAIL';
  data: IImageList[];
}

interface IImageList {
  id: number;
  imgUrl: string;
  spaceType: string;
}

export default function DwellingImg({ label }: IDweling) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [imgFile, setImgFile] = useState<File | null>();
  const [preview, setPreview] = useState<string | undefined>('');
  const [imageList, setImageList] = useState<IImageList[]>();
  // const [checkImageList, setCheckImageList] = useState<IImageList[]>();

  const handleUpload = () => {
    inputRef.current?.click();
  };

  const handleClose = () => {
    setImgFile(null);
    console.log(imgFile);
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0];
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file);
      } else {
        setImgFile(null);
      }
    }
  };

  const getResidential = async () => {
    try {
      const { data: res } = await axios.get<ResidentialEnvironmentsResponse>('/adopter/residential-environments');
      setImageList(res.data);
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(imgFile);
    } else {
      setPreview(undefined);
    }
  }, [imgFile]);

  useEffect(() => {
    getResidential();
  }, []);

  return (
    <Container>
      {imageList?.map((v, i) => (
        <>
          {v.imgUrl !== null ? (
            <>
              <Photo src={preview} />
              <Close onClick={handleClose} />
            </>
          ) : (
            <>
              <Button onClick={handleUpload} />
              <Input type="file" accept="image/*" onChange={(e: any) => onChangeImg(e)} ref={inputRef} />
            </>
          )}
        </>
      ))}
      {/* {preview ? (
        <>
          <Photo src={preview} />
          <Close onClick={handleClose} />
        </>
      ) : (
        <>
          <Button onClick={handleUpload} />
          <Input type="file" accept="image/*" onChange={(e: any) => onChangeImg(e)} ref={inputRef} />
        </>
      )} */}

      <Label>{label}</Label>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  margin-right: 2rem;
  margin-top: 2rem;
`;

const Button = styled.button`
  width: 100%;
  height: 9rem;
  background-image: url(${IMG});
  background-color: transparent;
  cursor: pointer;
`;

const Input = styled.input`
  visibility: hidden;
  position: absolute;
  width: 100%;
  height: 9rem;
`;

const Photo = styled.img`
  width: 100%;
  height: 9rem;
  border-radius: 0.75rem;
`;

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const Close = styled.button`
  position: absolute;
  right: -0.5rem;
  top: -0.5rem;
  width: 2.25rem;
  height: 2.25rem;
  background-image: url(${CLOSE});
  background-color: transparent;
  cursor: pointer;
`;

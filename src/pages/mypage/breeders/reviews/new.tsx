import MypageLayout from 'layout/MypageLayout';
import MypageForm from 'layout/MypageForm';
import * as S from './style';
import { useState } from 'react';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
const ReviewseditNew = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const defaultFileName = '이미지 파일을 업로드 해주세요';
  const [files, setFile] = useState<File>();
  const [imgSrc, setImgSrc] = useState<string | undefined>();
  const [fileName, setFileName] = useState<string>(defaultFileName);
  const [percent, setPercent] = useState(0);
  const imageSelectdHandler = (evnet: React.ChangeEvent<HTMLInputElement>) => {
    const target = evnet.currentTarget;
    const files = (target.files as FileList)[0];
    if (files === undefined) {
      return;
    }
    setFile(files);
    setFileName(files.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.onload = (event: any) => setImgSrc(event.target?.result);
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
  };
  return (
    <MypageLayout>
      <S.ReviewBox>
        <S.ReviewContentsBox>
          <MypageForm>
            <MypageLayout.Label>
              분양후기 관리
              <S.PreviewBtn to={`/mypage/reviews`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect x="0.5" y="0.5" width="47" height="47" rx="7.5" fill="white" stroke="#AEAEAE" />
                  <path
                    d="M29 14L18 24L29 34"
                    stroke="#AEAEAE"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <div>이전 페이지로</div>
              </S.PreviewBtn>
            </MypageLayout.Label>
            <S.FormContainer onSubmit={handleSubmit}>
              <S.EditBox>
                <S.SemiTitle>분양 후기 글쓰기</S.SemiTitle>
                <S.EditContetsBox>
                  <div className="line">
                    <div className="box">
                      <S.Label>제목</S.Label>
                      <S.Input placeholder="제목을 작성하세요" />
                    </div>
                    <div className="box">
                      <S.Label>견종</S.Label>
                      <S.Input placeholder="포메라니안" />
                    </div>
                  </div>
                  <div className="line">
                    <div className="box">
                      <S.Label>성별</S.Label>
                      <S.Input placeholder="수컷" />
                    </div>
                    <div className="box">
                      <S.Label>강아지 이름</S.Label>
                      <S.Input placeholder="루카스" />
                    </div>
                  </div>
                </S.EditContetsBox>
                <S.ReviewWritingBox>
                  <S.EditContetsBox>
                    <div className="box">
                      <S.Label>분양 후기 작성</S.Label>
                      <S.StyledTextarea placeholder="분양후기를 작성해주세요" />
                    </div>
                  </S.EditContetsBox>
                </S.ReviewWritingBox>
              </S.EditBox>
            </S.FormContainer>
            <S.ImageUploadBox>
              <div className="box">
                <S.Label>이미지 업로드 (0/4)</S.Label>
              </div>
              <form action="" onSubmit={onSubmit}>
                <S.ImagesSeleted>
                  <div className="sumnail_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <rect x="5.13965" width="2.72093" height="13" rx="1.36047" fill="#AEAEAE" />
                      <rect
                        x="13"
                        y="5.14062"
                        width="2.72093"
                        height="13"
                        rx="1.36047"
                        transform="rotate(90 13 5.14062)"
                        fill="#AEAEAE"
                      />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 50 45" fill="none">
                      <g clip-path="url(#clip0_1336_4937)">
                        <path
                          d="M49.8708 6.44556L46.6409 36.7826C46.5117 39.0579 45.0905 39.3107 42.7649 38.9315V36.4034L43.9277 36.6562L47.1577 6.19275L12.6615 2.65342L12.2739 6.95117L9.43156 7.07758L9.94836 2.40061C10.0776 0.883757 11.4987 -0.127479 12.9199 -0.00107408L47.4161 3.53825C48.9664 3.66466 50.1292 5.05511 49.8708 6.44556ZM40.1809 9.73207L41.6021 40.7012C41.7313 42.218 40.5685 43.4821 39.0181 43.4821L4.26361 44.9989C2.71322 45.1253 1.42123 43.9877 1.42123 42.4708L4.04222e-05 11.5017C-0.129159 9.98488 1.03363 8.72084 2.58402 8.72084L37.3385 7.20398C38.7597 7.07758 40.0517 8.21522 40.1809 9.73207ZM4.13441 41.9652L38.8889 40.4484L37.4677 9.85848L2.71322 11.3753L4.13441 41.9652ZM37.0801 31.3472C37.0801 30.4624 36.6925 29.4512 36.0465 28.8192L33.5918 26.2911C32.6874 25.5326 31.3954 25.5326 30.6202 26.4175L26.2274 31.4736L16.6667 19.9708C15.8915 18.9596 14.3411 18.9596 13.4367 19.9708L5.94319 29.5776C5.4264 30.336 5.0388 31.2208 5.168 32.2321L5.5556 40.8276L37.4677 39.1843L37.0801 31.3472ZM31.5246 20.7293C33.5918 20.6029 35.1422 18.9596 35.1422 16.9371C35.013 14.9147 33.3334 13.3978 31.2662 13.3978C29.199 13.5242 27.6486 15.1675 27.6486 17.1899C27.6486 19.3388 29.4574 20.8557 31.5246 20.7293Z"
                          fill="#AEAEAE"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1336_4937">
                          <rect width="50" height="45" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <label htmlFor="image">{fileName}</label>
                  <input type="file" id="image" multiple accept="image/*" onChange={imageSelectdHandler} />
                </S.ImagesSeleted>
                <Button buttonSize={ButtonSize.MEDIUM} style={{ fontSize: 18 }}>
                  업로드
                </Button>
              </form>
            </S.ImageUploadBox>
          </MypageForm>
        </S.ReviewContentsBox>
      </S.ReviewBox>
      <S.ButtonWrap>
        <Button buttonSize={ButtonSize.MEDIUM}>저장</Button>
      </S.ButtonWrap>
    </MypageLayout>
  );
};

export default ReviewseditNew;

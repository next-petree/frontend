import DatePicker from 'components/common/date-picker/DatePicker';
import Textarea from 'components/common/input/Textarea';
import BreedSelect from 'components/common/select/BreedSelect';
import type { BreedSelectType } from 'components/common/select/MajorSelect';
import Select from 'components/common/select/Select';
import { Dispatch, HTMLAttributes, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';
import * as S from './style';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
const Container = styled.div``;

const TwoRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.0375rem;
  gap: 0.75rem;
  margin-bottom: 2rem;
`;

const SelectedBreed = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  font-size: 1rem;
  padding: 0 1rem;
  border: 1px solid #f5f5f5;
  border-radius: 1rem;
  background-color: #f5f5f5;
  color: #939393;
  div {
    font-size: 0.875rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  info?: IBreedInfo;
  setInfo?: Dispatch<SetStateAction<IBreedInfo>>;
}

export interface IBreedInfo {
  dogTypeId: number;
  gender: string;
  birthDate: Date;
  name: string;
  management: string;
  dogImgFiles: string[];
}

export default function Edit({ info, setInfo, ...props }: Props) {
  const [selected] = useState<BreedSelectType | null>(null);

  const onSelectEdit = () => {
    setInfo?.((prev) => ({ ...prev, dogTypeId: selected?.id || 0 }));
  };
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
    <>
      <Container {...props}>
        <TwoRow>
          <div>
            <Label
              style={{
                height: '85px',
              }}
            >
              강아지 이름
              {selected ? (
                <SelectedBreed>
                  <span>{selected.name}</span>
                  <div onClick={onSelectEdit}>변경</div>
                </SelectedBreed>
              ) : (
                <BreedSelect
                  onChange={(v) => {
                    setInfo?.((prev) => ({ ...prev, dogTypeId: v.id }));
                  }}
                />
              )}
            </Label>
            <Label>
              견종
              <Select>
                <Select.Option value="말티즈">말티즈</Select.Option>
                <Select.Option value="말티푸">말티푸</Select.Option>
                <Select.Option value="푸들">푸들</Select.Option>
              </Select>
            </Label>
          </div>
          <div>
            <Label>
              출생일
              <DatePicker onChange={() => {}} />
            </Label>
            <Label>
              성별
              <Select>
                <Select.Option value="선택">선택</Select.Option>
                <Select.Option value="수컷">수컷</Select.Option>
                <Select.Option value="암컷">암컷</Select.Option>
              </Select>
            </Label>
            <Label>
              분양상태
              <Select>
                <Select.Option value="분양가능">분양가능</Select.Option>
                <Select.Option value="분양진행중">분양진행중</Select.Option>
                <Select.Option value="분양완료">분양완료</Select.Option>
              </Select>
            </Label>
          </div>
        </TwoRow>
        <Label>
          기타 사항
          <Textarea
            placeholder="강아지의 특이사항에 대해 작성해주세요"
            value={info?.management}
            onChange={(e) => {
              setInfo?.((prev) => ({ ...prev, management: e.target.value }));
            }}
          />
        </Label>
        <Label>
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
        </Label>
      </Container>
    </>
  );
}

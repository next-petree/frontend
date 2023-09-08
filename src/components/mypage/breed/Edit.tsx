import DatePicker from 'components/common/date-picker/DatePicker';
import Textarea from 'components/common/input/Textarea';
import BreedSelect from 'components/common/select/BreedSelect';
import type { BreedSelectType } from 'components/common/select/MajorSelect';
import Select from 'components/common/select/Select';
import { Dispatch, HTMLAttributes, SetStateAction, useState } from 'react';
import { styled } from 'styled-components';

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

  return (
    <Container {...props}>
      <TwoRow>
        <div>
          <Label>
            견종
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
            이름
            <input
              placeholder="강아지의 이름을 입력해주세요"
              value={info?.name}
              onChange={(e) => {
                setInfo?.((prev) => ({ ...prev, name: e.target.value }));
              }}
              style={{
                backgroundColor: '#f5f5f5',
                border: 'none',
                height: '3rem',
                borderRadius: '1rem',
                padding: '0 1rem',
                fontSize: '1rem',
              }}
            />
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
              <Select.Option value="0">선택</Select.Option>
              <Select.Option value="1">수컷</Select.Option>
              <Select.Option value="2">암컷</Select.Option>
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
        강아지 사진
        <input type="file" />
      </Label>
    </Container>
  );
}

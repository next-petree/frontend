import { styled } from "styled-components";
import * as S from "./style";
export default function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <S.Container maxLength={props.maxLength ?? 300} {...props} />
      <S.TextCount>
        {props.value?.toString().length}/{props.maxLength ?? 300}
      </S.TextCount>
    </div>
  );
}

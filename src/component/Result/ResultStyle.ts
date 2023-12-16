import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Header = styled.div`
  border: 1px solid black;
  width: 100%;
  height: 64px;
  background: lightblue;
`;
export const ResultWrapper = styled.div`
  text-align: center;
  padding: 140px 0;
`;
export const ResultTitle = styled.h3`
  font-size: 50px;
  font-weight: 700;
  line-height: 72.4px;
  margin: 0;
`;
export const ScoreTitle = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: #4ec1bf;
  line-height: 57.92px;
  margin: 0;
`;
export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ScoreDiv = styled.div`
  font-size: 80px;
  font-weight: 500;
`;
export const Score = styled.span`
  font-size: 160px;
  font-weight: 900;
`;
export const ScoreImg = styled.img``;
export const ResultInfo = styled.p`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResultFailed = styled.span`
  color: #ff5757;
  font-size: 28px;
  font-weight: 700;
`;
export const ResultAcceptance = styled.span`
  color: #158fff;
  font-size: 28px;
  font-weight: 700;
`;
export const BtnWrapper = styled.div`
  width: 660px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    padding: 13px 125px;
    border: none;
    border-radius: 16px;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
  }
  :nth-child(1):hover {
    background: #35d8d5;
  }
`;
export const RestartBtn = styled(Link)`
  background: #4ec1bf;
`;
export const AnswerBtn = styled(Link)`
  background: #2f2f2f;
`;

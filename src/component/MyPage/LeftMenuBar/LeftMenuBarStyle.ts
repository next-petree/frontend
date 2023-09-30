import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 1000px;
  border-radius: 20px;
  overflow: hidden;
  background-color: gray;
  font-size: 20px;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  text-align: center;
  color: black;
  padding: 25px 0;
  text-decoration: none;
  &:hover {
    background-color: lightgray;
  }
`;

export const DeleteAccountLink = styled(StyledLink)`
  margin-top: auto;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 1000px;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  font-size: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
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

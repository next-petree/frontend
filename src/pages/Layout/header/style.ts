import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  border-bottom: 1px black solid;
  h1 {
  }
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    align-items: center;
    list-style: none;
    padding: 10px;
    li {
      a {
        display: block;
        padding: 10px;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }
`;

export const Container = styled.header`
  width: 100%;
  height: 64px;
  z-index: 999;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #f5f5f5;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 4px 10px 0px rgba(119, 119, 119, 0.05);
  backdrop-filter: blur(2px);
`;

export const InnerContainer = styled.div`
  position: relative;
  margin: 0 auto;
  height: 100%;
  max-width: 1400px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menus = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 1rem;
`;

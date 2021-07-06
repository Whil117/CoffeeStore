import { css } from "@emotion/react";
import styled from "@emotion/styled";


interface Button {
  menu: Boolean;
}

export const NavMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  h1 {
    font-family: Sedgwick Ave;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
  }
`;
export const NavButton = styled.button<Button>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 90px;
  height: 42px;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  border: none;
  background: ${({ menu }) => (menu ? "#379869" : "white")};
  color: ${({ menu }) => (menu ? "#ffffff" : "none")};
  ${({menu})=>menu && css`
  &:hover {
    background: white;
    color: #379869;
    box-shadow: 0px 0px 4px #379869;
  }
  `}
`;

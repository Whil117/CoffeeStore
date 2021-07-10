import { css } from "@emotion/react";
import styled from "@emotion/styled";
interface Button {
  menu: Boolean;
  theme: string;
}
interface Theme {
  theme: string;
}
export const NavMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const NavMain = styled.nav<Theme>`
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  color: ${({ theme }) => (theme === "light" ? "#18191c" : "white")};
  background: ${({ theme }) => (theme === "light" ? "white" : "#18191c")};
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  h1 {
    font-family: Sedgwick Ave;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
  }
`;
export const NavButton = styled.button<Button>`
  top: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-radius: 5px;
  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  border: none;
  width: auto;
  padding: ${({ theme }) => (theme ? "10px" : "none")};
  height: ${({ theme }) => (theme ? "42px" : "auto")};
  color: ${({ theme }) => (theme ? "#ffffff" : "none")};
  background: ${({ menu }) => (menu ? "#379869" : "none")};

  svg {
    path {
      stroke: ${({ theme }) => (theme === "light" ? "black" : "white")};
    }
  }
  &:hover {
    background: none;
    color: ${({ theme }) => (theme === "light" ? "#379869" : "#ffffff")};
    box-shadow: ${({ theme }) =>
      theme === "light" ? "0px 0px 4px #379869" : " 0px 0px 4px white"};
  }
`;
export const NavMenu = styled.div`
  width: 150px;
  height: 197px;
  background: #ffffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
`;
type Active = {
  active: Boolean;
  leave: Boolean;
  theme: string;
};

export const NavOptionsMenu = styled.div<Theme>`
  top: 80px;
  position: absolute;
  background: ${({ theme }) => (theme === "light" ? "white" : "#212734")};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 135px;
  border-radius: 5px;
`;
export const NavOptionsButton = styled.button<Active>`
  border: none;
  border-radius: 2px;
  padding: 10px;
  margin: 5px;
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  background: none;
  ${({ active }) =>
    active &&
    css`
      color: white;
      background: #379869;
    `}

  ${({ leave }) =>
    leave &&
    css`
      color: white;
      background: red;
    `}
  font-size: medium;
`;

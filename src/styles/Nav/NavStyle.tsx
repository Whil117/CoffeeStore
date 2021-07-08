import { css } from "@emotion/react";
import styled from "@emotion/styled";
interface Button {
  menu: Boolean;
}
export const NavMenuDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
export const NavMain = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  h1 {
    font-family: Sedgwick Ave;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
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
  font-weight: bold;
  font-size: 14px;
  border: none;
  padding: ${({ menu }) => (menu ? "10px" : "none")};
  width: ${({ menu }) => (menu ? "90px" : "auto")};
  height: ${({ menu }) => (menu ? "42px" : "auto")};
  background: ${({ menu }) => (menu ? "#379869" : "white")};
  color: ${({ menu }) => (menu ? "#ffffff" : "none")};
  &:hover {
    background: white;
    color: #379869;
    box-shadow: 0px 0px 4px ${({menu})=>menu?'#379869' : '#969696'};
  }
  &:active{
    color: #ffffff;
    background: ${({ menu }) => (menu ? "#379869" : "white")};
  }
`;
export const NavMenu = styled.div`
  width: 150px;
  height: 197px;
  background: #FFFFFF;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
`
type Active = {
  active: Boolean;
  leave: Boolean;
};

export const NavOptionsMenu = styled.div`
top: 80px;
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 135px;

`;
export const NavOptionsButton = styled.button<Active>`
  border: none;
  border-radius: 2px;
  padding: 10px;
  margin: 5px;
  color: ${({ active, leave }) =>
    active ? " white" : "black" && leave ? " white" : "black"};
  background: ${({ active, leave }) =>
    active ? " #379869" : "white" && leave ? " red" : "white"};
    font-size: medium;
`;
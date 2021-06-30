import styled from "@emotion/styled";

type Mode = {
  active: string;
};
type Active = {
  active: Boolean;
  leave: Boolean;
};
export const NavDiv = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
export const NavMenu = styled.button<Mode>`
  background: none;
  border: none;
  height: 80px;
  width: 80px;
  svg {
    path {
      stroke: ${({ active }) => (active === "true" ? "#0D8684" : "black")};
    }
  }
`;
export const NavOptionsMenu = styled.div`
  position: absolute;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 10px;
  font-size: large;
`;
export const NavOptionsButton = styled.button<Active>`
  border: none;
  border-radius: 2px;
  color: ${({ active, leave }) =>
    active ? " white" : "black" && leave ? " white" : "black"};
  background: ${({ active, leave }) =>
    active ? " #0D8684" : "white" && leave ? " red" : "white"};
`;
export const NavRefresh = styled.button`
  background: none;
  border: none;
`;
export const NavLogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 280px;
  justify-content: space-around;
  div {
    display: flex;
  }
`;

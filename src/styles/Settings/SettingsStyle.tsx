import styled from "@emotion/styled";

interface Theme {
  theme: string;
}

export const SettingsMain = styled.main`
  font-family: Inter;
`;
export const SettingsOptions = styled.ul`
  li {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 250px;
  }
`;
export const SettingsContainer = styled.div<Theme>`
  padding: 50px;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "#212734")};
  color: ${({ theme }) => (theme === "light" ? "black" : "white")};
  height: 100vh;
`;

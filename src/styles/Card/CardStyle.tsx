import styled from "@emotion/styled";

interface Card {
  width: string;
  flow: string;
}
type Active = {
  active: Boolean;
};

export const CardCoins = styled.div`
  display: flex;
  justify-content: space-between;
  width: 430px;
  font-family: Inter;
  div {
    display: flex;
    align-items: center;
    width: 205px;
    justify-content: space-around;
  }
  button {
    border: none;
  }
`;
export const Card = styled.label<Active>`
  width: 182px;
  height: 227px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
  color: ${({ active }) => (active ? "white" : "black")};
  background: ${({ active }) => (active ? " #379869" : "white")};
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }

`;
export const CardDiv = styled.div<Card>`
  display: flex;
  width: ${({ width }) => (width === "true" ? "682px" : "none")};
  overflow-x: ${({ flow }) => (flow === "true" ? "auto" : "none")};
  div {
    text-align: center;
  }
  input {
    display: none;
  }
`;
export const CardsMain = styled.div`
  display: flex;
  font-family: Inter;
  font-size: 14px;
  flex-direction: column;
  align-items: center;
  margin: 0 0 50px 0;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    width: 114px;
    height: 42px;
    color: white;
    background: #379869;
    border-radius: 5px;
    border: none;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    &:hover {
      background: white;
      color: #379869;
      box-shadow: 0px 0px 4px #379869;
    }
    &:active {
      color: #ffffff;
      background: #379869;
    }
  }
`;
export const CardErrorCheck = styled.p`
  color: red;
`;
export const CardBuyDiv = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
`;
export const CardBuy = styled.div`
  width: 522px;
  height: 290px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    justify-content: space-around;
    width: 230px;
  }
  p {
    color: red;
  }
`;
interface Mode {
  mode: string;
}
export const CardBuyButton = styled.button<Mode>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 68px;
  height: 37px;
  border-radius: 5px;
  border: none;
  color: white;
  background: ${({ mode }) => (mode === "true" ? "#DA2525" : "#379869")};
  &:hover {
    color: ${({ mode }) => (mode === "true" ? "#DA2525" : "#379869")};
    background-color: white;
    box-shadow: 0 0 4px
      ${({ mode }) => (mode === "true" ? "#DA2525" : "#379869")};
  }
  &:active {
    color: white;
    background: ${({ mode }) => (mode === "true" ? "#DA2525" : "#379869")};
  }
`;

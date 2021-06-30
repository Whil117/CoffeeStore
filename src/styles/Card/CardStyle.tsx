import styled from "@emotion/styled";

interface Card {
  width: string;
  flow: string;
}
type Active = {
  active: Boolean;
};

export const Card = styled.label<Active>`
  width: 182px;
  height: 227px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
  color: ${({ active }) => (active ? "white" : "black")};
  background: ${({ active }) => (active ? " #0D8684" : "white")};
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
  input {
    display: none;
  }
`;
export const CardsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 40px;
    width: 114px;
    height: 42px;
    color: white;
    background: #0d8684;
    border-radius: 5px;
    border: none;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
  }
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
  div{
    display: flex;
    justify-content: space-around;
    width: 230px;
  }
  p{
    color: red;
  }
`;
interface Mode {
  mode:Boolean
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
  background: ${({ mode }) => (mode ? "#DA2525" : "#31B82E")};
`;

import styled from "@emotion/styled";

export const HomeMain = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const HomeArt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  div {
    width: 600px;
    h2 {
      font-family: Sedgwick Ave;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
    button{
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 15px 30px;
      width: 263px;
      height: 42px;
      background: #379869;
      border-radius: 5px;
      font-style: normal;
      font-weight: bold;
      font-family: Inter;
      font-size: 14px;
      color: white;
      &:hover{
        background: white;
        color:#379869;
        box-shadow: 0px 0px 4px #379869;
      }
    }
  }
`;

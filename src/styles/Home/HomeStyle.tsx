import styled from "@emotion/styled";

export const HomeMain = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  img{
    margin: 10px;
    height: 623px;
  }
`;
export const HomeArt = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 419px;
  margin: 70px 70px;
  h2 {
    font-family: Sedgwick Ave;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
  }
  p {
    font-size: 18px;
  }
  button {
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
    /* font-weight: bold; */
    font-family: Inter;
    font-size: 14px;
    color: white;
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

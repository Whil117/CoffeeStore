import styled from "@emotion/styled";

export const SignMain = styled.main`
  width: 100%;
  height: 100vh;
  background: #ffffff;
  display: flex;
`;
export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  input {
    border: none;
    width: 239px;
    height: 35px;
    background: #ffffff;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 0 0 30px 0;
    font-family: Inter;
    font-size: 14px;
    &:hover{
      background: white;
      box-shadow: 0px 0px 5px #379869;
    }
  }
  button {
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 64px;
    width: 239px;
    height: 35px;
    background: #379869;
    border-radius: 5px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    &:hover {
      background: white;
      color: rgb(55, 152, 105);
      box-shadow: 0px 0px 5px #379869;
    }
  }
  label {
    font-family: Inter;

    font-size: 18px;
  }
  p {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    color: #e32a2a;
  }
`;
export const SignInfo = styled.div`
  width: 68%;
  padding: 20px;
  display: flex;
  flex-direction: column;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    color: #379869;
  }
  div:nth-of-type(1) {
    display: flex;
    justify-content: flex-end;
    button {
      background: none;
      border: none;
    }
  }
  div:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;
export const SignButton = styled.button`
  margin: 10px;
  font-family: Inter;
  font-style: normal;
  background: none;
  border: none;
  font-size: 14px;
  color: black;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

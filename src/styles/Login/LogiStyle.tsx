import styled from "@emotion/styled";

export const LoginDiv = styled.div`
  width: 706px;
  height: 529px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
`;
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 10px;
  input {
    border: none;
    width: 188px;
    height: 25px;
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 5px 10px;
    margin: 0 0 30px 0;
  }
  button {
    color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 64px;
    width: 181px;
    height: 32px;
    background: #0d8684;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    &:hover {
      background: white;
      color: #0d8684;
      box-shadow: 0px 0px 5px #0d8684;
    }
  }
  label {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
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
export const LoginInfo = styled.div`
  width: 250px;
  padding: 10px 10px 10px 20px;

  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    color: #0d8684;
  }
`;
export const LoginApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const LoginBackDiv = styled.div`
  button{
    border: none;
    background: none;
  }
`
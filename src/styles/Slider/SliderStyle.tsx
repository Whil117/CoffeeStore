import styled from "@emotion/styled";


export const SliderImg = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: space-between;
div{
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  h3{
    margin:0 0 50px 0;
    color: white;
    position: absolute;
  }
  p{
    text-align: center;
    color: white;
    position: absolute;
    width: 300px;
  }
  img{
    height: 400px;
    width: 100%;
  }
}
button:nth-of-type(1){
  position: absolute;
  border:none;
  background: none;
}
button:nth-of-type(2){
  position: absolute;
  right: 0;
  border:none;
  background: none;
}
`;
export const SliderMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 50px 0;
  h2{
    font-family: Sedgwick Ave;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
  }
`;

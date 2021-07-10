import { ChangeEventHandler, FC, useContext } from "react";
import { Card, CardDiv } from "../../styles/Card/CardStyle";
import {ThemeContext} from '../../pages/App/Main/Main'
import styled from "@emotion/styled";
interface Props {
  category: string[];
  title: string;
  flow: string;
  width: string;
  check:string
  name:string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const CardContainer  =styled.div`
  color: ${({theme})=>theme === 'light' ? "black" : "white"};
`

const Cards: FC<Props> = ({ category, title, flow, width ,name,handleChange,check }) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return (
    <CardContainer theme={theme}>
      <h2>{title}</h2>
      <CardDiv flow={flow} width={width}>
        {category.map((item) => (
          <div key={`Key${item}`}>
            <Card htmlFor={`Card${item}`} active={check === item} theme={theme}>
              <h4>{item}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              </p>
            </Card>
            <input type="radio" id={`Card${item}`} onChange={handleChange} value={item.toString()} name={name} />
          </div>
        ))}
      </CardDiv>
    </CardContainer>
  );
};

export default Cards;

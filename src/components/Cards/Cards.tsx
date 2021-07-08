import React, { ChangeEventHandler } from "react";
import { Card, CardDiv } from "../../styles/Card/CardStyle";

interface Props {
  category: string[];
  title: string;
  flow: string;
  width: string;
  check:string
  name:string
  handleCheck: ChangeEventHandler<HTMLInputElement>
}

const Cards: React.FC<Props> = ({ category, title, flow, width,name,handleCheck,check }) => {

  return (
    <div>
      <h2>{title}</h2>
      <CardDiv flow={flow} width={width}>
        {category.map((item) => (
          <div key={`Key${item}`}>
            <Card htmlFor={`Card${item}`} active={check === item}>
              <h4>{item}</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet,
              </p>
            </Card>
            <input type="radio" id={`Card${item}`} onChange={handleCheck} value={item.toString()} name={name} />
          </div>
        ))}
      </CardDiv>
    </div>
  );
};

export default Cards;

import { ChangeEventHandler, FC } from "react";
import { Card, CardDiv } from "../../styles/Card/CardStyle";

interface Props {
  category: string[];
  title: string;
  flow: string;
  width: string;
  check:string
  name:string
  handleChange: ChangeEventHandler<HTMLInputElement>
}

const Cards: FC<Props> = ({ category, title, flow = "false", width = "false",name,handleChange,check }) => {

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
            <input type="radio" id={`Card${item}`} onChange={handleChange} value={item.toString()} name={name} />
          </div>
        ))}
      </CardDiv>
    </div>
  );
};

export default Cards;

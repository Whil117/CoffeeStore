/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { CoffeeBox } from "../../styles/Coffee/CoffeeStyle";

interface Props {
    coffee:{
        _id: any;
        Coffee: string;
        Type: string;
        With: string;
        Grind: string;
        Week: string;
    }
}

const Coffee:FC<Props> = ({coffee}) => {
  return (
    <CoffeeBox key={coffee?._id}>
      <img src={`/Images/coffees/${coffee.Coffee}.png`} alt={coffee.Coffee} />
      <div>
        <h2>{coffee.Coffee}</h2>
        <ul>
          <li><b>Type:</b> {coffee?.Type}</li>
          <li><b>With:</b>{coffee?.With}</li>
          <li><b>Grind:</b>{coffee?.Grind}</li>
          <li><b>Week:</b>{coffee?.Week}</li>
        </ul>
      </div>
    </CoffeeBox>
  );
};

export default Coffee;

import React, { ChangeEventHandler } from "react";
import Cards from "../../../../components/Cards/Cards";

interface Props {
  coffee: {
    Coffee: string;
    Type: string;
    With: string;
    Grind: string;
    Week: string;
  };
  Category:{
      Coffee:string[]
      Type:string[]
      With:string[]
      Grind:string[]
      Week:string[]
      titles:string[]
  }
  handleCheck:ChangeEventHandler<HTMLInputElement>
}

const SelectCards: React.FC<Props> = ({ coffee,handleCheck,Category }) => {
  return (
    <>
      <Cards
        check={coffee?.Coffee}
        name="Coffee"
        handleCheck={handleCheck}
        width="true"
        flow="true"
        title={Category?.titles[0]}
        category={Category?.Coffee}
      />
      <Cards
        check={coffee?.Type}
        name="Type"
        handleCheck={handleCheck}
        width="false"
        flow="false"
        title={Category?.titles[1]}
        category={Category?.Type}
      />
      <Cards
        check={coffee?.With}
        name="With"
        handleCheck={handleCheck}
        width="false"
        flow="false"
        title={Category.titles[2]}
        category={Category.With}
      />
      <Cards
        check={coffee?.Grind}
        name="Grind"
        handleCheck={handleCheck}
        width="false"
        flow="false"
        title={Category?.titles[3]}
        category={Category?.Grind}
      />
      <Cards
        check={coffee?.Week}
        name="Week"
        handleCheck={handleCheck}
        width="false"
        flow="false"
        title={Category?.titles[4]}
        category={Category?.Week}
      />
    </>
  );
};

export default SelectCards;

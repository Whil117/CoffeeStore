import React, { ChangeEventHandler } from "react";
import { Category } from "../../../../assets/data";
import Cards from "../../../../components/Cards/Cards";

interface Props {
  coffee: {
    Coffee: string;
    Type: string;
    With: string;
    Grind: string;
    Week: string;
  };
  handleChange:ChangeEventHandler<HTMLInputElement>
}

const SelectCards: React.FC<Props> = ({ coffee,handleChange }) => {
  return (
    <>
      <Cards
        check={coffee?.Coffee}
        name="Coffee"
        handleChange={handleChange}
        width="true"
        flow="true"
        title={Category?.titles[0]}
        category={Category?.Coffee}
      />
      <Cards
        check={coffee?.Type}
        name="Type"
        handleChange={handleChange}
        width="false"
        flow="false"
        title={Category?.titles[1]}
        category={Category?.Type}
      />
      <Cards
        check={coffee?.With}
        name="With"
        handleChange={handleChange}
        width="false"
        flow="false"
        title={Category.titles[2]}
        category={Category.With}
      />
      <Cards
        check={coffee?.Grind}
        name="Grind"
        handleChange={handleChange}
        width="false"
        flow="false"
        title={Category?.titles[3]}
        category={Category?.Grind}
      />
      <Cards
        check={coffee?.Week}
        name="Week"
        handleChange={handleChange}
        width="false"
        flow="false"
        title={Category?.titles[4]}
        category={Category?.Week}
      />
    </>
  );
};

export default SelectCards;

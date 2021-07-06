import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { NavButton, NavMain } from "../../styles/Nav/NavStyle";
import Menu from "../../../public/Images/menu.svg";

interface Props {
  Home: Boolean;
}
const Nav: React.FC<Props> = ({ Home }) => {
  const router = useRouter();

  return (
    <NavMain>
      <h1>Coffee Store</h1>
      {Home ? (
        <NavButton menu={true} type="button" onClick={() => router.replace("./App/Sign/Sign")}>
          Sign up
        </NavButton>
      ) : (
        <NavButton menu={false} >
          <Image src={Menu} alt="menu" />
        </NavButton>
      )}
    </NavMain>
  );
};

export default Nav;

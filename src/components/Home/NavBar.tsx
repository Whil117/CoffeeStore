import React, { MouseEventHandler, useState } from "react";
import {
  NavDiv,
  NavLogoDiv,
  NavMenu,
  NavOptionsButton,
  NavOptionsMenu,
  NavRefresh,
} from "../../styles/NavBar/NavBar";
import Image from "next/image";
import { useRouter } from "next/router";
import Refresh from "../../../public/Images/el_refresh.svg";

interface Props {
  coins: number;
  initC: number;
  setcoins: React.Dispatch<React.SetStateAction<number>>;
  username: string;
}

const NavBar: React.FC<Props> = ({ coins, initC, setcoins, username }) => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState("MakeCoffee");
  const router = useRouter();

  const handleShow = () => {
    const isShowValid = show ? setShow(false) : setShow(true);
    return isShowValid;
  };
  const handleLogOut = (evt: any) => {
    localStorage.removeItem("mycount");
    setCategory(evt.target.value);
    router.reload();
  };
  const handleActiveOption = (evt: any) => {
    setCategory(evt.target.value);
  };
  return (
    <NavDiv>
      <NavLogoDiv>
        <h1>{username}</h1>
        <div>
          <p>Coins:{coins}</p>
          <NavRefresh onClick={() => setcoins(initC)}>
            <Image src={Refresh} alt="refresh"></Image>
          </NavRefresh>
        </div>
      </NavLogoDiv>
      <div>
        <NavMenu onClick={handleShow} active={show.toString()}>
          <svg
            width="45"
            height="50"
            viewBox="0 0 45 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 37.5H37.5M7.5 12.5H37.5H7.5ZM7.5 25H37.5H7.5Z"
              stroke="black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavMenu>
        {show && (
          <NavOptionsMenu>
            <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="MakeCoffee"
              active={category === "MakeCoffee"}
            >
              Make Coffee
            </NavOptionsButton>
            <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="SeeCoffee"
              active={category === "SeeCoffee"}
            >
              See Coffee
            </NavOptionsButton>
            <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="Favourites"
              active={category === "Favourites"}
            >
              Favourites
            </NavOptionsButton>
            <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="About"
              active={category === "About"}
            >
              About
            </NavOptionsButton>
            <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="Settings"
              active={category === "Settings"}
            >
              Settings
            </NavOptionsButton>
            <NavOptionsButton
              leave={category === "LogOut"}
              onClick={handleLogOut}
              value="LogOut"
              active={false}
            >
              Log Out
            </NavOptionsButton>
          </NavOptionsMenu>
        )}
      </div>
    </NavDiv>
  );
};

export default NavBar;
//

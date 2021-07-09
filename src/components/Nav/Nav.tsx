/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  NavButton,
  NavMain,
  NavMenuDiv,
  NavOptionsButton,
  NavOptionsMenu,
} from "../../styles/Nav/NavStyle";
import { CardCoins } from "../../styles/Card/CardStyle";

interface Props {
  mode: Boolean;
  coins: number | false;
  setcoins: any;
  username: string;
  ModeCoins: Boolean;
}

const categoryLocal = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("category") || "Main";
  }
};
const Nav: React.FC<Props> = ({
  mode,
  coins,
  setcoins,
  username,
  ModeCoins,
}) => {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState(categoryLocal as unknown as string);
  const router = useRouter();

  const handleShow = () => {
    const isShow = show ? setShow(false) : setShow(true);
    return isShow;
  };
  const handleActiveOption = (evt: any) => {
    setCategory(evt.target.value);
    setTimeout(() => {
      router.replace(`/App/${evt.target.value}/${evt.target.value}`);
    }, 300);
  };

  const handleLogOut = (evt: any) => {
    setCategory(evt.target.value);
    localStorage.removeItem("category");
    localStorage.removeItem("token");
    router.replace("/");
  };

  useEffect(() => {
    const isValidCategory =
      category === "LogOut"
        ? console.log("salida")
        : localStorage.setItem("category", category);
    return isValidCategory;
  }, [category]);

  return (
    <NavMain>
      <CardCoins>
        <h1>Coffee Store</h1>
        {ModeCoins && (
          <div>
            <h3>{username}</h3>
            <p>Coins:{coins}</p>
            <button onClick={() => setcoins(100)}>
              <img src="/Images/el_refresh.svg" alt="update" />
            </button>
          </div>
        )}
      </CardCoins>
      {mode ? (
        <NavButton
          menu={true}
          type="button"
          onClick={() => router.replace("./App/Sign/Sign")}
        >
          Sign up
        </NavButton>
      ) : (
        <NavMenuDiv>
          <NavButton menu={false} onClick={handleShow}>
            <img src="/Images/menu.svg" alt="menu" />
          </NavButton>
          {show && (
            <NavOptionsMenu>
              <NavOptionsButton
                leave={false}
                onClick={handleActiveOption}
                value="Main"
                active={category === "Main"}
              >
                Make Coffee
              </NavOptionsButton>
              <NavOptionsButton
                leave={false}
                onClick={handleActiveOption}
                value="CoffeesSee"
                active={category === "CoffeesSee"}
              >
                See Coffee
              </NavOptionsButton>
              {/* <NavOptionsButton
              leave={false}
              onClick={handleActiveOption}
              value="About"
              active={category === "About"}
            >
              About
            </NavOptionsButton> */}
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
        </NavMenuDiv>
      )}
    </NavMain>
  );
};

export default Nav;

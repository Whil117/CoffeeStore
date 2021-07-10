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
  theme: string;
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
  theme,
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
    setTimeout(() => {
      localStorage.removeItem("category");
      localStorage.removeItem("token");
      router.replace("/");
    }, 300);
  };

  useEffect(() => {
    const isValidCategory =
      category === "LogOut"
        ? console.log("salida")
        : localStorage.setItem("category", category);
    return isValidCategory;
  }, [category]);

  return (
    <NavMain theme={theme}>
      <CardCoins theme={theme}>
        <h1>Coffee Store</h1>
        {ModeCoins && (
          <div>
            <h3>{username}</h3>
            <p>Coins:{coins}</p>
            <button onClick={() => setcoins(100)}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 0C9.00492 0 1.92526 6.05369 0.335387 14.082H5.19318C6.68996 8.68455 11.6259 4.7168 17.5 4.7168C21.0312 4.7168 24.2222 6.15166 26.532 8.46802L20.918 14.082H35V0L29.8731 5.12695C26.7065 1.95945 22.3329 0 17.5 0ZM0 20.918V35L5.12695 29.8731C8.29343 33.0406 12.6671 35 17.5 35C25.9951 35 33.0747 28.9463 34.6646 20.918H29.8068C28.3101 26.3154 23.374 30.2832 17.5 30.2832C13.9688 30.2832 10.7778 28.8483 8.46802 26.532L14.082 20.918H0V20.918Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        )}
      </CardCoins>
      {mode ? (
        <NavButton
          menu={true}
          type="button"
          theme={theme}
          onClick={() => router.replace("./App/Sign/Sign")}
        >
          Sign up
        </NavButton>
      ) : (
        <NavMenuDiv>
          <NavButton menu={false} onClick={handleShow} theme={theme}>
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
          </NavButton>
          {show && (
            <NavOptionsMenu theme={theme}>
              <NavOptionsButton
                leave={false}
                onClick={handleActiveOption}
                value="Main"
                active={category === "Main"}
                theme={theme}
              >
                Make Coffee
              </NavOptionsButton>
              <NavOptionsButton
                leave={false}
                onClick={handleActiveOption}
                value="CoffeesSee"
                active={category === "CoffeesSee"}
                theme={theme}
              >
                See Coffee
              </NavOptionsButton>
              <NavOptionsButton
                leave={false}
                onClick={handleActiveOption}
                value="Settings"
                active={category === "Settings"}
                theme={theme}
              >
                Settings
              </NavOptionsButton>
              <NavOptionsButton
                leave={category === "LogOut"}
                onClick={handleLogOut}
                value="LogOut"
                active={false}
                theme={theme}
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

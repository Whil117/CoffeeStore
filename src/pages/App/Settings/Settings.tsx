import { FC, useEffect, useState } from "react";
import Nav from "../../../components/Nav/Nav";
import ThemeButton from "../../../components/ThemeButton/ThemeButton";
import { SettingsContainer, SettingsMain, SettingsOptions } from "../../../styles/Settings/SettingsStyle";

const Settings: FC = () => {
  const [theme, setTheme] = useState('light');
useEffect(() => {
    setTheme(localStorage.getItem("themew") || "light")
}, [])
  useEffect(() => {
      localStorage.setItem('themew',theme)
  }, [theme])

  return (
    <SettingsMain >
      <Nav
        mode={false}
        coins={0}
        setcoins={0}
        username={""}
        ModeCoins={false}
        theme={theme}
      />
      <SettingsContainer theme={theme}>
        <h3>Setting</h3>
        <SettingsOptions>
          <li>
              Mode Theme: 
            <ThemeButton setTheme={setTheme} theme={theme} />
          </li>
        </SettingsOptions>
      </SettingsContainer>
    </SettingsMain>
  );
};

export default Settings;

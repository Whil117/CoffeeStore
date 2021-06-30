import React from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

import bgLogo from "../../../../public/Images/bglogo.png";
import { MainLoginNav, MainLogoBg } from "../../../styles/MainLogin/MainLoginStyle";

const MainLogin: React.FC = () => {
  const router = useRouter()
  return (
    <main>
      <MainLoginNav>
        <h1>Coffee Shop</h1>
        <button type="button" onClick={() => router.push('./App/Login/Login')}>Log in</button>
      </MainLoginNav>
      <MainLogoBg>
        <Image src={bgLogo} alt="bglogo" />
      </MainLogoBg>
    </main>
  );
};

export default MainLogin;

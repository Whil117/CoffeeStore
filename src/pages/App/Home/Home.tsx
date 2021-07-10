/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import { HomeArt, HomeMain } from "../../../styles/Home/HomeStyle";
import logo1 from '../../../../public/Images/1.jpg'

interface Props {
  theme:string
}
const Home:FC<Props> = ({theme}) => {
  const router = useRouter();
  return (
    <HomeMain theme={theme} >
      <HomeArt theme={theme}>
          <h2>The Coffee you need</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
            recusandae, deserunt corrupti hic totam harum quas voluptatibus
            tenetur vitae.
            <br />
             eos similique ad officiis doloremque deleniti animi!
            Quibusdam, velit voluptas?
          </p>
          <button onClick={() => router.replace("/App/Sign/Sign")}>
            Let’s Start to CoffeeStore
          </button>
      </HomeArt>
        <Image src={logo1} alt="bglogo" />
    </HomeMain>
  );
};

export default Home;

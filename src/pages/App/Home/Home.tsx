/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/router";
import { HomeArt, HomeMain } from "../../../styles/Home/HomeStyle";

const Home: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <HomeMain>
        <HomeArt>
          <div>
            <h2>The Coffee you need</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam odio
              recusandae, deserunt corrupti hic totam harum quas voluptatibus
              tenetur vitae eos similique ad officiis doloremque deleniti animi!
              Quibusdam, velit voluptas?
            </p>
            <button onClick={() => router.push("/")}>Let’s Start to CoffeeStore</button>
          </div>
        </HomeArt>
        <div>
          <img src="Images/1.jpg" alt="bglogo" />
        </div>
      </HomeMain>
    </>
  );
};

export default Home;

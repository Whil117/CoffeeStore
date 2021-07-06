/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import Form from "../../../components/Form/Form";
import BackButton from "../../../../public/Images/arrow.svg";
import { SignButton, SignInfo, SignMain } from "../../../styles/SignUp/SignUpStyle";

interface Count {
  username: string;
  password: string;
}
const User = {
  username: "",
  password: "",
};

const SignUp: React.FC = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleChange = (evt: any) => {
    setUser({
      ...user,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  const PostUser = (url: string) => {
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((data) => {
        const userData = JSON.stringify(data);
        localStorage.setItem("token", userData);
        console.log(userData);
      });
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    console.log('send')
    // if (localStorage.getItem("token")) {
    //   const userData = JSON.parse(localStorage.getItem("token") || "{}");
    //   localStorage.setItem(
    //     "token",
    //     JSON.stringify({
    //       ...userData,
    //       auth: true,
    //     })
    //   );
    //   setTimeout(() => {
    //     router.push("/");
    //   }, 2000);
    // } else {
    //   PostUser("http://localhost:8000/register");
    //   setTimeout(() => {
    //     router.push("/");
    //   }, 2000);
    // }
  };
  const handleModeSign = () => {
    if (show) {
      setShow(false);
      setUser(User);
    } else {
      setShow(true);
      setUser(User);
    }
  };
  return (
    <SignMain>
      {show ? (
        <img src="/Images/1.jpg" alt="logo1" />
      ) : (
        <img src="/Images/2.jpg" alt="logo1" />
      )}
      <SignInfo>
        <div>
          <button onClick={() => router.back()}>
            <Image src={BackButton} alt="back" />
          </button>
        </div>
        <div>
          {show ? (
            <Form
              user={user}
              btnname="Sign Up"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          ) : (
            <Form
              user={user}
              btnname="Sign In"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
          <SignButton onClick={handleModeSign}>
            {show ? "Sign In" : "Sign Up"}
          </SignButton>
        </div>
      </SignInfo>
    </SignMain>
  );
};

export default SignUp;

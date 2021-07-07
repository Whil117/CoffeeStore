/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Form from "../../../components/Form/Form";
import BackButton from "../../../../public/Images/arrow.svg";
import {
  SignButton,
  SignInfo,
  SignMain,
} from "../../../styles/SignUp/SignUpStyle";

interface Count {
  username: string;
  password: string;
}
const User = {
  username: "",
  password: "",
};

const SignUp: React.FC = () => {
  const [user, setUser] = useState<Count>({
    username: "",
    password: "",
  } as Count);
  const [show, setShow] = useState(false);

  const router = useRouter();

  const handleChange = (evt: any) => {
    setUser({
      ...user,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  const useFetch = (url: string) => {
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
        console.log(data);
        router.replace('/App/Main/Main')
        localStorage.setItem('token',data?.token)
      })
      .catch(error=>console.log(error))
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    if (show) {
      useFetch('https://coffeeapi11.herokuapp.com/signin')
    }else{
      useFetch('https://coffeeapi11.herokuapp.com/signup')
    }
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
        <img src="/Images/2.jpg" alt="logo1" />
      ) : (
        <img src="/Images/1.jpg" alt="logo1" />
      )}
      <SignInfo>
        <div>
          <button onClick={() => router.push("/")}>
            <Image src={BackButton} alt="back" />
          </button>
        </div>
        <div>
          {show ? (
            <Form
              user={user}
              btnname="Sign In"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          ) : (
            <Form
              user={user}
              btnname="Sign Up"
              handleSubmit={handleSubmit}
              handleChange={handleChange}
            />
          )}
          <SignButton onClick={handleModeSign}>
            {show ? "Sign Up" : "Sign In"}
          </SignButton>
        </div>
      </SignInfo>
    </SignMain>
  );
};

export default SignUp;

/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Form from "../../../components/Form/Form";
import BackButton from "../../../../public/Images/arrow.svg";
import { LoginInfo, LoginMain } from "../../../styles/SignUp/SignUpStyle";

interface Count {
  username: string;
  password: string;
  repeatPassword: string;
}

const SignIn: React.FC = () => {
  const [count, setCount] = useState<Count>({} as Count);
  const [showError, setShowError] = useState(false);

  const router = useRouter();

  const handleChange = (evt: any) => {
    setCount({
      ...count,
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
      body: JSON.stringify(count),
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
    if (localStorage.getItem("token")) {
      const userData = JSON.parse(localStorage.getItem("token") || "{}");
      localStorage.setItem(
        "token",
        JSON.stringify({
          ...userData,
          auth: true,
        })
      );
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      PostUser("http://localhost:8000/register");
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  };
  console.log(count)
  return (
    <LoginMain>
      <img src="/Images/1.jpg" alt="logo1" />
      <LoginInfo>
        <div>
          <button onClick={() => router.back()}>
            <Image src={BackButton} alt="back" />
          </button>
        </div>
        <div>
          <h1>Sign In</h1>
          <Form
            count={count}
            btnname="Sign Up"
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            showError={showError}
          />
          <Link href="/">
            <a>Sign Up</a>
          </Link>
        </div>
      </LoginInfo>
    </LoginMain>
  );
};

export default SignIn;

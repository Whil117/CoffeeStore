/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import Form from "../../../components/Form/Form";
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
  const [user, setUser] = useState<Count>(User as Count);
  const [show, setShow] = useState(false);
  const [events, setEvents] = useState("");

  const router = useRouter();

  const handleChange = (evt: any) => {
    setUser({
      ...user,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  const useFetch = (site: string) => {
    const url = `https://coffeeapi11.herokuapp.com/${site}`;
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
        if (data.token) {
          localStorage.setItem("token", data?.token);
          router.replace("/App/Main/Main");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    if (show) {
      if (user.username && user.password) {
        useFetch("signin");
        setEvents("send");
      } else {
        setEvents("form");
      }
    } else {
      if (user.username && user.password) {
        useFetch("signup");
        setEvents("send");
      } else {
        setEvents("form");
      }
    }
  };
  const handleModeSign = () => {
    const ModeShow = show
      ? (setShow(false), setUser(User), setEvents(""))
      : (setShow(true), setUser(User), setEvents(""));
    return ModeShow;
  };

  return (
    <SignMain>
      {show ? (
        <img src="/Images/2.jpg" alt="img2" />
      ) : (
        <img src="/Images/1.jpg" alt="img1" />
      )}
      <SignInfo>
        <div>
          <button onClick={() => router.replace("/")}>
            <img src="/Images/arrow.svg" alt="back" />
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
          {(events === "form" && (
            <p className="err">
              <b>Complete the form</b>
            </p>
          )) ||
            (events === "send" && (
              <p className="send">
                <b>Send Data</b>
              </p>
            ))}
        </div>
      </SignInfo>
    </SignMain>
  );
};

export default SignUp;

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router'

import { LoginApp, LoginBackDiv, LoginDiv, LoginForm, LoginInfo } from "../../../styles/Login/LogiStyle";
import Logo from "../../../../public/Images/logo1.png";
import BackButton from '../../../../public/Images/arrow.svg'

const Login: React.FC = () => {
  const [count, setCount] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false)
  const router = useRouter()

  const handleChange = (evt: {
    currentTarget: { name: string; value: string };
  }) => {
    setCount({
      ...count,
      [evt.currentTarget.name]: evt.currentTarget.value,
    });
  };

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    if (count.username === "" || count.password === "") {
        setShow(true)
    } else {
        setShow(false)
        router.push('/')
        localStorage.setItem('mycount', JSON.stringify(count))
''    }
  };
  
  return (
    <LoginApp>
      <LoginDiv>
        <div>
          <Image src={Logo} alt="logo1" />
        </div>
        <LoginInfo>
          <h1>Coffee Shop</h1>
          <LoginForm onSubmit={handleSubmit}>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="username"
              value={count.username}
              onChange={handleChange}
              id="name"
            />
            <label htmlFor="pass">Password</label>
            <input
              type="password"
              name="password"
              value={count.password}
              onChange={handleChange}
              id="pass"
            />
            <button type="submit">Log in</button>
            {show && <p><b>Rellena el formulario</b></p>}
          </LoginForm>
        </LoginInfo>
        <LoginBackDiv>
          <button onClick={()=>router.back()}><Image src={BackButton} alt="back"/></button>
        </LoginBackDiv>
      </LoginDiv>
    </LoginApp>
  );
};

export default Login;

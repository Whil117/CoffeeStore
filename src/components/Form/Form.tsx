import { FC } from "react";
import { SignForm } from "../../styles/SignUp/SignUpStyle";

interface Props {
  btnname: string;
  handleSubmit: any;
  handleChange: any;
  user: {
    username: string;
    password: string;
  };
}

const Form: FC<Props> = ({
  user,
  btnname,
  handleSubmit,
  handleChange,
}) => {
  return (
    <>
      <h1>{btnname}</h1>
      <SignForm onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
          id="name"
        />
        <label htmlFor="pass">Password</label>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          id="pass"
        />
        <button type="submit">{btnname}</button>
      </SignForm>
    </>
  );
};

export default Form;

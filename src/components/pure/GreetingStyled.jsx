import { useState } from "react";

const loogedStyle = {
  color: "white",
};

const unloogedStyle = {
  color: "tomato",
  fontWeight: "bold",
};

const GreetingStyled = (props) => {
  const [logged, setLogged] = useState(false);

  const changeLogin = () => setLogged(!logged);
  const greetingUser = <p>Hola, {props.name}</p>;
  const pleaseLogin = <p>Please Login</p>;

  return (
    <div style={logged ? loogedStyle : unloogedStyle}>
      {logged ? greetingUser : pleaseLogin}
      <button onClick={changeLogin}>{logged ? "Logout" : "Login"}</button>
    </div>
  );
};

export default GreetingStyled;

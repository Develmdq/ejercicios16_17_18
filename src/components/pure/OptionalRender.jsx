import { useState } from "react";

const OptionalRender = () => {
  const [access, setAccess] = useState(true);

  const updateAccess = () => setAccess(!access);

  let optionalButton;
  if (access) {
    optionalButton = <button onClick={updateAccess}>Logout</button>;
  } else {
    optionalButton = <button onClick={updateAccess}>Login</button>;
  }
  return (
    <>
      <h1>{access.toString()}</h1>
      {optionalButton}
    </>
  );
};

export default OptionalRender;

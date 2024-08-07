import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect , isAuthenticated} = useAuth0();

  return ( !isAuthenticated && <button type="button" className="btn btn-primary btn-lg" onClick={() => loginWithRedirect()}>Log In</button>
)};

export default LoginButton;
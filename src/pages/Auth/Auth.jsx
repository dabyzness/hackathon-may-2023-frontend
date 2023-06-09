import { useState } from "react";
import LoginForm from "../../components/Auth/LoginForm";
import SignupForm from "../../components/Auth/SignupForm";

const Auth = (props) => {
  const { handleSignup, handleLogin } = props;

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <button onClick={(e) => setIsLogin(true)}>Click for Login</button>
        <button onClick={(e) => setIsLogin(false)}>Click for Signup</button>
      </div>
      {isLogin ? (
        <LoginForm handleLogin={handleLogin} setIsLogin={setIsLogin} />
      ) : (
        <SignupForm handleSignup={handleSignup} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default Auth;

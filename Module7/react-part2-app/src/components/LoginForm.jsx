import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useMyThemeContext } from "../context/MyThemeContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  // destructure the context values passed via UserProvider

  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);
  const { loginAttempts, setLoginAttempts } = useState(0);
  const { currentUser, handleUpdateUser } = useUserContext();

  const { theme } = useMyThemeContext();
  const loginOK = currentUser.email;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
      setLoginAttempts(loginAttempts + 1);
    } else if (userEmail.length < 8) {
      setSubmitResult("Email address must be at least 8 characters long");
      setLoginAttempts(loginAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setLoginAttempts(loginAttempts + 1);
    } else {
      setSubmitResult("Successful login.");
      setLoginOK(true);
      handleUpdateUser({ email: userEmail, passwrod: userPassword }); // context function
    }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }

  if (loginAttempts >= 5) return <p>Attempts exceeded.</p>;
  if (loginOK)
    if (currentUser.email)
      return (
        <>
          <p>Welcome {currentUser.email}!</p>
          <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
      );

  /* otherwise render same form as previously, no changes*/
}

export default LoginForm;

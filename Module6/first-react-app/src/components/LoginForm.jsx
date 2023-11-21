import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

// new state value for showing submission messages to user
const [submitResult, setSubmitResult] = useState("");

const [loginAttempts, setLoginAttempts] = useState(0);

let loginOK = userPassword.length >=5 && userEmail.length >=8 && userPassword != userEmail;

const handleSubmit = (e) => {
  e.preventDefault(); // prevent page reloading on form submit

  // add some password validation
  if (userPassword.length < 5) {
    setSubmitResult("Password must be at least 5 characters long");
   setLoginAttempts(loginAttempts +1 );
  } else if (userPassword === userEmail) {
    setSubmitResult("Password must not match email address");
    setLoginAttempts(loginAttempts +1 );
  } else {
    setSubmitResult("Successful login.");
    setLoginAttempts(loginAttempts == 0);
    loginOK=true;
  }
};
  return (
    <div className="LoginForm componentBox">
        {(loginAttempts < 5 && !loginOK) ?
      <form onSubmit={handleSubmit}>
        
      <div className="formRow">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
            onChange handler uses event param e to access target value.
            Whenever user types, new value is stored in state. */}
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => {
              console.log(e.target.value);
              setUserEmail(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
      </div>
      <button>Log In</button>
        <p>{submitResult}</p>
      </form>
      : <p>Failed 5 times, ha? Go away you hackers. </p>}
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;

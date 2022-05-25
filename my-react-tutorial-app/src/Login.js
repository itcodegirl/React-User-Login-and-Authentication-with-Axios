import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import axios from "./api/axios";
const LOGIN_URL = '/auth';


const Login = () => {
  const { setAuth } = useContext(AuthContext);
  //useRef - set the focus on the first input when it loads
  //errRef - set the focus on the errors for a screen reader
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState();
  const [password, setpassword] = useState();
  const [errMsg, setErrorMsg] = useState();
  const [success, setSuccess] = useState(false);

  //we are putting focus on
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [user, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();
  
        try {
            const reponse = await axios.post(LOGIN_URL,
                JSON.stringify({ user, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            setUser("");
            setpassword("");
            setSuccess(true);
            } catch (err) {
            
        }
        
    } 

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="./">Go to Home</a>
            {/* ***May need to update href*** */}
          </p>
        </section>
      ) : (
        <section>
          {/* this will display any error message we get.
            aria-live is what a screen reader would read. */}
          <p>
            {" "}
            ref={errRef} className={errMsg ? "errmsg" : "offscreen"}{" "}
            aria-live="assertive"{errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              required
            />
            <button>Sign In</button>
          </form>
          <p>
            Need an Account?
            <br />
            <span className="line">
              {/* put tnphe router link here */}
              <a href="./">Sign Up</a>
              {/* ***May need to update href*** */}
            </span>
          </p>
        </section>
      )}
    </>
  );
};
export default Login;

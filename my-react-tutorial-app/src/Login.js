import { useRef, useState, useEffect } from 'react';

const Login = () => {
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
    }, [])
    
    useEffect(() => {
        setErrorMsg('');
    }, [user, password])

    return (
      <section>
        {/* this will display any error message we get.
            aria-live is what a screen reader would read. */}
        <p>
          {" "}
          ref={errRef} className={errMsg ? "errmsg" : "offscreen"}{" "}
          aria-live="assertive"{errMsg}
        </p>
        <h1>Sign In</h1>
        <form>
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
            ref={userRef}
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            required
          />
        </form>
      </section>
    );
};
export default Login
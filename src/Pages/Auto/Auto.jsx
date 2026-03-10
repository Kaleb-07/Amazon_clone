import React, { useState, useContext } from "react";
import Classes from "./SignUp.module.css";
import { Link, useNavigate,useLocation } from "react-router-dom";
import { auth } from "../../Utility/firebase"; 
// named import
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from "firebase/auth"; // you can use this later
import {DataContext} from "../../components/DataProvider/DataProvider";
import {Type} from "../../Utility/action.type";
import {ClipLoader} from "react-spinners";

function Auto() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false,
  });
  const [{user},dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();

  console.log(navStateData)

  console.log("Current user:", user);

  const autoHandler = (e) => {
    e.preventDefault();
    // TODO: Firebase sign-in logic here
    console.log(e.target.name);
    if (e.target.name === "signin") {
      setLoading({...loading,signIn:true});
      // Sign-in logic
      signInWithEmailAndPassword(auth, email, password).then((userInfo) => {
        // console.log("Signed in user:", userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user,
        })
        setLoading({...loading,signIn:false});
        navigate(navStateData?.state?.redirect || "/");
      }).catch((err) => {
        setError(err.message);})
    } else if (e.target.name === "signup") {
      setLoading({...loading,signUp:true});
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {
        // console.log("Created user:", userInfo);
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user,
        })
        setLoading({...loading,signUp:false});
        navigate(navStateData?.state?.redirect || "/");
      }).catch((err) => {
        setError(err.message);
        setLoading({...loading,signUp:false});
      })
    }
    };

  return (
    <section className={Classes.login}>
      {/* Logo link */}
      <Link to={!user && "/auto"}> 
        <img src="data:image/jpeg;base64,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5vyi6Ocxsbf82+PU0FaD0HpKk0bYI7bSu7WUntKicjBlkPU47h0AHgPHJUjRBm7iHw+1Zc9a3euoLLNNTT1BfHI17MOGB61f+maaai05aqWpZ2c8FHDHIzIPK5rACNvWF0kQZdoeG2sWahp532KdsTaxry4yMwBz5z5y1EiICIiAiIgIiICIiAiIgLkXWwU1eXSM/Uzn0mjZ3tC66LVmwY81dzJGsNmPLfFbepOkoTJFebL5r5BCPSYeZnwPRfen1XVM2ngilHi0lp/NS9eCqs9vqiTLTMDj6TPmn7FybdG7Rh/VyzEd09XPovjbMOT8+P1jn/XOi1XSO/awTMPqwR969DdS209XyN9sZXlm0nTOyYamVnqcA4fkvO7SUno1rT7Y8fmvH1Ol6cN2Le3zD1udH27Zj3+JdI6ltg6SvPsjK+MmqqFv7OKd5/hA/NeNukZPSrWj2RZ/NemHSlK05mqJZPU3DQsxk6Xvw3IjnzliadH1/tM8+TyVGrJiCKelYz1vcXfZsvlEL5ef6x8cDvS8xuPduVI6W00FIQYaZnMPSd84/Er3LbXYNpy/s5ZmO6OHPs8TteHH+HH6y5NutFJaI3TvPPIxpLpXDzRjfA7l59OUskktRdKhuH1BPZg9zSc/6fBd1zQ5pa4AtIwQe9fqsrsWOtqbsaVr1R496adpvatteM27fAREVicREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==" alt="Amazon Logo" />
      </Link>

      {/* login form */}
      <div className={Classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small
            style={{
              padding: "5px",
              textAlign: "center",
              color: "red",
              fontWight: "bold",
            }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" 
            onClick={autoHandler}
            name="signin"
            className={Classes.login_signInButton}>
            {
              loading.signIn ? <ClipLoader color="#ffffff" size={15} /> :("Sign In")
            }
              </button>
        </form>

        <p>
          By signing-in you agree to Amazon fake clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        <button type="submit" 
          onClick={autoHandler}  
           name="signup"
          className={Classes.login_registerButton}>
            {
              loading.signUp ? <ClipLoader color="#000000" size={15} /> :("Create your Amazon Account")
            }
        </button>
        {
          error &&
            <small className={Classes.error}>
              {error}
            </small>
        }
      </div>
    </section>
  );
}

export default Auto;

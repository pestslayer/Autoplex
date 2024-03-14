import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, Providers } from "../config/firebase";
import './../index.css'

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const checkSignInStatus = () => {
      const signedIn = localStorage.getItem("isSignedIn") === "true";
      setIsSignedIn(signedIn);
    };

    checkSignInStatus();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("isSignedIn");
        setIsSignedIn(false); // Update the state to reflect sign-out
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  const handleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      if (response.user) {
        localStorage.setItem("isSignedIn", "true");
        setIsSignedIn(true); // Update the state to reflect sign-in
      }
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark">
        <div className="container-fluid">
          <Link to='/' className="nav-link">
            JonJon AutoPlex
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
            > 
            <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              {isSignedIn && (
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              )}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    {isSignedIn ? (
                      <Link to="/" onClick={handleSignOut} className="nav-link">
                        Sign Out
                      </Link>
                    ) : (
                      <Link to="/" onClick={handleSignIn} className="nav-link">
                        Sign In
                      </Link>
                    )}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

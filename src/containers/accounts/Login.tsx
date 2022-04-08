import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth.context";

const Auth = () => {
  const [auth, setAuth] = useState({ authenticated: false });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.authenticated) {
      navigate("/");
    }
  }, [auth]);

  const placeholder = (value: string) => {
    if (value) {
      return "auth-input-placeholder auth-input-placeholder-short";
    }
    return "auth-input-placeholder";
  };

  const inputText = (value: string) => {
    if (value) {
      return "auth-input auth-input-short";
    }
    return "auth-input";
  };

  const login = ($event: any) => {
    $event.preventDefault();
    axios
      .post("http://localhost:5000/auth/login", {
        username,
        password,
      })
      .then((response) => {
        setAuth(response.data);
      });
  };

  return (
    <AuthContext.Provider value={auth}>
      <div className='auth-wrapper'>
        <div className='auth'>
          <div className='auth-card'>
            <div className='auth-logo-wrapper'>
              <img
                className='auth-logo'
                src=' https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
                alt='Instagram original logo'
              />
            </div>
            <form className='auth-inputs'>
              <div className='auth-input-wrapper'>
                <label className='auth-input-label'>
                  <span className={placeholder(username)}>
                    Nom d'utilisateur
                  </span>
                  <input
                    className={inputText(username)}
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
              </div>
              <div className='auth-input-wrapper'>
                <label className='auth-input-label'>
                  <span className={placeholder(password)}>Mot de passe</span>
                  <input
                    className={inputText(password)}
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <button
                className='primary-button'
                disabled={!username || !password}
                onClick={($event) => login($event)}
              >
                Connexion
              </button>
            </form>
          </div>
          <div className='signup-card'>
            <p className='signup-text'>
              Vous n'avez pas de compte ?{" "}
              <Link to='/accounts/signup' className='signup-link'>
                Inscrivez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthContext.Provider>
  );
};

export default Auth;

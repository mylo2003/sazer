import { createContext, useEffect, useState } from "react";

const SazerContext = createContext();

function SazerProvider({ children }) {

  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoader(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  //Login 

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'camilo' && password === 'camilo') {
      setIsLoggedIn(true);
      setError('');
    } else {
      setError('Wrong Credentials');
    }
  };

  const [isReady, setIsReady] = useState(false);

  return (
    <SazerContext.Provider
      value={
        {
          username,
          setUsername,
          password,
          setPassword,
          isLoggedIn,
          setIsLoggedIn,
          error,
          setError,
          isReady,
          setIsReady,
          handleLogin,
          isLoader,
          setIsLoader
        }
      }
    >
      {children}
    </SazerContext.Provider>
  );
}

export { SazerContext, SazerProvider };

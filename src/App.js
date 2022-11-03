import React, { useEffect, useState } from "react";
import './app.scss';
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthContext } from "./components/context";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);

  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}
export default App;
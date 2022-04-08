import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Accounts from "./containers/accounts/Accounts";
import Login from "./containers/accounts/Login";
import Signup from "./containers/accounts/Signup";
import Timeline from "./containers/timeline/Timeline";
import AuthContext from "./contexts/auth.context";

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  return (
    <div className='App'>
      <AuthContext.Consumer>
        {(value) => {
          return value.authenticated ? <Header /> : <></>;
        }}
      </AuthContext.Consumer>
      <BrowserRouter>
        <Routes>
          <Route index element={<Timeline />}></Route>
          <Route path='accounts' element={<Accounts />}>
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<Signup />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./components/Login";
import BubblePage from './components/BubblePage';

import "./styles.scss";
import "../node_modules/bulma/css/bulma.min.css";
import RiseLoader from "react-spinners/RiseLoader";

const Spinner = (
  <RiseLoader
    size={70}
    margin={1}
    color={'#ffffff'}
    loading={true}
  />
);


function App() {
  const [isLoading, setIsloading] = useState(false);

  return (
    <Router>
      <div className="App">
        <header className="container py-6">
          <h1 className="title is-1 has-text-white is-half is-inline-block">Bubbles</h1>
        </header>
        <div className="container is-flex is-justify-content-space-center is-align-items-center mt-6">
          {isLoading ?
            <div className="container mt-5 pt-4">
              {Spinner}
            </div> :
            <>
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={BubblePage}  />
            </>
          }
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import "./styles.scss";
import "../node_modules/bulma/css/bulma.min.css";

function App() {

  return (
    <Router>
      <div className="App">
        <header className="container py-6">
          <h1 className="title is-1 has-text-white is-half is-inline-block">Bubbles</h1>
        </header>
        <div className="container is-flex is-justify-content-center is-align-items-center mt-6">
          <Route exact path="/login" component={Login} />
          {/*
            Build a PrivateRoute component that will
            display BubblePage when you're authenticated
          */}
          <PrivateRoute exact path="/" component={BubblePage}  />
        </div>
      </div>
    </Router>
  );
}

export default App;

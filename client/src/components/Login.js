import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { postLogin } from '../api/postLogin';
import { isLogin } from "../utils/isLogin";

const intialFormValues = {
  username: "",
  password: ""
};

const Login = () => {
  const [formValues, setFormValues] = useState(intialFormValues);
  const { push } = useHistory();
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  // Runs on form submit
  const onSubmit = (evt) => {
    evt.preventDefault();

    const credentials = { username: formValues.username, password: formValues.password };
    postLogin({ ...credentials })
      .then(resp => {
        localStorage.setItem('token', resp.data.payload);
        push('/');
      })
      .catch(err => {
        console.log(err.response);
      })
  };

  // Runs when the inputs change values
  const onChange = (evt) => {
    evt.preventDefault();
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  // If the user is already logged in, let's push them to the dashboard/home route '/'
  if (isLogin()) {
    push('/');
  };

  return (
    <div className="box p-6">
      <h2 className="title is-3">Login</h2>
      <div className="container mx-6">
        <form onSubmit={onSubmit}>
          <div className="field has-text-left">
            <label className="label is-inline-block p-0">Username:</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" name="username" value={formValues.username} onChange={onChange} type="text" required />
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
          </div>
          <div className="field has-text-left mt-1">
            <label className="label p-0">Password:</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" name="password" value={formValues.password} onChange={onChange} type="password" required />
              <span className="icon is-small is-left">
                <i className="fas fa-key"></i>
              </span>
            </div>
          </div>
          <div className="field is-grouped container mt-5">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
            <div className="control">
              <button className="button is-link is-light">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

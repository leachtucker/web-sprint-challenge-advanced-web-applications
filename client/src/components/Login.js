import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div className="box p-6">
      <h2 className="title is-3">Login</h2>
      <div className="container mx-6">
        <form>
          <div className="field has-text-left">
            <label className="label is-inline-block p-0">Email:</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Text input" required />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="field has-text-left mt-1">
            <label className="label p-0">Password:</label>
            <div className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Text input" required />
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

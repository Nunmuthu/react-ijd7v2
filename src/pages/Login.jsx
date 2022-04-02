import React from 'react';
import '/Login.css';
export default function Login() {
  return (
    <div className="loginbox">
      <div className="INPUTGROUP">
        <h2>LOGIN</h2>
        <label Htmlfor="LOGIN USER">USER NAME</label>
        <input
          type="TEXT"
          name="LOGIN USER"
          placeholder="/@mail"
          id="LOGIN"
          required
        />
      </div>
      <div className="INPUTGROUP">
        <label Htmlfor="LOGINPASSWORD">PASSWORD</label>
        <input
          type="password"
          placeholder="*******"
          Htmlfor="LOGIN PASSWORD"
          required
        />
      </div>

      <div className="INPUTGROUP">
        <h2>
          <input type="submit" className="submit" />
        </h2>
        <h5>
          <a href="signin.html" target="">
            forget password
          </a>
        </h5>
      </div>
    </div>
  );
}

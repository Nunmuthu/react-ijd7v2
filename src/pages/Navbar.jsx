import React from 'react';
import './Navbar.css';
export function Navbar() {
  return (
    <div classname="sticky">
      <ul htmlfor="menu">
        <li> home </li>
        <li>
          <a href="#" target="#">
            {' '}
            Products
          </a>
        </li>
        <li>
          <a href="./login.html">Login</a>{' '}
        </li>
        <li>
          <a href="./signin.html">Signup</a>
        </li>
        <li>
          <a href="./contact as.html">Contactus</a>
        </li>
        <li>
          <a href="./About as.html"> About as</a>
        </li>
      </ul>
    </div>
  );
}

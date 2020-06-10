import React from 'react';
import style from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">Router App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className={"navbar-nav ml-auto "+style.nav}>
            <NavLink to="/" activeClassName="active" exact={true}>
              <li className="nav-item nav-link">Home Page</li>
            </NavLink>
            <NavLink to="/employees" activeClassName="active">
              <li className="nav-item nav-link">Employees</li>
            </NavLink>
            <NavLink to="/add-employee" activeClassName="active" exact={true}>
              <li className="nav-item nav-link">Add Employee</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav

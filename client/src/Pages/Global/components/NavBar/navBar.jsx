import React from 'react'
import { Link } from "react-router-dom";
import Lo from "../../assets/img/logo2x.png"
import "../../scss/navBar.scss"
const NavBar = () => {

      return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fh_navbar" >
                  <Link className="navbar-brand" to="/">  <img
                        className="logo_size"
                        src={Lo}
                  ></img></Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                              <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                              <Link className="nav-item nav-link" to="/SignUp">SignUp</Link>
                              <Link className="nav-item nav-link" to="/">Login</Link>
                        </div>
                  </div>
            </nav>
      )
}


export default NavBar

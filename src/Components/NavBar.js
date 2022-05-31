/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Sumi</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Wishlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li> 
      </ul>
      <div className="buttons">
              <a href="" className="btn btn-outline-light">
                <i className="fa fa-sign-in me-1"></i>Login
              </a>
              <a href="" className="btn btn-outline-light ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <a href="" className="btn btn-outline-light ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Cart (0)
              </a>
            </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar
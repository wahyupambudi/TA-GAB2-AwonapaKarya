import React from 'react'

const Header = () => {
  return (
    <div>
{/* Navbar */}
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="../../index3.html" className="nav-link">Home</a>
    </li>
    <li className="nav-item d-none d-sm-inline-block">
      <a href="#" className="nav-link">Contact</a>
    </li>
  </ul>
  {/* Right navbar links */}
  <ul className="navbar-nav ml-auto">
    <li className="nav-item">
      <a className="nav-link" data-widget="fullscreen" href="#" role="button">
        <i className="fas fa-expand-arrows-alt" />
      </a>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i className="fas fa-th-large" />
      </a>
    </li>
  </ul>
</nav>
{/* /.navbar */}


    </div>
  )
}

export default Header
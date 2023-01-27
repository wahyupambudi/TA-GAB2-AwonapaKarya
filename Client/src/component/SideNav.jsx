import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { LogOut, reset } from "../feature/authSlice";

const SideNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="" className="brand-link">
    <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Inventaris Sekolah</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block"></a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item">
          <a href="" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <NavLink to={"/dashboard"}>
            <p>
              Dashboard
            </p>
            </NavLink>
          </a>
        </li>

        {user && user.user.role === "admin" && (
        <li className="nav-item">
          <a className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <NavLink to={"/users"}>
          <p>
              Data User
          </p>
          </NavLink>
          </a>
        </li>
        )}

        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-copy" />
            <p>
              Belanja
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <NavLink to={"/barang"}>
                <p>Barang Modal</p>
                </NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a href="../layout/top-nav-sidebar.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Barang dan Jasa</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
        </aside>

    </div>
  );
};

export default SideNav;
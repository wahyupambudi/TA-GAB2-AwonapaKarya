import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-2 has-shadow">
  <p className="menu-label">
    Data User
  </p>

  <ul className="menu-list">
  <li><NavLink to={"/dashboard"}>Dashboard</NavLink></li>

    <li>
      <a className="is-active">Manage Users</a>
      <ul>
        <li><a>Admin</a></li>
        <li><a>Operator</a></li>
        <li><a>Ketua Jurusan</a></li>
      </ul>
    </li>
  </ul>

  <p className="menu-label">
    BELANJA
  </p>
  <ul className="menu-list">
    <li><NavLink to={"/modal"}>Barang Modal</NavLink></li>
    <li><NavLink to={"/modal"}>Barang Habis Pakai </NavLink></li>
  </ul>
</aside>
    </div>
  )
}

export default Sidebar

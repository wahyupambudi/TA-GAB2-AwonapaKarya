import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside class="menu pl-2 has-shadow">
  <p class="menu-label">
    General
  </p>
  <ul class="menu-list">
    <li><NavLink to={"/dashboard"}><IoHome/> Dashboard</NavLink></li>
  </ul>
  <p class="menu-label">
    Administration
  </p>
  <ul class="menu-list">
    <li>
      <a class=""><IoPerson/> Manage Users</a>
      <ul>
        <li><NavLink to={"/admin"}>Admin</NavLink></li>
        <li><NavLink to={"/operator"}>Operator</NavLink></li>
        <li><NavLink to={"/kajur"}>Ketua Jurusan</NavLink></li>
      </ul>
    </li>
  </ul>
  <p class="menu-label">
    Belanja
  </p>
  <ul class="menu-list">
    <li><NavLink to={"/barangm"}>Barang Modal</NavLink></li>
    <li><a>Habis Pakai</a></li>
  </ul>
</aside>
    </div>

    
  )
}
export default Sidebar

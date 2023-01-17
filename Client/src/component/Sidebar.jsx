import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoHome, } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

const Sidebar = () => {
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
  {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}
  <p class="menu-label">
    Belanja
  </p>
  <ul class="menu-list">
    <li><NavLink to={"/barangs"}>Barang Modal</NavLink></li>
    <li><NavLink to={"/barang"}>Habis Pakai</NavLink></li>
  </ul>
</aside>
    </div>

    
  )
}
export default Sidebar

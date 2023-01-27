import React from 'react'
//import axios from 'axios';
///import jwt_decode from "jwt-decode";
//import { useNavigate } from 'react-router-dom';
import Header from '../component/Header'
import SideNav from '../component/SideNav'

const Layout = ({ children }) => {
  return (
    //Menggabungkan Beberapa Elemen
    <React.Fragment>
      <Header />
          <SideNav />
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
    </React.Fragment>
  );
};

export default Layout;
import React from "react";
import { useSelector } from "react-redux";


const Welcome = () => {
  //Memanggil user dari global state
  const { user } = useSelector((state) => state.auth);
  return (
    //Menampilkan user beserta Akun yang dimasukan
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
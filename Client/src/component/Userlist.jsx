import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";


const Userlist = () => {
 const [token, setToken] = useState("");
 const [expire, setExpire] = useState("");
 const [users, setUsers] = useState("");

 useEffect(() => {
  RefreshToken();
  getUsers();
 }, []);

 const RefreshToken = async () => {
  try {
    const response = await axios.get("http://localhost:2023/token");
    setToken(response.data.accessToken);
    const decoded = jwt_decode(response.data.accessToken);
    setExpire(decoded.exp);
  } catch (error) {
    if (error.response) {
      // history.push("/");
    }
  }
};

const axiosJWT = axios.create();

axiosJWT.interceptors.request.use(
  async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get("http://localhost:2023/token");
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken);
      setExpire(decoded.exp);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const getUsers = async () => {
  const response = await axiosJWT.get("http://localhost:2023/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  // console.log(response.data.response);
  setUsers(response.data.response);
};

const deleteUser = async (userId) => {
  RefreshToken();
  await axiosJWT.delete(`http://localhost:2023/users/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  getUsers();
};

  return (
    <div>
    {/* Content Wrapper. Contains page content */}
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Data User</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Data User</li>
          </ol>
        </div>
      </div>
    </div>{/* /.container-fluid */}
  </section>
  {/* Main content */}
  <section className="content"/>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
            </div>
          </div>
          {/* /.card */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">DataTable with default features</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
            <Link to="/users/add">
            <button type="button" className="btn btn-primary">Tambah Users</button>
            </Link>
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                    <tr key={user.uuid}>
                    <td>{index + 1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                    <Link>
                    <button type="button" class="btn btn-primary">Edit</button>
                    </Link>
                    <button type="button" class="btn btn-danger">Hapus</button>
                    </td>
                  </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
    </div>
    {/* /.row */}
    </div>
  );
};

export default Userlist;
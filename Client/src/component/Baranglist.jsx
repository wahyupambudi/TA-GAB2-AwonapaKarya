import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Baranglist = () => {
    const [barang, setBarang] = useState([]);

    useEffect(() => {
        getBarang();
    }, []);

    //memanggil data barang
    const getBarang = async () => {
        const response = await axios.get("http://localhost:2023/barang");
        setBarang(response.data);
    };

    //membuat fungsi hapus barang
    const deleteBarang = async (barangId) => {
        await axios.delete(`http://localhost:2023/barang/${barangId}`);
        getBarang();
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
          <h1>Data Barang Modal</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Data Barang</li>
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
            <button type="button" className="btn btn-primary">Tambah Barang</button>
            
            </Link>
              <table id="example1" className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>Spesifikasi</th>
                    <th>Jumlah</th>
                    <th>Kondisi</th>
                    <th>Tanggal</th>
                    <th>Harga</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                    {barang.map((barangs, index) => (
                    <tr key={barangs.uuid}>
                    <td>{index + 1}</td>
                    <td>{barangs.kd_brg}</td>
                    <td>{barangs.nm_brg}</td>
                    <td>{barangs.spek_brg}</td>
                    <td>{barangs.jml_brg}</td>
                    <td>{barangs.kondisi_brg}</td>
                    <td>{barangs.tgl_buy_brg}</td>
                    <td>{barangs.harga_brg}</td>
                    <td>{barangs.user.name}</td>
                    <td>
                    <Link
                  to={`/barang/edit/${barang.uuid}`}
                  className="button is-small is-info"
                    >
                  Edit
                    </Link>
                    <button
                  onClick={() => deleteBarang(barang.uuid)}
                  className="button is-small is-danger"
                    >
                  Delete
                </button>
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

export default Baranglist;
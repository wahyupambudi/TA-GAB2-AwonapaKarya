import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Baranglist = () => {
  const [barangs, setBarangs] = useState([]);

  useEffect(() => {
    getBarangs();
  }, []);

  const getBarangs = async () => {
    const response = await axios.get("http://109.123.238.13:2024/barangs");
    setBarangs(response.data);
  };

  const deleteBarang = async (barangId) => {
    await axios.delete(`http://109.123.238.13:2024/barangs/${barangId}`);
    getBarangs();
  };

  return (
    <div>
        <h1 className="title">BARANG MODAL</h1>
      <h2 className="subtitle">
        DAFTAR BARANG <strong></strong>
      </h2>
      <Link to="/barangs/add" className="button is-primary mb-2">
        Tambah
      </Link>
      
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Kode Barang</th>
            <th>Nama Barang</th>
            <th>Spesifikasi</th>
            <th>Jumlah</th>
            <th>Kondisi</th>
            <th>Tanggal Pembelian</th>
            <th>Harga</th>
            <th>Gambar</th>
          </tr>
        </thead>
        <tbody>
        {barangs.map((barangs, index) => (
          <tr key={barangs.uuid}>
            <td>{index + 1}</td>
            <td>{barangs.kd_brg}</td>
            <td>{barangs.nm_brg}</td>
            <td>{barangs.spek_brg}</td>
            <td>{barangs.jml_brg}</td>
            <td>{barangs.kondisi_brg}</td>
            <td>{barangs.tgl_buy_brg}</td>
            <td>{barangs.harga_brg}</td>
            <td>{barangs}</td>
            <td>{barangs.user.name}</td>
            <td>
            <Link
                  to={`/barangs/edit/${barangs.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBarang(barangs.uuid)}
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
  );
};

export default Baranglist
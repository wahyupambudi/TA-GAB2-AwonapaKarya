import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Barang = () => {
    const [barang, setBarangm] = useState([]);

    useEffect(() => {
      getBarangm();
    }, []);
  
    const getBarangm = async () => {
      const response = await axios.get("http://localhost:2023/barangs");
      setBarangm(response.data);
    };
  
    const deleteBarangm = async (barangId) => {
      await axios.delete(`http://localhost:2023/barangs/${barangId}`);
      getBarangm();
    };

  return (
    <div>
      <h1 className="title">Barang Modal</h1>
      <table className="table is-striped is-fullwidth">
        <thead>
            <tr>
                <th>Id</th>
                <th>Kode Barang</th>
                <th>Nama Barang</th>
                <th>Spesifikasi</th>
                <th>Jumlah Barang</th>
                <th>Tanggal Pembelian</th>
                <th>Harga Barang</th>
            </tr>
        </thead>
        <tbody>
        {barang.map((Barang, index) => (
            <tr key={Barang.uuid}>
              <td>{index + 1}</td>
              <td>{barang.name}</td>
              <td>{barang.price}</td>
              <td>{barang.name}</td>
              <td>
                <Link
                  to={`/products/edit/${barang.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteBarangm(barang.uuid)}
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
  )
}

export default Barang

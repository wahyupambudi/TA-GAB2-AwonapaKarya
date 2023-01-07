import React, { useEffect } from 'react'
//import Layout
import Layout from './Layout'
//import Barang
import Barang from '../component/Barang'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const Barangm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    // Merender Layout ke Halaman Barang
    <div>
    <Layout>
        <Barang />
    </Layout>
    </div>
  );
};

export default Barangm

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../feature/authSlice";
import Layout from './Layout';
import Welcome from '../component/Welcome';


const Dashboard = () => {
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
        <Layout>
        <Welcome />
        </Layout>

    );
};
    export default Dashboard;
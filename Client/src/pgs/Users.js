import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Userlist from '../component/Userlist'
import { getMe } from "../feature/authSlice";
import Layout from './Layout';

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
        navigate("/");
        }
        if (user && user.role !== "admin") {
        navigate("/dashboard");
        }
    }, [isError, user, navigate]);
  return (
    <Layout>
        <Userlist />
    </Layout>
  );
};

export default Users
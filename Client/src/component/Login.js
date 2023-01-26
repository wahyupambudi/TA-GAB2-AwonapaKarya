import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const Auth = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:2023/login', {
                email: email,
                password: password
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div className="container">
  <div className="card card-primary">
    <div className="card-header text-center">
      <h3>Halaman Login</h3>
    </div>
    <div className="card-body">
      <p className="login-box-msg">Silahkan Masukan Akun Anda</p>

      <form onSubmit={Auth} className="box">
      <p className="has-text-centered">{msg}</p>
        <div className="input-group mb-3">
          <input type="email" placeholder="Masukan Email" className="input" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope"></span>
            </div>
          </div>
        </div>
        
        <div class="input-group mb-3">
          <input type="password" className="input" class="form-control" placeholder="Masukan Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock"></span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
          </div>
          <div className="col-4">
            <button className="btn btn-primary btn-block">Masuk</button>
          </div>
         
        </div>
      </form>
    </div>
  </div>
    </div>
  )
}

export default Login
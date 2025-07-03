import React, {useState} from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [accessToken, setAcesstoken ] = useState('')
    const [refreshToken, setRefreshToken] = useState('')
    const [user, setUser] =useState('')
    const Navigate = useNavigate();

    const handlelogin = async(e) =>{
        e.preventDefault();

        try{
            const res= await axios.post('http://localhost:8000/api/login/', {username , password});

            const {access ,refresh, user} = res.data;
            setAcesstoken(access);
            setRefreshToken(refresh);
            setUser(user);

            localStorage.setItem('access_token',access);
            localStorage.setItem('refresh_token',refresh);
            localStorage.setItem('user',user);

            alert('Login successful!');
            Navigate('/items');
        }
        catch(error){
            alert('Login failed!')
        }
    };
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
          <div className="card p-4 shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
            <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handlelogin}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
    
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
    
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      );
}
export default Login;
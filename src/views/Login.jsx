import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Login = ({ login }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onsubmit = async (e) => {
        e.preventDefault();
        if(!username){
            alert("El usuario es obligatorio");
            return;
        }
        const isLogin = await login({ username, password });
        if (isLogin) {
            navigate("/home");
        }
    };
    return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
    }}
  >
    <form onSubmit={onsubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Login</h1>

      <input
        placeholder="Usuario"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" value="Login">Log In</button>
    </form>
  </div>
);

}

export default Login;
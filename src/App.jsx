import { useState } from 'react';
import {BrowserRouter, Routes, Route, data} from 'react-router-dom';
import './App.css';
import Home from './views/Home.jsx';
import Login from './views/Login.jsx';
import AppBar from './components/AppBar.jsx';
import Footer from './components/Footer.jsx';

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import Boton from '../src/components/Boton.jsx';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const login = async (user) => {
  const data = await fetch('http://localhost:5001/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  const res = await data.json();
  setIsLogin(res.isLogin);
  return res.isLogin;
};

const logout = () => {
  setIsLogin(false);
}


  return (
    <div className="app-wrapper">
  <BrowserRouter>
    <div className="main-content" style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
      {isLogin && <AppBar logout={logout} />}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login login={login} />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
</div>

   );
}

export default App;


// componente hooks
// permiten usar el estado y otras características de React sin escribir una clase
// useState es un hook que permite agregar el estado a un componente funcional
// useState devuelve un array con dos elementos: el estado actual y una función para actualizarlo
// useState(0) inicializa el estado en 0
// setCount es la función que se usa para actualizar el estado
// setCount(count + 1) actualiza el estado sumando 1 al valor actual
// useContext  

// Eventos en html    
// onClick={suma} se usa para manejar el evento de clic en el botón
// onclick es una propiedad que se pasa al componente Boton
//"funcion ()"

//eventos en React
// onClick={suma} se usa para manejar el evento de clic en el botón
// onclick es una propiedad que se pasa al componente Boton
// {funcion}

// Router: 
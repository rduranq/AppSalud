//
import { useState } from "react";//useState es un hook que permite usar el estado en componentes funcionales
import "./auth.css";//importa el css
import {useAuth} from "../../context/authContext";//importa el contexto
import { useNavigate } from "react-router-dom";//useNavigate es un hook que permite navegar entre paginas
import { useEffect } from "react";//useEffect es un hook que permite ejecutar codigo cuando se renderiza el componente
import fondo from "./Imagenes/farmacia-fondo.jpg"//importa la imagen de fondo


export const Auth = () => {

  const [user, setUser] = useState({//user es un objeto que contiene el email y el password
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);//error es un string que contiene el error de autenticacion

  const {login, userlogged, logout} = useAuth();//login, userlogged y logout son funciones que se importan del contexto
  const navigate = useNavigate();//navigate es una funcion que se importa para navegar entre paginas

  const signIn = async () => {//signIn es una funcion asincrona que permite iniciar sesion
    await login(user.email, user.password)//await permite esperar a que se ejecute la funcion login
    .catch((error) => {
      setError(error.code);
    });
  };

  useEffect(() => {//useEffect se ejecuta cuando se renderiza el componente
    if(userlogged != ""){
      navigate('/Home');
    }
  }, [userlogged]);

  return (

    <div className="signup-container">//div que contiene el formulario de inicio de sesion
      
      <div className="img-inicio">

      <img src={fondo} alt="logo medicamentos" className="icon" width={30} height={30}/>

      </div>

      <div className="container-content">
      <div className="tittle">Iniciar Sesion</div>
      <form id="login-form" className="forms"
      onSubmit={ //onSubmit es un evento que se ejecuta cuando se envia el formulario
        (e) => {
          e.preventDefault();//evita que se recargue la pagina
          signIn();//ejecuta la funcion signIn
        }
       }>
        <div className="error-log">//div que contiene el error de autenticacion
          {error === "auth/invalid-email" && ( <p>Invalid email</p> )}
          {error === "auth/user-not-found" && ( <p>User not found</p> )}
          {error === "auth/wrong-password" && ( <p>Wrong password</p> )}
          {error === "auth/invalid-login-credentials" && ( <p>Invalid login credentials</p> )}
        </div>
        <input
          className="input-auth"//input que contiene el email
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          autoComplete="on"
        />
        <input
          className="input-auth"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          autoComplete="on"
        />
        <button type="submit">Sign In</button>//boton que envia el formulario
        <button onClick={logout}>Sign Out</button>
      </form>
      </div>   
      
    </div>
  );
};

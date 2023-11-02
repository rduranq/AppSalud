import { Timestamp } from "firebase/firestore";
import { useAuth } from "../../context/authContext";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import "./usuarios.css";

export const ContentGesUsu = () => {
  const { signup } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [rol, setRol] = useState("Usuario");

  const rolRef = collection(db, "Roles");

  const signUp = async () => {
    try {
      await signup(user.email, user.password);
      const Rol = rol;
      const Correo = user.email;

      addDoc(rolRef, {
        Correo,
        Rol,
      });
    } catch (error) {
      console.log(error);
    }
    console.log("creado el rol");
  };

  return (
    <>
      <div className="crear-usuario-container">
        <form
          id="login-form"
          className="forms"
          onSubmit={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          <input
            className="input-auth"
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
          <div className="select-div">
            <label className="label-add-usu" htmlFor="Rol">
              Tipo de Usuario:
            </label>
            <div className="crear-usuario-container-select">
              <select
                className="select-add-usu"
                id="Rol"
                value={rol}
                onChange={(e) => setRol(e.target.value)}
                required
              >
                <option value="Admin">Administrador</option>
                <option value="Usuario">Usuario</option>
              </select>
            <div class="select_arrow"></div>
            </div>
            </div>
          <button className="button-add-usu" type="submit">
            Crear Usuario
          </button>
        </form>
      </div>
    </>
  );
};

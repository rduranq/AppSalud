import { createContext, useEffect } from 'react';
import { useState, useContext } from 'react';
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);


function AuthProvider({ children }) {

  const navigate = useNavigate();

  const [userlogged, setUserlogged] = useState("");

  const [userRole, setUserRole] = useState("");

  const [data, setData] = useState([]);
  

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  }

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  }

  const logout = async () => {
    await signOut(auth).then(() => {     
      navigate('/');
    })
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserlogged(user.email);
      } else {
        setUserlogged("");
      }
    });

    const getRolesList = async () => {
      try {
        const rolesList = await getDocs(collection(db, "Roles"));
        const rolesListArray = rolesList.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(rolesListArray);
      } catch (error) {
        console.log(error);
      } 
    };

    getRolesList();
    console.log(userlogged);

    const getUserRole = async () => {
      const q = query(collection(db, "Roles"), where("Correo", "==", userlogged));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUserRole(doc.data().Rol);
      });
      console.log(userRole);
    };

    getUserRole();

  }, [userlogged, userRole]);

  return (
    <AuthContext.Provider value={{signup, login, logout, userlogged, userRole}} >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider, useAuth };
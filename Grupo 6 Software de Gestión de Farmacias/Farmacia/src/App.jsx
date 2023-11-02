import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/authContext';
import { PageProvider } from './context/pageContext';
import { Auth } from './components/auth/auth';
import {Home} from "./pages/Home/home";

function App() {

  return (
    <AuthProvider>
      <PageProvider>
        <Routes>
          <Route path='/' element={<Auth/>}/>
          <Route path='/Home' element={<Home/>}/>
        </Routes>
      </PageProvider>
    </AuthProvider>
  )
}

export default App;

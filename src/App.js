
import './App.css';
import  Login  from './Pages/Login/Login';
import Rotas from "./Routes.js"
import { AuthProvider } from "./Components/Context/AuthContext";


function App() {
  return (
      <div style={{display: 'flex'}}>
        <Rotas />
      </div>
  );
}

export default App;

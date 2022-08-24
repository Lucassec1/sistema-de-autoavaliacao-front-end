
import './App.css';
import  Login  from './Pages/Login/Login';
import Rotas from "./Routes.js"
import { AuthProvider } from "./Components/Context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div style={{display: 'flex'}}>
        <Rotas />
      </div>
    </AuthProvider>
  );
}

export default App;

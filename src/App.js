
import './App.css';
import  Login  from './Pages/Login/Login';
import Rotas from "./Routes.js"
import { AuthProvider, Context } from "./Components/Context/AuthContext";
import UserContext from './UserContext';


function App() {
  return (
    <UserContext.Provider>
      <div style={{display: 'flex'}}>
        <Rotas />
      </div>
    </UserContext.Provider>
  );
}

export default App;

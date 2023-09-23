import { Routes,Route } from 'react-router-dom';

import Login from "../src/components/Login"
import Register from "../src/components/Register"

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;

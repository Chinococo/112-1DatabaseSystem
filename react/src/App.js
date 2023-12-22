import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
import './App.css';
import MySQLConnectionTest from './MySQL';
import SecondPage from './SecondPage';
const App=()=>{
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/TestMySQL" element={<MySQLConnectionTest />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

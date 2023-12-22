import { BrowserRouter, Routes, Route} from "react-router-dom";
import MySQLConnectionTest from './../page/MySQL';
import SecondPage from './../page/SecondPage';
import MemberCenterMenu from './../page/MemberCenterMenu';
import '../css/index.css';
const App=()=>{
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/TestMySQL" element={<MySQLConnectionTest />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/MemberCenterMenu" element={<MemberCenterMenu />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

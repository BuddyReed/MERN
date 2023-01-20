import './App.css';
import { Routes, Route, Navigate } from "react-router-dom"
import Wrapper from "./views/Wrapper";
import NotFound from './views/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="container">


      <Routes>
        {/* Navigate is used to redirect your route. In this cass the root route is being redirected to 
          the /home page(route) */}
        <Route path='/' element={< Navigate to="/home" replace />} />
        <Route path="/home" element={<Wrapper />} />
        {/* This route will display the info you select from the form  */}
        <Route path="home/:category/:id" element={<Wrapper />} />
        {/* If none of the above route match, use NotFound View  */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

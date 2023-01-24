
import './App.css';
import NewProduct from './components/NewProduct';
import OneProduct from './components/OneProduct';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts.';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/product' replace />} />
        <Route path='/product/new' element={<><NewProduct /><AllProducts /></>} />
        <Route path='/product/:id' element={<OneProduct />} />
      </Routes>
    </div>
  );
}

export default App;

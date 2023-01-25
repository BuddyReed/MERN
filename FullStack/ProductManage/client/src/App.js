
import './App.css';
import NewProduct from './components/NewProduct';
import OneProduct from './components/OneProduct';
import EditProduct from './components/EditProduct';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to='/product/new' replace />} />
        <Route path='/product/new' element={<><NewProduct /><AllProducts /></>} />
        <Route path='/product/:id' element={<OneProduct />} />
        <Route path='/product/:id/edit' element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;

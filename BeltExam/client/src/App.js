import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewPet from './components/NewPet';
import AllPet from './components/AllPet';
import EditPet from './components/EditPet';
import OnePet from './components/OnePet';
import NotFound from './components/NotFound';




function App() {
  return (
    <div className="App">
      <header>
        <h1 className='text-center'>Pet Shelter</h1>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/pet' replace />} />
        <Route path='/pet' element={<AllPet />} />
        <Route path='/pet/new' element={<NewPet />} />
        <Route path='/pet/edit/:id' element={<EditPet />} />
        <Route path='/pet/:id' element={<OnePet />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

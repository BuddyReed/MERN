import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import NewAuthor from './components/NewAuthor';
import AllAuthor from './components/AllAuthor';
import EditAuthor from './components/EditAuthor';
import NotFound from './components/NotFound';




function App() {
  return (
    <div className="App">
      <header>
        <h1 className='text-center'>Favorite Authors</h1>
      </header>
      <Routes>
        <Route path='/' element={<Navigate to='/author' replace />} />
        <Route path='/author' element={<AllAuthor />} />
        <Route path='/author/new' element={<NewAuthor />} />
        <Route path='/author/edit/:id' element={<EditAuthor />} />
        {/* <Route path='/author/:id' element={<OneAuthor />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

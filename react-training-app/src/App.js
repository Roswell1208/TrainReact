import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import List from './pages/List';
import ListGenresFilm from './pages/ListGenresFilm';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listFastfood" element={<List />} />
        <Route path="/listGenresFilm" element={<ListGenresFilm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

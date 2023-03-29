import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Showdata from './components/Showdata';
import Content from './Content';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Content/>}/>
            <Route path='/gallery' element={<Showdata/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App

import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Mycontext from './my_context'
import { useState } from 'react'
import Nvbar from './components/Nvbar'
import Inicio from './views/Inicio'
import Pokemones from './views/Pokemones'
import Pokemon from './views/Pokemon'
import NotFound from './views/NotFound'


function App () {

  const [id, setId] = useState( '' )



  return (
    <div className="App">
      <Mycontext.Provider value={ { id, setId } }>
        <BrowserRouter>
          <Nvbar />

          <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="/pokemones" element={ <Pokemones /> } />
            <Route path="/pokemon/:id" element={ <Pokemon /> } />
            <Route path="*" element={ <NotFound /> } />
          </Routes>
        </BrowserRouter>
      </Mycontext.Provider>
    </div>
  );
}

export default App;

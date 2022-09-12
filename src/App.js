import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SuperHeros from './Components/SuperHeros';
import HeroList from './Components/HeroList';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HeroList />}/>
        <Route exact path='/details/:id' element={<SuperHeros/>}/>
      </Routes>
      </BrowserRouter>
     
          </div>
  );
}

export default App;

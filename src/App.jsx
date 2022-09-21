import './App.scss';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import MainProv from './Components/p_provider/Main';
import MainClie from './Components/p_client/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navigation />
          <Routes>
            <Route path='home' element={<Home />}></Route>
            <Route path='supliers' element={<MainProv />}></Route>
            <Route path='consumers' element={<MainClie />}></Route>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;

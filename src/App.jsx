import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Chat from './components/Chat';
import Request from './components/Request';
import Search from './components/Search';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/chat' element={<Chat />} />
          <Route exact path='/request' element={<Request />} />
          <Route exact path='/search' element={<Search />} />
          <Route exact path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

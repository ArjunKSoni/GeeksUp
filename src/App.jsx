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
import Authstate from './components/context/authState';

function App() {
  return (
    <div className="App">
      <Authstate>
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
      </Authstate>
    </div>
  );
}

export default App;

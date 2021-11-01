import './App.css';
import {Route, BrowserRouter} from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import DogDetail from './components/DogDetail/DogDetail'

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Route exact path='/'><LandingPage /></Route>
      <Route path='/home'><Home /></Route>
      <Route path='/dogdetail/:id'><DogDetail /></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import HomeScreen from './screens/HomeScreen'
import TrafalgarScreen from './screens/trafalgar/TrafalgarScreen'

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={HomeScreen}></Route>
      <Route exact path="/Trafalgar" component={TrafalgarScreen}></Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

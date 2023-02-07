import React, { useState } from "react";
import { Route, Switch} from "react-router-dom";
import Hone from './components/Home/Home';
import AddToCart from "./components/AddToCart/AddToCart";
import './App.css';

function App() {
  const [Allfilter, setAllfilter] = useState([])
  console.log(Allfilter)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Hone 
          setAllfilter={setAllfilter} 
          />
        </Route>
        <Route path="/addToCart">
          <AddToCart 
          Allfilter={Allfilter} 
          setAllfilter={setAllfilter} 
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

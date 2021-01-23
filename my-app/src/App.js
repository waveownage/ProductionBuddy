import './App.css';
import Home from "./components/Home"
import filling1050 from "./components/Filling1050"
import {Route, Switch} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/filling1050" component={filling1050}/>
      </Switch>
    </div>
  );
}

export default App;

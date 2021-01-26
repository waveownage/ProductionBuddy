import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/Home"
import Filling1050Normal from "./components/Filling1050Normal"
import GoalMenu from "./components/GoalMenu"
import Filling1050Cage2Fill2 from "./components/Filling1050Cage2Fill2"


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/goalmenu" component={GoalMenu}/>
        <Route exact path="/filling1050-normal" component={Filling1050Normal}/>
        <Route exact path="/filling1050-cage2fill2" component={Filling1050Cage2Fill2}/>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

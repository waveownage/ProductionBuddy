import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from "./components/Home"
import Filling1050Normal from "./components/Filling1050Normal"
import GoalMenu from "./components/GoalMenu"
import Filling1050Cage2Fill2 from "./components/Filling1050Cage2Fill2"
import Filling1125Normal from "./components/Filling1125normal"
import Filling1200Normal from "./components/Filling1200normal"
import FillingCustom from "./components/FillingCustom"


function App() {


  const [currentUser, setCurrentUser] = useState({
    boy: true,
    girl: false,
    luigi: false,
    football: false,
  });

  function change() {
      if (currentUser.boy === true) {
        setCurrentUser({
        boy: false,
        girl: true,
        luigi: false,
        football: false,
      })
      }
      if (currentUser.girl === true) {
        setCurrentUser({
          boy: false,
          girl: false,
          luigi: true,
          football: false,
        })}
      if (currentUser.luigi === true) {
        setCurrentUser({
          boy: false,
          girl: false,
          luigi: false,
          football: true,
        })}
        if (currentUser.football === true) {
          setCurrentUser({
            boy: true,
            girl: false,
            luigi: false,
            football: false,
          })}
    }
  
  
  console.log(currentUser)
  return (
    <div className="App">
      <button onClick={change}></button>
        <Route exact path="/" component={Home}/>
        <Route exact path="/goalmenu" component={GoalMenu}/>
        <Route exact path="/filling1050-normal">
          <Filling1050Normal currentUser={currentUser}/>
        </Route>
        <Route exact path="/filling1050-cage2fill2">
          <Filling1050Cage2Fill2 currentUser={currentUser}/>
        </Route>
        <Route exact path="/filling1125-normal">
          <Filling1125Normal currentUser={currentUser}/>
        </Route>
        <Route exact path="/filling1200-normal">
        <Filling1200Normal currentUser={currentUser}/>
        </Route>
        <Route exact path="/fillingcustom">
        <FillingCustom currentUser={currentUser}/>
        </Route>
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

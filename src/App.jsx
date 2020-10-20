import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './component/Header';
import Todo from './component/Todo';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import Login from './pages/Login';
import style from './App.module.scss';

export default function App() {
  const [image] = useState('/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg')
  
  return (
    <div className={style.App}>
        <Header />
        <Todo >
          <h2>Todo from App.jsx</h2>
          <div className={style.container}>
           <img src={"https://image.tmdb.org/t/p/original" + image} alt="img"/>
          </div>
        </Todo>
        <p>learn react</p>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <Switch>
            <Route path="/about/:a">
              <About />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  )
}

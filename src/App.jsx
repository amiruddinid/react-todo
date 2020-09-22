import React, { Component } from 'react';
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
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = { 
      todo: [
        {
          text: '1 Task Complete',
          completed: true,
          date:new Date(),
          edit:false
        }
      ]
    }
  }

  componentDidMount(){
    if(JSON.parse(localStorage.getItem('todos'))){
      this.setState({todo:JSON.parse(localStorage.getItem('todos'))});
    }
  }

  componentDidUpdate(){
    localStorage.setItem('todos', JSON.stringify(this.state.todo));
  }

  add = (value) => {
    this.setState({
      todo:[
        ...this.state.todo,
        {
          text: value,
          completed: false,
          date:new Date(),
          edit:false
        }
      ]
    })
  }

  remove = (i) => {
    let newTodo = this.state.todo;
    newTodo.splice(i, 1);
    this.setState({todo:newTodo})
    // localStorage setItem
  }

  handleEdit = (val, i) => {
    const edited = this.state.todo
    if(val === null){
      edited[i].edit = true
    }else{
      edited[i].edit = false
      edited[i].text = val
    }
    this.setState({todo:edited})
  }

  completed = (i) => {
    const edited = this.state.todo
    edited[i].completed = !edited[i].completed

    this.setState({todo:edited})
  }

  completedAll = () => {
    const task = this.state.todo.map(el => {
      return el = {
        ...el,
        completed : true
      }
    })
    console.log(task)
    this.setState({todo:task})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todo
          todo={this.state.todo}  
          add={this.add} 
          remove={this.remove}
          edit={this.handleEdit}
          complete={this.completed}
          completeAll = {this.completedAll}
        >
          <h2>Todo from App.jsx</h2>
        </Todo>
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
          </ul>

          <Switch>
            <Route path="/about/:a">
              <About />
            </Route>
            <Route path="/detail/:id">
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

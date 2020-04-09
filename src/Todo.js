import React from 'react';
import logo from './logo.svg';
import './Todo.css';

function App() {
  return (
      <div className="app">
  <p className="title">Zach's Todo List</p>
  <div className="button-and-input-box">
    <input type="text" id="input-text-box" placeholder="Add todo here"></input>
    <button id="input-button"> ADD </button>
  </div>
  <ol id="todo-list"></ol>
  </div>
  );
}

export default Todo;

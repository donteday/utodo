import React from 'react';
import './App.css';
import CreateTaskForm from './components/CreateTaskForm/CreateTaskForm';
import Tasks from './components/Tasks/Tasks';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <CreateTaskForm/>
      <Tasks/>
    </div>
  );
}

export default App;

import React, { useState  , useEffect} from 'react'
import AddTask from './components/AddTask';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import './App.css';

function App() {
  const [tasklist , setTasklist] = useState( JSON.parse(localStorage.getItem('tasklist')) ||[]);
  const [task , seTask ] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  },[tasklist])

  const totalAmount = tasklist.reduce(
    (sum, todo) => sum + parseFloat(todo.name),
    0,
  );


  return (
    <div className="App">
      <Header/>
      <h2 style={{textAlign:'center'}}>Total Amount: Rs {totalAmount.toFixed(2)}</h2>
      <AddTask tasklist={tasklist} setTasklist={setTasklist}  task={task} setTask={seTask}/>
      <ShowTask tasklist={tasklist} setTasklist={setTasklist}  task={task} setTask={seTask}/>
    </div>
  );
}

export default App;

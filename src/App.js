import './App.css';
import { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Fab } from '@material-ui/core';
import { db } from './Firebase';
import firebase from 'firebase';
// import { style } from '@material-ui/system';
import TodoListItem from './todo';
function App() {
  const [todos, setTodos] = useState([]);
  const [addTask,setTask] = useState("");
  useEffect(() => {
    getTodo();
  }, [])
  const getTodo = () => {
    db.collection("todos").onSnapshot(function (querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          InProgress: doc.data().InProgress
        }))
      );
    });
  }
  const addTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      InProgress: true,
      Time: firebase.firestore.FieldValue.serverTimestamp(),
      todo: addTask
    });
    setTask("");
  }
  return (
    <div className="background">
      <div className="App">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <h1>My Todo List</h1>
            <form>
              <TextField 
                id="standard-basic" 
                label="Enter task"
                value = {addTask} 
                style = {{width: "90vw", maxWidth: "500px"}}
                onChange={(event)=>setTask(event.target.value)} 
              />
              <Fab type="submit" color="primary" aria-label="add" onClick={addTodo}> 
                  <h2 id="plus">+</h2>
              </Fab>
            </form>
            <div style={{width: "90vw", maxWidth: "500px",  marginTop: "24px"}}>
              {todos.map((todo) => (
                <TodoListItem 
                  todo={todo.todo}
                  InProgress={todo.InProgress}
                  id={todo.id} 
                />
              ))}
            </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;

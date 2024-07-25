import React, {useState} from "react";
import './App.css';
import {Todo} from "./models";
import InputFeild from "./Components/InputFeild";
import TodoList from "./Components/TodoList";
import { DragDropContext } from 'react-beautiful-dnd';

const App: React.FC = () => {
  const [todo, setTodo]=useState<string>("");
  const [todos, setTodos]=useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos]=useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone:false}])
      setTodo("");
    }
  };

  //const onDragEnd = ()
//1:23:40
  return ( 
    <DragDropContext onDragEnd={()=>{}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList 
          todos={todos} 
          setTodos={setTodos}
          completedTodos={completedTodos} 
          setCompletedTodos={setCompletedTodos}
        />
    </div>
  </DragDropContext>
  )
}

export default App

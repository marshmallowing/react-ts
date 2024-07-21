import React from 'react'
import { Todo } from "../models";
import SingleTodo from './SingleTodo';
import './styles.css'

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
//todos와 setTodos의 타입 정의 안할 시 에러 발생
const TodoList:React.FC<Props>=({todos, setTodos})=>{
   return (
    <div className="todos">
        {todos.map((todo) => (
            <SingleTodo 
                todo={todo} 
                key={todo.id}
                todos={todos} 
                setTodos={setTodos}
            />
        ))}
   </div>
   );
};
//52:19
export default TodoList;
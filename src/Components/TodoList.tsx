import React from 'react'
import { Todo } from "../models";
import SingleTodo from './SingleTodo';
import './styles.css'
import { Droppable } from 'react-beautiful-dnd';

interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos: Todo[];
    setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>; 
}
//todos와 setTodos의 타입 정의 안할 시 에러 발생
const TodoList:React.FC<Props>=({todos, setTodos, completedTodos, setCompletedTodos})=>{
   return (
    <div className="container">
        <Droppable droppableId='TodosList'>
            {(provided)=>(
                    <div 
                      className="todos" 
                      ref={provided.innerRef} 
                      {...provided.droppableProps}
                    >
                      <span className="todos__heading">
                        Active Tasks
                      </span>
                      {
                        todos.map((todo, index) => (
                          <SingleTodo 
                            index={index}
                            todo={todo} 
                            todos={todos} 
                            key={todo.id}
                            setTodos={setTodos}
                          />
                        ))}
                      </div>
                    )}
        </Droppable>
        <Droppable droppableId="TodosRemove">
          {(provided)=>(
                <div 
                  className="todos remove"
                  ref={provided.innerRef} 
                  {...provided.droppableProps}
                >
                  <span className="todos__heading">
                    Completed Tasks
                  </span>
                 {
                    completedTodos.map((todo, index) => (
                      <SingleTodo 
                        index={index}
                        todo={todo} 
                        todos={completedTodos} 
                        key={todo.id}
                        setTodos={setCompletedTodos}
                      />
                    ))}
                </div>
                )}
        </Droppable>
   </div>
   );
};
//52:19
export default TodoList;
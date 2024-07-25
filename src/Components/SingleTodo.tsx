import React from 'react';
import { useState, useRef, useEffect } from 'react';
import {Todo} from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { Draggable } from 'react-beautiful-dnd';


type Props = {
    index: number;
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
//key는 props로 전달받을 필요 없음
const SingleTodo = ( { index, todo, todos, setTodos }: Props)=>{
    const [edit, setEdit] = useState<boolean>(false); 
    const [editTodo, setEditTodo] = useState<string>(todo.todo); //편집한 값으로 유지

    const handleDone=(id: number)=>{
        //이 ID와 일치하는 ID를 거짓->참으로
        setTodos(
            todos.map((todo) => 
                todo.id===id?{...todo, isDone:!todo.isDone}:todo
                //완료 속성 값을 반전시키는 코드
                //마지막 todo는 ID 일치하지 않을 경우
            )
        );
    };

    const handleDelete=(id:number)=>{
        setTodos(
            todos.filter((todo)=>todo.id!==id))
    };
    
    const handleEdit=(e:React.FormEvent, id:number)=>{
        e.preventDefault();

        setTodos(todos.map((todo)=>(
            todo.id===id?{...todo, todo:editTodo}:todo
        )));
        setEdit(false);
    };
    
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]); //편집모드 시 입력 상자에 포커스하게 만드는 용도

    return(
        <Draggable draggableId={todo.id.toString()} index={index}>
           {
            (provided)=>(
                <form className="todos__single" onSubmit={(e)=>handleEdit(e, todo.id)}
            {...provided}
            {...provided.draggableProps}
            ref={provided.innerRef}>
            {edit ? ( //편집 모드일 시 입력 상자 표시
                <input 
                    ref={inputRef}
                    value={editTodo}
                    onChange={(e) => setEditTodo(e.target.value)}
                    className="todos__single--text"
                />
            ) : todo.isDone ? (  //스트라이트 태그(취소선)
                <s className="todos__single--text">{todo.todo}</s>
            ) : (
                <span className="todos__single--text">{todo.todo}</span>
            )   //완료(isDone)일 시 렌더링 취소, 그렇지 않으면 일반 렌더링
            } 

            <div>
                <span 
                    className="icon>"
                    onClick={() => {
                        if(!edit && !todo.isDone){
                            setEdit(!edit)
                        }} 
                        //편집모드가 켜져있지 않으면서 완료되지 않은경우 편집 실행
                        //편집 모드로 전환하는 것
                    }>
                        <AiFillEdit />
                    </span>
                    <span className="icon>" onClick={()=>handleDelete(todo.id)}>
                        <AiFillDelete />
                    </span>
                    <span className="icon>" onClick={()=>handleDone(todo.id)}>
                        <MdDone />
                    </span>
                </div>
        </form>
            )
           } 
        </Draggable>
    )
}

export default SingleTodo;
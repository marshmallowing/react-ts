import React from 'react';
import {Todo} from "../models";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";

type Props = {
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};
//key는 props로 전달받을 필요 없음
const SingleTodo = ( { todo, todos, setTodos }: Props)=>{
    return(
        <form className="todos__single">
            <span className="todos__single--text">
                <div>
                    <span className="icon>">
                        <AiFillEdit />
                    </span>
                    <span className="icon>">
                        <AiFillDelete />
                    </span>
                    <span className="icon>">
                        <MdDone />
                    </span>
                </div>
            </span>
        </form>
    )
}

export default SingleTodo;
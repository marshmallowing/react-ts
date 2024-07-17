import React, { useRef } from 'react';
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=>void; //아무것도 반환하지 않는 함수 의미
}

const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef=useRef<HTMLInputElement>(null);

    return ( //제출을 누를 때마다 handleAdd 함수 활성화
        <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}> 
            <input 
                ref={inputRef}
                type="input" 
                placeholder="Enter task" 
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
                className="input__box"/>
            <button className='input_submit' type="submit">
                Go
            </button>
        </form>
    )
}
//37:54
export default InputFeild
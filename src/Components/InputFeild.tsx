import React, { useRef } from 'react';
import "./styles.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e: React.FormEvent)=>void; //아무것도 반환하지 않는 함수 의미
}

const InputFeild: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef=useRef<HTMLInputElement>(null); 
    //마우스 올리면 요소 알 수 있음

    return ( //제출을 누를 때마다 handleAdd 함수 활성화
        <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur(); 
        //inputRef.cuurrent 정의된 상태에서 제출 시 입력 필드 포커스 해제
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

export default InputFeild
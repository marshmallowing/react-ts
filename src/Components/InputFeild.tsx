import React from 'react';
import "./styles.css";

const InputFeild = () => {
    return (
        <form className='input'>
            <input type="input" placeholder="Enter task" className="input__box"/>
            <button className='input_submit' type="submit">
                Go
            </button>
        </form>
    )
}

export default InputFeild
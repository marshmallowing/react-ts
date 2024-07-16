import React, {useState} from "react"
import './App.css'
import InputFeild from "./Components/InputFeild"


const App: React.FC = () => {
  const [todo, setTodo]=useState<string>("");

  return <div className="App">
    <span className="heading">Taskify</span>
    <InputFeild />
  </div>
}
//27분 38초!
export default App

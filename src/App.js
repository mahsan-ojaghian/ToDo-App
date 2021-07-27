import React , {useState} from 'react'
import "./styles.css";
import Form from './Form';
import TodoList from "./TodoList";

export default function App() {
const [inputText,setInputText] = useState('');
const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1 className="title">To Do List</h1>
      </header>
      <Form setTodos={setTodos} todos={todos} setInputText={setInputText} inputText={inputText}/>
      <TodoList />
    </div>
  );
}

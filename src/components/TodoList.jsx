import React, { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  //useEffect
  useEffect(() => {
    if(localStorage.getItem('todos')){
      setTodos(JSON.parse(localStorage.getItem('todos')))
    }
  },[])

  //useEffect para controlar los eventos...
  useEffect(()=>{
    localStorage.setItem('todos', JSON.stringify(todos))

  },[todos])

  const addTodo = (todo) => {
    setTodos((old) => {
      return [...old, todo];
    });
  };

  const deleteTodo = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const updateTodo = (id) => {
    const editarTodos =  todos.map(item => (
      item.id === id ? {...item, todoEstado: !item.todoEstado} : item
      ))

    setTodos(editarTodos)
  }

  return (
    <div>
      <Formulario addTodo={addTodo} />

      <ul className="list-group list-group-numbered">
        {todos.map((item) => (
          <Todo 
            key={item.id} 
            todo={item} 
            deleteTodo={deleteTodo} 
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

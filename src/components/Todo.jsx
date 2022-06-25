import React from "react";

const Todo = ({ todo, deleteTodo, updateTodo }) => {
  //destructuring
  const { todoName, todoDescriptions, todoEstado, todoCheck, id } = todo;
  
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {todoName} ({todoEstado ? 'Completado' : 'Pendidente'})
        </div>
        <p>{todoDescriptions}</p>
        <div>
          <button 
            className="btn btn-danger me-2" 
            onClick={() => deleteTodo(id)}
          >
            Eliminar
          </button>

          <button 
          className="btn btn-warning"
          onClick={() => updateTodo(id)}
          >Editar</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {todoCheck && "Prioritario"} {/* en caso que sea verdadero */}
      </span>
    </li>
  );
};

export default Todo;

//1:38 react js 03 todo App

import React from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ addTodo }) => {
  const initialState = {
    todoName: "",
    todoDescriptions: "",
    todoEstado: 'pendiente',
    todoCheck: false,
  };

  // utilizamos el custom Hooks
  const [inputs, handleChange, reset] = useFormulario(initialState)

  //destructurig inputs
  const { todoName, todoDescriptions, todoEstado, todoCheck } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();

    //validaciones de campos vacios|
    

    if (!todoName.trim()) {
      e.target[0].focus(); // focus en el primer elemento del array
      Swal.fire({
        title: "Error!",
        text: "No deje el campo vacio",
        icon: "error",
      });
      return;
    }

    if (!todoDescriptions.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "No deje el campo vacio",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Exito",
      text: "Tarea Agregada",
      icon: "success",
    });

    //props de componente padre
    addTodo({
      todoName: todoName,
      todoDescriptions: todoDescriptions,
      todoEstado: todoEstado === 'pendiente' ? false : true,
      // todoEstado: todoEstado,
      todoCheck: todoCheck,
      id: uuidv4(),
    })

    //reinicamos los campos 
    reset()
  };

 
  return (
    <div>
      <h1>Agregar ToDo</h1>

      <form onSubmit={handleSubmit}>
        <input
          className="form-control mb-2"
          name="todoName"
          type="text"
          placeholder="Ingrese Todo"
          onChange={handleChange}
          value={todoName}
        />

        <textarea
          className="form-control mb-2"
          name="todoDescriptions"
          placeholder="Ingrese Descripcion"
          onChange={handleChange}
          value={todoDescriptions}
        />

        <select
          className="form-control mb-2"
          name="todoEstado"
          onChange={handleChange}
          value={todoEstado}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>

        <div className="form-check">
          <input
            className="form-check-input"
            name="todoCheck"
            type="checkbox"
            checked={todoCheck}
            onChange={handleChange}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Dar Prioridad
          </label>
        </div>

        <button className="btn btn-primary" name="todoSubmit" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
};

export default Formulario;

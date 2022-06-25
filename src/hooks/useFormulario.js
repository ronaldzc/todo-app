import { useState } from 'react'

export const useFormulario = (initialState = {}) => {

    const [inputs, setInputs] = useState(initialState)

    const handleChange = (e) => {
        // setTodo({
        //   ...todo,
        //   [e.target.name]: e.target.value //construccion de objeto forma dinamica
        // })
        const { name, value, type, checked } = e.target; // destructuring de objeto
    
        setInputs((old) => ({
          ...old,
          [name]: type === 'checkbox' ? checked : value,
          // [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }))
      }

      const reset = () =>{
        setInputs(initialState)
      }
  
  return [inputs, handleChange, reset]
}

//me quede en el minuto 2:00

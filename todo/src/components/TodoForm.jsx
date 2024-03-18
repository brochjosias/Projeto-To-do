/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createFactory, useState} from 'react'

const TodoForm = ({ addTodo }) => {
  /*Criando estado de titulo e categoria*/
  const [value, setValue] = useState("") //titulo
  const [category, setCategory] = useState("")

  const handleSubmit = (e) => { //dps da submissao do formulario vai ser criado uma nova tarefa no sistema
    e.preventDefault()
    if(!value || !category) return; //se nao tiver titulo ou categoria
    addTodo(value, category);
    setValue("");
    setCategory("");
  }
  return (
    <div className='todo-form' /* estilizaçao dele */>
      <h2> Criar Tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Digite o título'
        value={value}
        onChange={(e) => setValue(e.target.value)}
         //onChange = Ao mudar o valor, => capturar o evento(e) e a mudança de estado(setValue) = e.target.value
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
      </select>
      <button type='submit'>Criar Tarefa</button>
    </form>
  </div>
  )
}

export default TodoForm

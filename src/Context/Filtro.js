import React from 'react'

function Filtro({filtrar,setFiltra}) {
  return (
    <div>
  <div>
      <p> status</p>
      <select  onChange={(e)=> setFiltra(e.target.value) }  value={filtrar}>
      <option value="ALL">Todos</option>
      <option  value="completada">completas</option>
      <option  value="incompleta">incompletas</option>
     
      </select>
      </div>

     


    </div>
  )
}

export default Filtro
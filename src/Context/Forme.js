import React from 'react'
import { useState } from 'react'

const Forme = ({addList}) => {
  const [valor,setValue] = useState()
  const [optioon,setoptioon] = useState()

 const handls =(e)=>{
     e.preventDefault()

    if(!valor || !optioon) return

    console.log(valor,optioon)
    
    
    addList(valor,optioon)
    setValue("")
    setoptioon("")


 }


  return (
    <div>

      <h1>Criar tarefa</h1>

      <form onSubmit={handls}>

        <input type="text" placeholder='digite um texto' onChange={(e)=> setValue(e.target.value) } value={valor}/>
        <select  onChange={(e)=> setoptioon(e.target.value)} value={optioon} >
         <option    value="pessoal" >Pessoal </option>
         <option  value="esporte">Esporte</option>
         <option  value="trabalho">trabalho</option>
         <option   value="estudo">Estudo</option>
        </select>
        <button  >enviar </button>


      </form>
      
    </div>
  )
}

export default Forme

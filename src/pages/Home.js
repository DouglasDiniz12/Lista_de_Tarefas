import React from 'react'
import { useState } from 'react'
import Context from '../Context/Context'
import Forme from '../Context/Forme'
import Search from '../Context/Search'
import Filtro from '../Context/Filtro'

import styles from './Home.css'

const Home = () => {
  
   const [lista,setLista] = useState([
    { 
      id:1,
      tarefa:"Arrumar a casa",
      category:"Pessoal",
      Iscompleted:false
    },

    { 
      id:2,
      tarefa:"Fazer exercicio",
      category:"Estudo",
      Iscompleted:false
    },

    { 
      id:3,
      tarefa:"Treinar",
      category:"esporte",
      Iscompleted:false
    },
    
    
   ])


   const addList = (tarefa,category)=>{

    const newProjeto = [...lista,{
      id : Math.floor(Math.random()*1000),
      tarefa,
      category,
      Iscompleted:false,

    }
  ]


    setLista(newProjeto)


   }


   const [search, setSearch] = useState("")

   const [filtrar,setFiltra]= useState("ALL")
   

   const atualizar =(id)=>{
     const objAtualiza = [...lista]
     objAtualiza.map((item3) => item3.id === id ? item3.Iscompleted = !item3.Iscompleted : item3)


     setLista(objAtualiza)


   }

   const remove1 =(id)=>{

    const   newlista = [...lista]
     const objRemove = newlista.filter((remov)=> remov.id !== id ? remov :null )

     setLista(objRemove)

   }

  



 

  return (
    <div className='App'> 
      <h1>Lista de Tarefas</h1>
      <Search  search={search} setSearch={setSearch}/>
      <Filtro filtrar={filtrar} setFiltra={setFiltra}/>
   <div className="context">
   <div className="context">
    <div className='todo-list'>
   { lista.filter((list)=>  filtrar === "ALL" ? true : filtrar === "completada" ? list.Iscompleted : !list.Iscompleted ).filter((list)=>list.tarefa.toLowerCase().includes(search.toLowerCase())).map((list)=>(
      <Context key={list.id} list={list}   remove1 ={remove1} atualizar ={atualizar}/>
    ))}

</div>

   </div>
    <div>
   
   </div>
   <Forme addList={addList} />


   


   </div>
      


      
    </div>
  )
}

export default Home

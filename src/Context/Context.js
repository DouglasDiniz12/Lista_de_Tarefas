import React from 'react'




function Context({list,remove1, atualizar}) {
  return (

        <div className='list' style={{textDecoration: list.Iscompleted ?"line-through":""}}  >
      <div className="content"  >
      <p> {list.tarefa}</p>
      <p className='categorya'>({list.category})</p>
      <button className='complete' onClick={()=> atualizar(list.id)}>Completar</button>
      <button className='remove' onClick={()=>remove1(list.id)}>x</button>
    
      </div>
      </div>




  
  )
}

export default Context
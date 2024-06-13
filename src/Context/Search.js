import React from 'react'




function Search({search,setSearch}) {
  return (
    <div>
      
      <input type="text" value={search}   onChange={(e)=>setSearch(e.target.value)} placeholder='pesquisar' />


    </div>
  )
}

export default Search
import React, { useState } from 'react'

export const Folder = ({state, setState}) => {

  const [name, setName]= useState('')

const deleteFolder = () => {
setState((prevState) => {
  return prevState.filter((el) => el.id == state.id )
})
}


const editFolder = () => {
  
}


    return (
      <div>Новая папка<button onClick={deleteFolder}>del</button><button onClick={editFolder}>ed</button></div>
    )
}

import React, { useState } from 'react'
import './style.css'

export const AddFolder = ({ folder, setFolder }) => {

  const [value, setValue] = useState('')

  var uniqid = Date.now()

  const saveFolder = (event) => {
     event.preventDefault()
    if (!value) {
      return
    }

    const newFolder = [...folder, {
      id: uniqid,
      title: value
    }]
    setFolder(newFolder)
    setValue('')
  }

  return (
    <form className='form'>
      
        <input placeholder='Введите название папки' value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={saveFolder}>Save</button>
      
    </form>
  )
}

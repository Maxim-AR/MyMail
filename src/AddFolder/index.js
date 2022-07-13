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
    <div className="input-group mb-3">
      <input type="text" className="form-control" placeholder="Введите название папки" aria-label="Введите название папки" aria-describedby="button-addon2" value={value} onChange={(e) => setValue(e.target.value)} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={saveFolder}>Добавить</button>
        </div>
    </div>
  )
}

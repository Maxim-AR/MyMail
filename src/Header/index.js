import React from 'react'
import logo from './../logo.png'
import './index.css'

export const Header = ({state, setState}) => {
  
  var uniqid = Date.now()

  const createFolder = () => {
    setState(state.concat([
      {id:uniqid, name: "Новая папка"}
    ]))
  }

  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt='MAIL' className='logo__pic' />
        </div>
        <div className='search'>
            <input type='text' placeholder='Поиск' className='search__input'/>
        </div>
        <div className='create msg'>
            <button onClick={createFolder} className='create__btn'>Добавить папку</button>
        </div>
    </header>
  )
}

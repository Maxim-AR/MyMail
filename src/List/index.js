import React, { useState } from 'react'
import mockedData from './../data.json'
import './style.css'

export const List = ({children}) => {



  const [msg, setMsg] = useState(mockedData)

  const newFolder = () => {
    setMsg(
      mockedData.filter((el) => el.status == "new")
    )
  }


  const incomingMsg = () => {
    setMsg(
      mockedData.filter((el) => el.status == "in")
    )
  }
  const sentMsg = () => {
    setMsg(

      mockedData.filter((el) => el.status == "out")
    )

  }
  const draftMsg = () => {
    setMsg(
      mockedData.filter((el) => el.status == "draft")
    )
  }
  const deletedMsg = () => {
    setMsg(
      mockedData.filter((el) => el.status == "del")
    )
  }
  const spamMsg = () => {
    setMsg(
      mockedData.filter((el) => el.status == "spam")
    )
  }


  return (
    <div>
      
      <div className='sort'>
      
        <div
          onClick={() => {
            incomingMsg()
          }}>
          Входящие
        </div>

        <div
          onClick={() => {
            sentMsg()
          }}>
          Отправленные
        </div>

        <div
          onClick={() => {
            draftMsg()
          }}>
          Черновик
        </div>

        <div
          onClick={() => {
            deletedMsg()
          }}>
          Удаленные
        </div>

        <div
          onClick={() => {
            spamMsg()
          }}>
          Спам
        </div>

        
        <div onClick={()=> {
          newFolder()
        }} className='child'>{children}</div>


      </div>
          
      <div className='list'>
        {msg.map((item) => (
          <div key={item.id} className='content container'>
            {item.author} {item.text} {item.time}
          </div>
        ))}
        
      </div>

    </div>
  )
}

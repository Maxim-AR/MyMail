import React, { useState } from 'react'
import mockedData from './../data.json'
import './style.css'
import { Button } from 'react-bootstrap';


export const List = ({ folder, setFolder }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')

  const [msg, setMsg] = useState(mockedData)

  const deleteFolder = (id) => {
    let newFolder = [...folder].filter(item => item.id != id)
    setFolder(newFolder)

  }




  const editFolder = (id, title) => {
    setEdit(id)
    setValue(title)
  }

  const saveFolderChange = (id) => {
    let newFolder = [...folder].map(item => {
      if (item.id == id) {
        item.title = value
      }
      return item
    })
    setFolder(newFolder)
    setEdit(null)
  }

  const newFolderMsg = () => {
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
        <div onClick={() => newFolderMsg()}>
          {
            folder.map((item) => (
              <div key={item.id} >
                {
                  edit === item.id ?
                    <div>
                      <input value={value} onChange={(el) => setValue(el.target.value)} />
                    </div>
                    :
                    <div>{item.title}</div>
                }
                {
                  edit === item.id ?
                    <div>
                      <Button onClick={() => saveFolderChange(item.id)}>сохр</Button>

                    </div> :
                    <div>
                      <Button onClick={() => deleteFolder(item.id)}>удал</Button>
                      <Button onClick={() => editFolder(item.id, item.title)}>изм</Button>


                    </div>
                }
              </div>
            ))
          }
        </div>

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

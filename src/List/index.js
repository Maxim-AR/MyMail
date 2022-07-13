import React, { useState } from 'react'
import './style.css'
import { Button } from 'react-bootstrap';


export const List = ({ folder, setFolder, msg, setMsg, mockedData, saveInLS }) => {

  const [edit, setEdit] = useState(null)
  const [value, setValue] = useState('')


  const deleteFolder = (id) => {
    let newFolder = [...folder].filter(item => item.id != id)
    setFolder(newFolder)
    saveInLS(newFolder)

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
    saveInLS(newFolder)
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
    <div className='container'>

      <div className='sort'>

        <div className='activ'
          onClick={() => {
            incomingMsg()
          }}>
          Входящие
        </div>

        <div className='activ'
          onClick={() => {
            sentMsg()
          }}>
          Отправленные
        </div>

        <div className='activ'
          onClick={() => {
            draftMsg()
          }}>
          Черновик
        </div>

        <div className='activ'
          onClick={() => {
            deletedMsg()
          }}>
          Удаленные
        </div>

        <div className='activ'
          onClick={() => {
            spamMsg()
          }}>
          Спам
        </div>
        <div  className='activ'
        onClick={() => newFolderMsg()}>
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
                      <button className='btn btn-outline-secondary' onClick={() => saveFolderChange(item.id)}>Сохранить</button>

                    </div> :
                    <div>
                      <button className='btn btn-outline-secondary' onClick={() => deleteFolder(item.id)}>Удалить</button>
                      <button className='btn btn-outline-secondary' onClick={() => editFolder(item.id, item.title)}>Изменить</button>
                    </div>
                }
              </div>
            ))
          }
        </div>

      </div>

      <table className='list'>
        <tbody>
          {msg.map((item) => (
            <tr key={item.id} className='list__table'>
              <td>{item.author}</td>
              <td>{item.text}</td>
              <td> {item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

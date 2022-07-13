
import { AddFolder } from './AddFolder';
import { Header } from './Header';
import { List } from './List';
import { useEffect, useState } from 'react'
import mockedData from './data.json'
import { Search } from './Search';

function App() {

  const [folder, setFolder] = useState(localStorage.getItem('folders') ? JSON.parse(localStorage.getItem('folders')) : [])
  const [msg, setMsg] = useState(mockedData)
  const [inputValue, setInputValue] = useState('')

  const saveInLS = (newFolder) => {
    setFolder(newFolder);
    localStorage.setItem('folders', JSON.stringify(newFolder))
  }

  const handleChange = (event) => {
    const {
      target: {value},
    } = event;
    setInputValue(value)
  }
   
  const filterMsgList = (inputValue) => {
    
    const filteredList = mockedData.filter(({author}) =>  author.toLowerCase().includes(inputValue.toLocaleLowerCase()) )
    setMsg(filteredList)
  }

  useEffect(() => {
    filterMsgList(inputValue)
  }, [inputValue])


  return (
    <div className="appContainer">

      <Header>
        <Search handleChange={handleChange} />
      </Header>
      <AddFolder folder={folder} setFolder={setFolder} saveInLS={saveInLS} />
      <List folder={folder} setFolder={setFolder} msg={msg} setMsg={setMsg} mockedData={mockedData} saveInLS={saveInLS} />
      

    </div>
  );
}

export default App;

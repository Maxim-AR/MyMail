import './App.css';
import { AddFolder } from './AddFolder';
import { Header } from './Header';
import { List } from './List';
import { useEffect, useState } from 'react'
import mockedData from './data.json'
import { Search } from './Search';

function App() {

  const [folder, setFolder] = useState([])
  const [msg, setMsg] = useState(mockedData)
  const [inputValue, setInputValue] = useState('')

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
    <div className="App">

      <Header>
        <Search handleChange={handleChange} />
      </Header>
      <List folder={folder} setFolder={setFolder} msg={msg} setMsg={setMsg} mockedData={mockedData} />
      <AddFolder folder={folder} setFolder={setFolder} />

    </div>
  );
}

export default App;

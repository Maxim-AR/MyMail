import './App.css';
import { Folder } from './AddFolder';
import { Header } from './Header';
import { List } from './List';
import { useState } from 'react'


function App() {

  const [folder, setFolder] = useState([])


  return (
    <div className="App">

      <Header  />
      <List folder={folder} setFolder={setFolder} />
      <Folder folder={folder} setFolder={setFolder} />

    </div>
  );
}

export default App;

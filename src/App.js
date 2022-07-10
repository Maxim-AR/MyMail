
import { useState } from 'react';
import './App.css';
import { Folder } from './Folder';
import { Header } from './Header';
import { List } from './List';





function App() {
  const [state, setState] = useState([])
  


  return (
    <div className="App">

      <Header state={state} setState={setState}  />

      <List>
        <div className='put-folder'>
        
        
         { 
         
          state.map((item) => (
            
            <Folder key={item.id} name={item.name} state={state} setState={setState} />
          ))
         } 
        </div>
      </List>

    </div>
  );
}

export default App;

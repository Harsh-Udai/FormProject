import { useState } from 'react';
import './App.css';
import Control from './Components/Control';

function App() {
  const [times,setTime] = useState(1);

  function inc(){
    setTime(times+1)
  }

  const renderForm = ()=>{
    var partV=[]
    for(let i=0;i<times;i++){
      partV.push(<Control inc={inc} />)
    }
    return partV
  }

  return (
    <div className="App">
      {renderForm()}
    </div>
  );
}

export default App;

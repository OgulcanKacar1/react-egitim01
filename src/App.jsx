import React,{useState} from 'react';
import Text from './components/Text';
import Button from './components/Button';

function App() {

  //onClick, onChange

  const[name, setName] = useState(null);
  const[data, setData] = useState(null);

  console.log(name,"name");
  
  const targetFunc = (e) => {
    setName(e.target.value);
  }
  const clickFunc = () =>{
    setData(name);
  }
  return (
    <>
      <input type="text" onChange={targetFunc} />
      <button onClick={clickFunc}>Click me</button>
      <div>
        {data}
      </div>
    </>
    
  )
}

export default App

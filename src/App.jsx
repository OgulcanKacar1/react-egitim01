import React,{useState} from 'react';
import Text from './components/Text';
import Button from './components/Button';

function App() {

  //HOOKS...
  //useState, useEffect, useContext, 

  const[count, setCount] = useState(0);
  

  return (
    <>
      <Button name={"Azalt"} onClick={()=> setCount(count-1)}/>
      <div>{count}</div>
      <Button name={"Arttir"} onClick={()=> setCount(count+1)} />
    </>
    
  )
}

export default App

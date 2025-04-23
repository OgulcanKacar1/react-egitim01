import React,{useState, useEffect} from 'react';
import Text from './components/Text';
import Button from './components/Button';

function App() {

  //useEffect 

  const[name, setName] = useState("react");

  useEffect(() => {
    setTimeout(() =>{
      setName("react guncellendi");
    }, 4000)
    
  }, [])


  return (
    <>
      {name}
    </>
  )
}

export default App

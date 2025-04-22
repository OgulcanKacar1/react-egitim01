import React,{useState} from 'react';
import Text from './components/Text';
import Button from './components/Button';

function App() {

  //HOOKS...
  //useState, useEffect, useContext, 

  const [name, setName] = React.useState("React");

  const clickFunc = () => {
    console.log("Click");
    setName("React has been changed");
  }

  return (
    <>
      <div onClick={clickFunc}>
        {name}
      </div>
    </>
    
  )
}

export default App

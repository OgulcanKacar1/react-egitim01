import React from 'react'

const Text = ({number, name}) => {
    console.log(number,"number");
    console.log(name,"name");
  return (
    <div>
      {name} {number} Egitimine Hoşgeldiniz
    </div>
  )
}

export default Text

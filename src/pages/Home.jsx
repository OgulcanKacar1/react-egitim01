import React from 'react'
import { useNavigate } from 'react-router-dom'

export const data = [
    {
        id: 0,
        name:"React",
        description: "React is a JavaScript library for building user interfaces.",
    },
    {
        id: 1,
        name:"Vue",
        description: "Vue is a progressive framework for building user interfaces.",
    },
    {
        id: 2,
        name:"Angular",
        description: "Angular is a platform for building mobile and desktop web applications.",
    }
]

const Home = () => {
    const navigate = useNavigate();

    

  return (
    <div>
      {
        data.map((item, index) => (
            <div onClick={() => navigate(`detail/${item.id}`)} style={{cursor: 'pointer', marginBottom: '30px'}} key={index}>
                <div>{item.name}</div>
                <div>{item.description}</div>
            </div>
        )

        )
      }
    </div>
  )
}

export default Home

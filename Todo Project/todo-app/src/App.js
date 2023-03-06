import { useState } from 'react';
import './App.css';

function App() {
const [data, setdata] = useState('')
const [bSubmit, bSetSubmit] = useState([])

  const inputHandler = (e)=>{
    setdata(e.target.value)
  }

  const buttonHandler = ()=>{
    bSetSubmit([...bSubmit, data])
    setdata('')
  }

  const deletHandler = (i)=>{
    const deletitems = bSubmit.filter((ele,index)=>{
      return index !== i
    })

    bSetSubmit(deletitems)


  }


  return(
    <>
      <h1>Todo App</h1>
      <input type="text" onChange={inputHandler} value={data} name="todo"/>
      <button type='submit' onClick={buttonHandler} >Add Todo</button>
      {
        bSubmit.length > 0 ? bSubmit.map((val,i)=>{
          return(
              <h1 key={i}>
                {val} <button onClick={()=>deletHandler(i)}>Delete</button>   
                
              </h1>
          )
        }) : <h1>No Data Found</h1>
      }
    </>
  )
}

export default App;

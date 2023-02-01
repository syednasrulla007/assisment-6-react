import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { data } from '../Routing/Routing'


const EditInfo = () => {
  const location=useLocation()
  const navigate=useNavigate()
  const index=location.state.data
  const arr=useContext(data).array
  const setarr=useContext(data).setfun
  const newObj={
    Name:arr[index].Name,
    Age:arr[index].Age,
    Course:arr[index].Course,
    Batch:arr[index].Batch,
  }
  
  function changehandler(e){
    newObj[e.target.name]=e.target.value
  }
  function update(){
    setarr((prevObj)=>{
      prevObj[index]=newObj;
      return(prevObj)
    })
    navigate('/student')
  }
  return (
    <div className='con1'>
      <h1>Edit</h1>
       <div className='con2'>
       <input placeholder={arr[index].Name} name='Name' onChange={changehandler}></input>
        <br />
        <input placeholder={arr[index].Age}  name='Age' onChange={changehandler}></input>
        <br />
        <input placeholder={arr[index].Course}  name='Course'  onChange={changehandler}></input>
        <br />
        <input placeholder={arr[index].Batch}  name='Batch'  onChange={changehandler}></input>
        <br />
       </div>
       <div className='con3'>
       <Link to='/student'><button>Cancle</button></Link>
        <br />
        <button onClick={update}>Update</button>
       </div>
    </div>
  )
}

export default EditInfo
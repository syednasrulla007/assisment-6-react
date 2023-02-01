import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { data } from '../Routing/Routing'


const AddStudent = () => {
  const navigate=useNavigate()
  const arr=useContext(data).array
  const[obj,changeobj]=useState({
    Name:"",
    Age:"",
    Course:"",
    Batch:""
  })
  function changehandler(e){
    // console.log(e.target.value)
    changeobj({...obj,[e.target.name]:e.target.value})
    // console.log(obj)
  }
  function add(){
    arr.push(obj)
    navigate('/student')
  }
  return (
    <div className='con1'>
      <h1>Add Student</h1>
        <div className='con2'>
        <input placeholder='Name' name='Name'  onChange={changehandler}></input>
        <br />
        <input placeholder='Age' name='Age'  onChange={changehandler}></input>
        <br />
        <input placeholder='Course' name="Course" onChange={changehandler}></input>
        <br />
        <input placeholder='Batch' name="Batch" onChange={changehandler}></input>
        <br />
        </div>
       <div className='con3'>
       <Link to='/student'><button>Cancle</button></Link>
        <br />
       <button onClick={add}> Submit</button>
       </div>
    </div>
  )
}

export default AddStudent
import React from 'react'
import {Link} from 'react-router-dom'
import './Components.css'
import { data } from '../Routing/Routing'
import { useContext } from 'react'


const Students = () => {

  const arr=useContext(data).array
  return (
    <div className='con1'>
      <div className='con2'>
      <h1> Students Details </h1>
      <Link to='/addstudent'><button className='add'>Add new student</button></Link>
      </div>

      <br />
      <table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Course</th>
      <th scope="col">Batch</th>
      <th scope="col">Change</th>
    </tr>
  </thead>

      {
        arr.map((value,index)=>{
        return(
   <tbody key={index}>
     <tr>
      <td>{value.Name}</td>
      <td>{value.Age}</td>
      <td>{value.Course}</td>
      <td>{value.Batch}</td>
      <td><Link to='/edit' state={{data:index}}>Edit</Link></td>
    </tr>
   </tbody>

        )
        })
        
        }
      </table>
     
      </div>
  )
}

export default Students
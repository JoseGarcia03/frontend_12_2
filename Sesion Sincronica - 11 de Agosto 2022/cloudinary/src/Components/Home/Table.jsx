import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDate, readDate } from '../../Redux/Actions/citasAction';

const Table = ({ setEdit }) => {
  const { citas } = useSelector( state => state )

  const dispatch = useDispatch();

  const actionDelete = (email) => {
    dispatch( deleteDate(email) )
  }

  const actionEdit = (email) => {
    setEdit( email )
  }

  useEffect(() => {
    dispatch(readDate())
  }, [])
   

  return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Phone</th>
        <th>Symptoms</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
    {
      citas.map( ({ name, email, date, phone, symptoms, image}, idx) => (
        <tr key={ idx }>
          <th><img src={ image } alt={ name } width='100px' /></th>
          <th>{ name }</th>
          <td>{ email }</td>
          <td>{ phone }</td>
          <td>{ date }</td>
          <td>{ symptoms }</td>
          <th>
              <button onClick={() => actionEdit(email) } className="btn btn-outline btn-warning">Edit</button>
              <button onClick={() => actionDelete(email) } className="btn btn-outline btn-error">Delete</button>
          </th>
        </tr>
      ))
    }  
    </tbody>
  </table>
</div>
  )
}

export default Table
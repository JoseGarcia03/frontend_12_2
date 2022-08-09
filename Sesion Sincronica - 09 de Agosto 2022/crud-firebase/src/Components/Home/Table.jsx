import React from 'react'

const Table = () => {
  return (
    <div className="overflow-x-auto">
  <table className="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
        <th>Phone</th>
        <th>Symptoms</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* <!-- row 1 --> */}
      <tr>
        <th>Jose Garcia</th>
        <td>jose@gmail.com</td>
        <td>3138987572</td>
        <td>22-08-2022</td>
        <td>Dolor de cabeza</td>
        <th>
            <button className="btn btn-outline btn-warning">Edit</button>
            <button className="btn btn-outline btn-error">Delete</button>
        </th>
      </tr>
    </tbody>
  </table>
</div>
  )
}

export default Table
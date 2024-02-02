import React from 'react'
import { Table } from 'react-bootstrap'
import InnerTable from './InnerTable'
import {useSelector} from 'react-redux'

export default function MyTable() {

    const userlist = useSelector(state => state)

  return (
    <Table striped="columns" variant='dark' className='my-5'>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>User Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {[].map((row, index) => <InnerTable key={index} user={row} index={index} /> )}
      </tbody>
    </Table>
  )
}

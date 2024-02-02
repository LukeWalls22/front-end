import React from 'react'
import { Button } from 'react-bootstrap'

export default function InnerTable({user, index}) {


  return (
    <>
        <tr>
            <td>{index+1}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>
                <Button variant="outline-danger">
                    <i class="bi bi-trash3-fill"></i>
                </Button>
                <Button variant="outline-info">
                    <i class="bi bi-info-circle"></i>
                </Button>
            </td>
        </tr>
    </>
  )
}

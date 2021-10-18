import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../redux/actions';

const Home = () => {

  let dispatch = useDispatch()
  const {users} = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(loadUsers())
  }, [])



  return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Gender</th>
      <th>Email</th>
      <th>Address</th>
      <th>Phone</th>
      <th>Role</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {users && users.map((user) => (
      <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.gender}</td>
      <td>{user.email}</td>
      <td>{user.address}</td>
      <td>{user.phone}</td>
      <td>{user.role}</td>
      <td>
        <Button variant="primary">Edit</Button>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
    ))}
    
  </tbody>
</Table>
  )
}

export default Home

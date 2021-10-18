import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser, loadUsers } from '../redux/actions';

const Home = () => {

  let dispatch = useDispatch()
  let history = useHistory()
  const {users} = useSelector((state) => state.data)
  useEffect(() => {
    dispatch(loadUsers())
  }, [])

  const handleDelete = (id) => {
    if(window.confirm("Are you sure wanted to delete th user ?")) {
      dispatch(deleteUser(id))
    }
  }

  return (
    <Fragment>
      <Button 
        variant="primary"
        onClick={() => history.push("/addUser")}
      >
        Add User
      </Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
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
            <Button 
              variant="primary"
              onClick={() => history.push(`/editUser/${user.id}`)}
            >
              Edit</Button>
            <Button
              variant="danger"
              onClick={() => handleDelete(user.id)}
            >
              Delete</Button>
          </td>
        </tr>
        ))}
      </tbody>
</Table>
    </Fragment>
    
  )
}

export default Home

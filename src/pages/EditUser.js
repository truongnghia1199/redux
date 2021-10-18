import React, { Fragment, useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getSingleUser, updateUser } from '../redux/actions'

const EditUser = () => {

    const [state, setState] = useState({
        id: "",
        firstName: "",
        lastName: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
        role: ""
    })
    const [error, setError] = useState("")
    const {user} = useSelector(state => state.data)
    let {id} = useParams()
    let history = useHistory()
    let dispatch = useDispatch()
    const { firstName, lastName, gender, email, address, phone, role } = state

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [])

    useEffect(() => {
        if (user) {
            setState({...user})
        }
    })

    const handleInputChange = (e) => {
        let { name, value } = e.target
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!id ||!firstName ||!lastName  ) {
            setError("Please input fullfield")
        }
        else {
            dispatch(updateUser(state, id))
            history.push("/")
            setError("")
        }
    }

    return (
        <Fragment>
            <h2>Edit User</h2>
            {error && <h3 style={{ color: "red "}}>{error}</h3>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="password" placeholder="First Name" 
                        value={firstName || ""}
                        name="firstName"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="password" placeholder="Last Name" 
                        value={lastName || ""}
                        name="lastName"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="password" placeholder="Gender" 
                        value={gender || ""}
                        name="gender"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="password" placeholder="Email" 
                        value={email || ""}
                        name="email"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="password" placeholder="Address" 
                        value={address || ""}
                        name="address"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="password" placeholder="Phone" 
                        value={phone || ""}
                        name="phone"
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Role</Form.Label>
                    <Form.Control type="password" placeholder="Role" 
                        value={role || ""}
                        name="role"
                        onChange={handleInputChange}
                    />
                </Form.Group>

                <Button 
                    variant="danger" 
                    type="submit"
                    onClick={() => history.push("/")}
                >
                    Go Back
                </Button>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Fragment>
    )
}

export default EditUser

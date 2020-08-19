import React, { useState, useEffect } from 'react'
import { Form, Container, Row, Col, Button } from 'react-bootstrap'

interface ISignupProps {
    setView: (view: 'LOGIN' | 'SIGNUP' | 'HOME') =>  void
}

export const Register: React.FC<ISignupProps> = (props) => {

    const [inputUsername, setInputUsername] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputFirstName, setInputFirstName] = useState('')
    const [inputLastName, setInputLastName] = useState('')

    useEffect(() => {
    }, []);

    // function where account is registered will be implemented
    const registerAccount = () => {
    }
    // onClick should register account

    return (
        <Container>
            {/* <Row>
                <Col> */}
            <Form>

                <Form.Label><h1>Registration</h1></Form.Label>

                <Form.Group controlId='formUsername'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='formFirstName'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control value={inputFirstName} onChange={(e) => setInputFirstName(e.target.value)} />
                </Form.Group>

                <Form.Group controlId='formLastName'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control value={inputLastName} onChange={(e) => setInputLastName(e.target.value)} />
                </Form.Group>
                {/* May put in input for roles in later commits */}
            </Form>
            <Button type="submit" onClick={() => registerAccount()}>
                Register
</Button>
            {/* </Col>
</Row> */}
        </Container>
    )
}

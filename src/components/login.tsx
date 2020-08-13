import React, { useState, useEffect } from 'react'
import './login.css'
import { Container } from '@material-ui/core'
import { Form, Row, Col, Button } from 'react-bootstrap'

export const Login: React.FC = () => {

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    useEffect(() => {
    }, [])

    const loginCredentials = () => {
        const payload = {
            username: inputUsername,
            password: inputPassword
        }
    }

    return (
        <Container>
            <Form className="form-login">

                <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>

                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} placeholder="Username" />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} placeholder="Password" required />
                </Form.Group>

                <Form.Group className="checkbox mb-3">
                    <Form.Label>
                        <input type="checkbox" value="remember-me" /> Remember me
            </Form.Label>
                </Form.Group>

            </Form>
            <Button type="submit" onClick={() => loginCredentials()}>Sign in</Button>

        </Container>
    )
}

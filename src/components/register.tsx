import React, { useState, useEffect } from 'react'
import { Form, 
    //Row, 
    //Col 
} from 'react-bootstrap'
import clsx from 'clsx'
import {
    Container,
    Paper,
    FormControl,
    //TextField,
    InputLabel,
    //Input,
    FormHelperText,
    OutlinedInput,
    CssBaseline,
    InputAdornment,
    IconButton,
    //Icon,
    Button,
    makeStyles
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import * as authRemote from '../remote/auth'

interface ISignupProps {
    setView: (view: 'LOGIN' | 'SIGNUP' | 'HOME') => void
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60ch'
        },
    },
    form: {
        marginTop: 20,
        width: '50ch',
        padding: 10
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '40ch',
    },
    button: {
        margin: theme.spacing(1),
    },
}))

export const Register: React.FC<ISignupProps> = (props) => {

    const classes = useStyles()

    /*const [inputUsername, setInputUsername] = useState('')
    const [inputPassword, setInputPassword] = useState('')*/

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        showPassword: false,
        passwordVal: '',
        showPasswordVal: false,
        firstName: '',
        lastName: '',
    })

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    }

    const handleClickShowPasswordVal = () => {
        setValues({ ...values, showPasswordVal: !values.showPasswordVal });
    }

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    }

    useEffect(() => {
    }, [])

    const username = values.username
    const email = values.email
    const password = values.password
    const passwordVal = values.passwordVal
    const firstName = values.firstName
    const lastName = values.lastName

    const signup = async () => {
        if (password !== passwordVal) {
            return
        }
        const payload = {username,email,password,firstName,lastName}
        await authRemote.signupRequest(payload)
        // Need to handle response
    }

    /*const loginCredentials = () => {
        const payload = {
            username: inputUsername,
            password: inputPassword
        }
    }*/

    /*const [inputUsername, setInputUsername] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [inputFirstName, setInputFirstName] = useState('')
    const [inputLastName, setInputLastName] = useState('')*/

    useEffect(() => {
    }, []);

    // function where account is registered will be implemented
    /*const registerAccount = () => {
    }*/
    // onClick should register account

    return (
        <Container className={classes.root} maxWidth="sm">

            <CssBaseline />
            <Form>
                <Paper className={classes.form} elevation={3}>

                    <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <OutlinedInput
                            id="username"
                            value={values.username}
                            labelWidth={85}
                            onChange={handleChange('username')}
                        />
                    </FormControl>
                    <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            value={values.email}
                            aria-describedby="email-txt"
                            labelWidth={50}
                            onChange={handleChange('email')}
                            inputProps={{
                                'aria-label': 'We\'ll never share your email.',
                            }}
                        />
                        <FormHelperText id="email-txt">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <OutlinedInput
                            id="password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={80}
                        />
                    </FormControl>
                    <FormControl required className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="passwordVal">Verify password</InputLabel>
                        <OutlinedInput
                            id="passwordVal"
                            type={values.showPasswordVal ? 'text' : 'passwordVal'}
                            value={values.passwordVal}
                            onChange={handleChange('passwordVal')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordVal}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPasswordVal ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={135}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="firstName">First Name</InputLabel>
                        <OutlinedInput
                            id="firstName"
                            value={values.firstName}
                            labelWidth={80}
                            onChange={handleChange('firstName')}
                        />
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="lastName">Last Name</InputLabel>
                        <OutlinedInput
                            id="lastName"
                            value={values.lastName}
                            labelWidth={80}
                            onChange={handleChange('lastName')}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => signup()}
                    >SIGN UP</Button>

                </Paper>
            </Form>








            {/* <Row>
                <Col> */}
            {/*<Form>

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
            {/*</Form>
            <Button type="submit" onClick={() => registerAccount()}>
                Register
            </Button>*/}
            {/* </Col>
</Row> */}
        </Container>
    )
}

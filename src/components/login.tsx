import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import './login.css'
import { makeStyles } from '@material-ui/core/styles'
import {
    Container,
    Paper,
    FormControl,
    TextField,
    InputLabel,
    Input,
    FormHelperText,
    OutlinedInput,
    CssBaseline,
    InputAdornment,
    IconButton,
    Icon,
    Button
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import { Form, Row, Col } from 'react-bootstrap'

interface ILoginProps {
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

export const Login: React.FC<ILoginProps> = (props) => {

    const classes = useStyles()

    const [inputUsername, setInputUsername] = useState('');
    const [inputPassword, setInputPassword] = useState('');

    const [values, setValues] = React.useState({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: any) => (event: any) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    useEffect(() => {
    }, [])

    const loginCredentials = () => {
        const payload = {
            username: inputUsername,
            password: inputPassword
        }
    }



    return (
        <Container className={classes.root} maxWidth="sm">
            <CssBaseline />
            <Form>
                <Paper className={classes.form} elevation={3}>

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="email">Username or Email</InputLabel>
                        <OutlinedInput
                            id="email"
                            value={values.email}
                            aria-describedby="email-txt"
                            labelWidth={140}
                            onChange={handleChange('email')}
                            inputProps={{
                                'aria-label': 'We\'ll never share your email.',
                            }}
                        />
                        <FormHelperText id="email-txt">We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
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
                            labelWidth={70}
                        />
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                    >SIGN IN</Button>

                </Paper>
            </Form>



            {/*<Form className={classes.root} noValidate autoComplete="off">




                <Form.Group>



                    <Form.Label>Username</Form.Label>
                    <Form.Control value={inputUsername} onChange={(e) => setInputUsername(e.target.value)} placeholder="Username" />
                </Form.Group>

                <Form.Group>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                    />{/*
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} placeholder="Password" required />
                        */}
            {/*</Form.Group>

                <Form.Group className="checkbox mb-3">
                    <Form.Label>
                        <input type="checkbox" value="remember-me" /> Remember me
            </Form.Label>
                </Form.Group>

            </Form>
            <Button type="submit" onClick={() => loginCredentials()}>Sign in</Button>
                */}
        </Container>
    )
}

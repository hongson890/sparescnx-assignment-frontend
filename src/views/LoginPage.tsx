import React, { useReducer, useContext, useEffect, useState } from 'react'
import { Button, Icon, TextField, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {
  Context as LoginContext,
  Provider as LoginProvider,
} from '../contexts/login'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '100%',
    marginTop: 20,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  root: {
    padding: theme.spacing(3, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '100%',
    marginTop: 15,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '400px',
    margin: 'auto',
  },
  spinner: {
    marginLeft: '10px',
    width: '12px',
  },
  hint: {
    color: 'red',
  },
  success: {
    color: 'green',
  },
}))

const Login = (props: any) => {
  const classes = useStyles()
  const { state, submitLogin } = useContext(LoginContext)
  const [hint, setHint] = useState('')

  useEffect(() => {
    if (state.successData !== null && state.failedData === null) {
      setHint('')
      // Do something if login successed
    }

    if (state.successData === null && state.failedData !== null) {
      // Do something if login failed
      setHint('Login failed !')
    }
  }, [state])

  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      username: '',
      password: '',
    },
  )

  const handleSubmit = (event: any) => {
    event.preventDefault()

    if (formInput.username === '' || formInput.password === '') {
      setHint('All fileds must be filled')
    } else {
      submitLogin(formInput)
    }
  }

  const handleInput = (event: any) => {
    const { name } = event.target
    const newValue = event.target.value
    setFormInput({ [name]: newValue })
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          id="margin-normal"
          name="username"
          defaultValue={formInput.username}
          className={classes.textField}
          onChange={handleInput}
        />
        <TextField
          label="Password"
          id="margin-normal"
          name="password"
          defaultValue={formInput.password}
          className={classes.textField}
          onChange={handleInput}
          type="password"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          LOG IN
          {state.isLoading && (
            <img
              alt="spinner"
              src="/images/spinner.gif"
              className={classes.spinner}
            />
          )}
        </Button>
        {hint.length !== 0 && <div className={classes.hint}>{hint}</div>}
        {hint.length === 0 && state.successData !== null && (
          <div className={classes.success}>Success !</div>
        )}
        {state.failedData !== null && (
          <div className={classes.success}>{hint}</div>
        )}
      </form>
    </>
  )
}

export const LoginPage = () => (
  <LoginProvider>
    <Login />
  </LoginProvider>
)

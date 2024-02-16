import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { PrimaryButton, TextInput } from '../components/UIkit'
import { useDispatch } from 'react-redux'
import { signUp } from '../redux/users/operations'
import { ThunkDispatch } from 'redux-thunk'
import RootState from '../redux/store/store'

const Container = styled.div`
  font-family: Helvetica;
  background: #eee;
`

const HeaderGroup = styled.div`
  text-align: center;
`

const Header1 = styled.h1`
  font-weight: 300;
  color: #636363;
`

const Header3 = styled.h3`
  font-weight: 300;
  color: #4a89dc;
`

const Form = styled.form`
  width: 380px;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px,
    rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
`

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
`

const Label = styled.label`
  color: #4a89dc;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -20px;
`

const SignUpUser: React.FC = () => {
  const dispatch = useDispatch<ThunkDispatch<typeof RootState, undefined, any>>()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setUsername] = useState('')

  const inputEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    [setEmail]
  )

  const inputPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    [setPassword]
  )

  const inputConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setConfirmPassword(e.target.value)
    },
    [setConfirmPassword]
  )

  const inputUsername = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value)
    },
    [setUsername]
  )

  return (
    <Container>
      <HeaderGroup>
        <Header1>Sign Up form</Header1>
        <Header3>diverary</Header3>
      </HeaderGroup>
      <Form>
        <FormGroup>
          <TextInput
            fullWidth={true}
            label={'名前'}
            multiline={false}
            required={true}
            rows={1}
            value={name}
            type={'name'}
            onChange={inputUsername}
          />
          <Label>Name</Label>
        </FormGroup>
        <FormGroup>
          <TextInput
            fullWidth={true}
            label={'メールアドレス'}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={'email'}
            onChange={inputEmail}
          />
          <Label>Email</Label>
        </FormGroup>
        <FormGroup>
          <TextInput
            fullWidth={true}
            label={'パスワード'}
            multiline={false}
            required={true}
            rows={1}
            value={email}
            type={'encrypted_password'}
            onChange={inputPassword}
          />
          <Label>Password</Label>
        </FormGroup>
        <FormGroup>
          <TextInput
            fullWidth={true}
            label={'パスワードの再確認'}
            multiline={false}
            required={true}
            rows={1}
            value={confirmPassword}
            type={'password'}
            onChange={inputConfirmPassword}
          />
          <Label>Password</Label>
        </FormGroup>
        <PrimaryButton
          label={'ログイン'}
          onClick={() =>
            dispatch(signUp(name, email, password, confirmPassword))
          }
        />
      </Form>
    </Container>
  )
}

export default SignUpUser

import React, { useState } from "react";
import styled, { css } from "styled-components";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  font-family: Helvetica;
  background: #eee;
`;

const HeaderGroup = styled.div`
  text-align: center;
`;

const Header1 = styled.h1`
  font-weight: 300;
  color: #636363;
`;

const Header3 = styled.h3`
  font-weight: 300;
  color: #4a89dc;
`;

const Form = styled.form`
  width: 380px;
  margin: 4em auto;
  padding: 3em 2em 2em 2em;
  background: #fafafa;
  border: 1px solid #ebebeb;
  box-shadow: rgba(0, 0, 0, 0.14902) 0px 1px 1px 0px,
              rgba(0, 0, 0, 0.09804) 0px 1px 2px 0px;
`;

const FormGroup = styled.div`
  position: relative;
  margin-bottom: 45px;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  background: #fafafa;
  color: #636363;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #757575;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: #4a89dc;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: -20px;
`;

const Button = styled.button<{ blue: boolean }>`
  position: relative;
  display: inline-block;
  padding: 12px 24px;
  margin: 0.3em 0 1em 0;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  letter-spacing: 1px;
  background: transparent;
  border: 0;
  border-bottom: 2px solid #3160b6;
  cursor: pointer;
  transition: all 0.15s ease;

  &:focus {
    outline: 0;
  }

  ${({ blue }) =>
    blue &&
    css`
      background: #4a89dc;
      text-shadow: 1px 1px 0 rgba(39, 110, 204, 0.5);

      &:hover {
        background: #357bd8;
      }
    `}
`;

const RipplesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: transparent;
`;

const RipplesCircle = styled.span<{ active?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
`;

export const Login: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [ripplesActive, setRipplesActive] = useState<boolean>(false);

  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleButtonClick = async () => {
    setRipplesActive(true);

    try {
      // バックエンドにPOSTリクエストを送る (URLのプロトコルを追加)
      await axios.post('http://localhost:8080/Login', {
        name: name,
        password: password,
      });
      alert('アカウントが作成されました');
      navigate("/login");
    } catch (error) {
      setError('ログインできませんでした...');
    }

    setRipplesActive(false);
  };

  const handleRipplesAnimationEnd = () => {
    setRipplesActive(false);
  };

  return (
    <Container>
      <HeaderGroup>
        <Header1>Login form</Header1>
        <Header3>diverary</Header3>
      </HeaderGroup>
      <Form>
        <FormGroup>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
          <Label>Name</Label>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Label>Password</Label>
        </FormGroup>
        <Button
          type="button"
          blue
          onClick={handleButtonClick}
          onMouseDown={() => setRipplesActive(true)}
        >
          Subscribe
          <RipplesContainer className={`ripples ${ripplesActive && "is-active"}`}>
            <RipplesCircle
              className="ripplesCircle"
              onAnimationEnd={handleRipplesAnimationEnd}
              active={ripplesActive}
            />
          </RipplesContainer>
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

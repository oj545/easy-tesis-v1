import React, { useState, useEffect } from 'react';
import Page from '../UI/page';
import { authThunk } from '../../utils/userRequest/authThunk';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formlayout from '../UI/FormLayout';
import Loading from '../UI/Loading';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { authLoding, userDetails } = useSelector((state) => state.user);
  const [login, setLogin] = useState({ password: '', email: '' });

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(authThunk({ endpoint: 'login', body: login }));
  };
  useEffect(() => {
    if (userDetails.id) {
      navigation('/chapters');
    }
  });

  return (
    <Page>
      {authLoding && <Loading />}

      {!authLoding && (
        <Formlayout>
          <div className="form-image">
            <div className="form-description">
              <h2>Login</h2>
              <p>Welcome back to Easy Thesis</p>
            </div>
          </div>

          <Form className="login-form" onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                className="text-center"
                placeholder="Enter email"
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-justify-center">Password</Form.Label>
              <Form.Control
                className="text-center input"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formlayout>
      )}
    </Page>
  );
}

export default Login;
// <

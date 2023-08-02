import React, { useState } from 'react';
import Page from '../UI/page';
import './css/signIn.css';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Formlayout from '../UI/FormLayout';
import Loading from '../UI/Loading';
import { userFilse } from '../../data/initValues';
import { authThunk } from '../../utils/userRequest/authThunk';

function SignUp() {
  const { authLoding } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [signup, register] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    filesController: userFilse,
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(authThunk({ endpoint: 'signup', body: { signup } }));
  };

  return (
    <Page>
      {authLoding && <Loading />}
      {!authLoding && (
        <Formlayout>
          <div className="form-image">
            <div className="form-description">
              <h2>Sign Up</h2>
              <p>start your Reasearch with Easy thsis Guide</p>
            </div>
          </div>
          <Form className="signup-form" onSubmit={submitHandler}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="text-center "
                    onChange={(e) =>
                      register({ ...signup, firstName: e.target.value })
                    }
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    className="text-center"
                    placeholder="Last Name"
                    type="text"
                    onChange={(e) =>
                      register({ ...signup, lastName: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-justify-center">Email</Form.Label>
              <Form.Control
                className="text-center"
                placeholder="Email"
                type="email"
                onChange={(e) => register({ ...signup, email: e.target.value })}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-justify-center">Password</Form.Label>
              <Form.Control
                className="text-center"
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  register({ ...signup, password: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="text-justify-center">
                Confirm Password
              </Form.Label>
              <Form.Control
                className="text-center"
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  register({ ...signup, passwordConfirm: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formlayout>
      )}
    </Page>
  );
}

export default SignUp;

import React, { useState } from 'react';
import Page from '../UI/page';
import { authThunk } from '../../utils/userRequest/authThunk';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Formlayout from '../UI/FormLayout';
import Loading from '../UI/Loading';

function Login() {
  const { authLoding } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [login, setLogin] = useState({ password: '', email: '' });

  const submitHandler = async (event) => {
    event.preventDefault();
    dispatch(authThunk({ url: 'login', body: login }));
  };

  return (
    <Page>
      {authLoding && <Loading />}

      {!authLoding && (
        <Formlayout>
          <div className="form-image">
            <div className="form-description">
              <h2>Login</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam repellat blanditiis perferendis placeat explicabo ut
                nisi voluptatem animi error repudiandae!
              </p>
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

// export default Login;
// <form onSubmit={submitHandler} className="signin-form">
// <div>
//   <label>email</label>
//   <input
//     type="text"
//     onChange={(e) => setLogin({ ...login, email: e.target.value })}
//   />
// </div>
// <div>
//   <label>Password</label>
//   <input
//     type="password"
//     onChange={(e) => setLogin({ ...login, password: e.target.value })}
//   />
// </div>
// <button type="submit">submit</button>
// </form>

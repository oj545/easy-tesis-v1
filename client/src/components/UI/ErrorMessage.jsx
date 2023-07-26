import React, { useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import './css/error.css';
import { useDispatch, useSelector } from 'react-redux';
import { projectAction } from '../../redux/projectSlice';
import { userAction } from '../../redux/userSlice';

function ErrorMessage() {
  const { errorMessage } = useSelector((state) => state.project);
  const { authErrorMessage, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <Container>
      <div className="error-controller">
        {errorMessage && (
          <Alert
            variant="danger"
            onClose={(e) => dispatch(projectAction.cancelError())}
            dismissible
          >
            <h2> You got an error!</h2>
            <br />
            <p>{errorMessage}</p>
          </Alert>
        )}
        {authErrorMessage && (
          <Alert
            variant="danger"
            onClose={(e) => dispatch(userAction.cancelAuthError())}
            dismissible
          >
            <h2> You got an error!</h2>
            <br />
            <p>{authErrorMessage}</p>
          </Alert>
        )}
        {message && (
          <Alert
            variant="success"
            onClose={(e) => dispatch(userAction.cancelMessage())}
            dismissible
          >
            <h2> You got a message!</h2>
            <br />
            <p>{message}</p>
          </Alert>
        )}
      </div>
    </Container>
  );
}

export default ErrorMessage;

import { useState } from 'react';
import { Alert, Jumbotron } from 'react-bootstrap';

import LoginForm from './LoginForm';
import { login } from '../../api/pegotechApi';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  const [loginSuccess, setLoginSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const res = await login({ email, password });
      setLoginError(null);
      setLoginSuccess(true);
      setIsLoading(false);
    } catch (err) {
      setLoginSuccess(null);
      setLoginError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container bg-info">
      <Jumbotron className="form-box">
        {loginError && <Alert variant="danger"> {loginError} </Alert>}
        {loginSuccess && (
          <Alert variant="success"> You have successfully logged in </Alert>
        )}

        <LoginForm
          email={email}
          password={password}
          handleOnChange={handleOnChange}
          handleOnSubmit={handleOnSubmit}
          isLoading={isLoading}
        />
      </Jumbotron>
    </div>
  );
};

export default Login;

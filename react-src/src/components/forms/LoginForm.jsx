import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useMutation, gql } from '@apollo/client';

function LoginForm() {

    const LOG_IN = gql`
      mutation logIn($login: String!, $password: String!) {
        loginWithCookies(input: {
          login: $login
          password: $password
        }) {
          status
        }
      }
    `;
    
    const GET_USER = gql`
      query getUser {
        viewer {
          id
          databaseId
          firstName
          lastName
          email
          capabilities
        }
      }
    `;

    const dispatch = useDispatch();

    const [logIn, { loading, error }] = useMutation(LOG_IN, {
        refetchQueries: [
          { query: GET_USER }
        ],
      });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const errorMessage = error?.message || '';

    const isEmailValid =
        !errorMessage.includes('empty_email') &&
        !errorMessage.includes('empty_username') &&
        !errorMessage.includes('invalid_email') &&
        !errorMessage.includes('invalid_username');

    const isPasswordValid =
        !errorMessage.includes('empty_password') &&
        !errorMessage.includes('incorrect_password');

    function handleLogin(e) {
        e.preventDefault();

        logIn({
        variables: {
            login: username,
            password,
        }
        }).catch(error => {
            console.error(error);
        });
    }

return (<form id="site-form">
        <div className="title-label">SIGN IN</div>
        
        <div className="label-login">Username</div>
        
        <input className="field-login" 
            type="text"
            name="username"
            value={username}
            onChange={(e) => { setUsername(e.target.value); }}
        />

        <div className="label-login">Password</div>

        <input className="field-login"
            type="password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); }}
        />

        <a className="link-label" href="/forgot">Forgot Password</a>

        <input className="button"
            type="submit"
            name="login"
            value="Sign In"
            onClick={(e) => { handleLogin(e); }}
        />

        <a className="link-label" href="/register">Create Account</a>
    </form>)
}

export default LoginForm;

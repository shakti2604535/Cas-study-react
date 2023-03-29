
import classes from './Login.module.css'
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';


const LogIn = () => {

  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  const login = useGoogleLogin(
    {
      onSuccess: (codeResponse) => setUser(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
    },
  );

  useEffect(() => {
    localStorage.clear()
  }, []
  )
  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            
            localStorage.setItem('name', res.data.name)
            localStorage.setItem('id', res.data.id)
            localStorage.setItem('image', res.data.picture)
            navigate('dashboard')
          })
          .catch(
          // (err) => console.log(err)
        );
      }
      else {
        localStorage.clear()
      }

    },
    [user]
  );
  // const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  // };

  return (
    <>
      <div className='container squarebox d-flex flex-column justify-content-center align-items-center'>
        <p className="text-center">My first React App</p>
        <a className="btn btn-outline-primary" onClick={() => login()} role="button" >
          <img width="20px" margin-right="5px" alt="Google sign-in" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
          Login with Google
        </a>
        {/* )} */}
      </div>

    </>
  );

}

export default LogIn
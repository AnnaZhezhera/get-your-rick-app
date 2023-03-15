import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginFB = ({ loginCallback }) => {
  const [login, setLogin] = useState(false);
  const [, setPicture] = useState('');

  const responseFacebook = response => {
    if (response.accessToken && response.status !== 'unknown') {
      setLogin(true);
      setPicture(response.picture.data.url);
      loginCallback(response);
    } else {
      setLogin(false);
    }
  };
  return (
    <div>
      <div style={{ width: '300px', margin: '50px auto 0' }}>
        <h2>
          {!login && (
            <FacebookLogin
              appId="500862838731626"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook"
            />
          )}
        </h2>
      </div>
    </div>
  );
};

export default LoginFB;

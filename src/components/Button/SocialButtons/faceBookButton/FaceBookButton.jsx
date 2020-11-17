import React from 'react';
import ReactFacebookLogin from 'react-facebook-login';

export const FaceBookButton = (props) => {
  const { responseFacebook } = props;
  return (
    <ReactFacebookLogin
      appId='371851764012809'
      autoLoad={true}
      fields='name,email,picture'
      scope='public_profile,user_friends,user_actions.books'
      callback={responseFacebook}
    />
  );
};

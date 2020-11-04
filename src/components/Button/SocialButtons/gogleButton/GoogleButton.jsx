import React from 'react'

import GoogleLogin, {useGoogleLogin} from 'react-google-login';

export const GoogleButton = props =>{
  const { buttonText} = props
  const responseGoogle = response =>{
    console.log(response)
  }
  
 
  return (
    <GoogleLogin
      clientId='302164701962-aj8f9msqbu1u58tpg45tn3gtq5gtqi4v.apps.googleusercontent.com'
      buttonText={buttonText}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      theme='dark'
      cookiePolicy='single_host_origin'
    />

  )
}

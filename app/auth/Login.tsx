import React from 'react'
import AuthPage from '../../components/auth/AuthPage'
import AuthForm from '../../components/auth/AuthForm'
import { loginFormData } from '../../data/authFormData'
import { loginSchema } from '../../data/ValidationSchema'

const userInput = {
  email: {
    value: '',
    validationStatus: ''
  },
  password: {
    value: '',
    validationStatus: ''
  },
}

const Login = () => {

  return (
   <AuthPage
   title={'Welcome Back!'}
   auth={'login'}
   subTitle={'Enter your email to start shopping and get awesome deals today!'}
   showLink={true}
   >
    <AuthForm
    ctaLabel={'Log In'}
    formData={loginFormData}
    inputData={userInput}
    validationSchema={loginSchema}
    />
   </AuthPage>
  )
}

export default Login
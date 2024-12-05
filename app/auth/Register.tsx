import React from 'react'
import AuthPage from '../../components/auth/AuthPage'
import AuthForm from '../../components/auth/AuthForm'
import { RegisterFormData } from '../../data/authFormData'
import { registerSchema } from '../../data/ValidationSchema'
import { ScrollView } from 'react-native'


const registerInput = {
  lastName: {
    value: '',
    validationStatus: ''
  },
  firstName: {
    value: '',
    validationStatus: ''
  },
  email: {
    value: '',
    validationStatus: ''
  },
  password: {
    value: '',
    validationStatus: ''
  },
}


const Register = () => {
  return (
    <ScrollView>
      <AuthPage
        auth={'register'}
        title={'Create Account'}
        subTitle={'Fill in your details below to get started on a seamless shopping experience.'}
        showLink={false}
      >
        <AuthForm
          ctaLabel={'Create Account'}
          showTermsofUse={true}
          formData={RegisterFormData}
          inputData={registerInput}
          validationSchema={registerSchema}
        />
      </AuthPage>
    </ScrollView>
  )
}

export default Register
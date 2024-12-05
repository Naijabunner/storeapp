import React, { ChangeEvent, useState } from 'react'
import { InputData } from '../components/auth/AuthForm'

const useForm = <T extends string>(initialData:  InputData<T> ) => {
    const [data, setdata] = useState(initialData)
    const [error, seterror] = useState(initialData)
    const [isSubmitting, setisSubmitting] = useState('')

    const handleOnChange=(value: string, name: string)=>{
      console.log(value)
      console.log(name)
        
         setdata((prev) => ({
             ...prev, [name]:{
              //@ts-ignore
               ...prev[name],
               value: value,
             }
         }))
    }
    const handleSubmit=()=>{
    }
    const resetForm=()=>{
    }


  return {
    data,
    error,
    isSubmitting,
    handleOnChange,
    handleSubmit,
    resetForm,
  }}

export default useForm
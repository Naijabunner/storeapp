import { StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Button from '../UI/Button'
import CustomInput from '../UI/input'
import Seperator from '../UI/Seperator'
import { Colors } from '../../constants/colors'
import typography from '../../constants/typography'
import useForm from '../../hooks/useForm'
import { LoginProps } from '../../models/forms/authForms'


 interface InputField { 
    value: string; 
    validationStatus: string;
}

export type InputData<T extends string> = { 
    [key in T]: InputField; 
};

type AuthFormProps<T extends string>={
    showTermsofUse?: boolean,
    ctaLabel: string,
    inputData: InputData<T>,
    formData: LoginProps[]
    validationSchema:any
}

const AuthForm=<T extends string>({ showTermsofUse= false, ctaLabel, inputData, formData, validationSchema, }: AuthFormProps<T>)=> {

    const { data: inputVal,
        error,
        isSubmitting,
        handleOnChange,
        handleSubmit,
        resetForm, } = useForm(inputData)

    return (
        <View >
            {formData.map((data, index)=>{return <CustomInput key={index} {...data}  handleChange={handleOnChange} value={inputVal[data.name].value} />})}
            {showTermsofUse
             && (<Text style={[{ marginVertical: 20, color: Colors.neutral_70}, typography.bodySmallRegular]}>
                    By clicking Create Account, you acknowledge
                    you have read and agreed to our {' '}
                    <Text style={styles.highlightText}>Terms of Use</Text>{' '}
                    and
                    {' '}<Text style={styles.highlightText}>Privacy Policy</Text>
                </Text>)
            }
            <Button
                title={ctaLabel}
                textStyle={{ textAlign: 'center' }}
                containerStyle={{ marginHorizontal: 0 }}
                onPress={() => { }}
            />
            <Seperator>
                <Text style={{ color: Colors.text, marginHorizontal: 4 }}>OR</Text>
            </Seperator>
        </View>
    )
}

export default AuthForm

const styles = StyleSheet.create({
    highlightText: {
        color: Colors.primary
    }
})
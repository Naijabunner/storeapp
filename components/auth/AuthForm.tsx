import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../UI/Button'
import CustomInput from '../UI/input'
import Seperator from '../UI/Seperator'
import { Colors } from '../../constants/colors'
import typography from '../../constants/typography'
const AuthForm = ({ showTermsofUse, ctaLabel, }: { showTermsofUse: boolean, ctaLabel: string }) => {
    return (
        <View >
            <CustomInput />
            <CustomInput />
            {showTermsofUse && (
                <Text style={[{
                    marginVertical: 20,
                    color: Colors.neutral_70
                }, typography.bodySmallRegular]}>
                    By clicking Create Account, you acknowledge
                    you have read and agreed to our {' '}
                    <Text style={styles.highlightText}>Terms of Use</Text>{' '}
                    and
                    {' '}<Text style={styles.highlightText}>Privacy Policy</Text>
                </Text>
            )}
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
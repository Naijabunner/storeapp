import React, { useRef, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper'; 
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../constants/colors';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import OnboardText from '../components/onBoard/OnboardText';
import Button from '../components/UI/Button';
import { useRouter } from 'expo-router';
import { appRoutes } from '../constants/routes';

const { width, height } = Dimensions.get('window');

const data=[
  { backgroundColor:'white',
     imagePath: require('../assets/onboard/onboard-img-one.png'),
     title:'Online Home Store and Furniture',
     subtitle:'Discover all style and budgets of furniture, appliances, kitchen, and more from 500+ brands in your hand.',
 },
  { backgroundColor:'white',
     imagePath: require('../assets/onboard/onboard-img-two.png'),
     title:'Delivery Right to Your Doorstep',
     subtitle:'Sit back, and enjoy the convenience of our drivers delivering your order to your doorstep.',
 },
  { backgroundColor:'white',
     imagePath: require('../assets/onboard/onboard-img-three.png'),
     title:'Get Support From Our Skilled Team',
     subtitle:`If our products don't meet your expectations, we're available 24/7 to assist you.`,
 }
]


const OnBoard = () => {
  const router = useRouter()
  const onboardingRef = useRef<Onboarding>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // DOne Button Component
  const DoneButton = () => {
    const nextHandler = () => {
      //@ts-ignore
      // onboardingRef?.current?.goToPage(0, true)
      router.replace(appRoutes.Login)
    }
    return (
      <>
        <Button
          title={'DONE'}
          containerStyle={{ marginLeft: 15 }}
          variant={'primary'}
          onPress={nextHandler}
        />
      </>
    )
  }

  // skip Button COmponent
  const SkipButton = () => {
    const skipHandler = () => {
      //@ts-ignore
      onboardingRef?.current?.goToPage(data.length - 1, true)
    }

    return (
      <>
        <Button
          title={'Skip'}
          containerStyle={{ marginLeft: 15 }}
          variant={'alternate'}
          onPress={skipHandler}
        />
      </>
    )
  }

  //Next button component
  const NextButton = ({ ...rest }) => {
    const nextHandler = () => {
      onboardingRef?.current?.goNext()
    }

    return (
      <>
        <Button
          {...rest}
          title='Next'
          containerStyle={{ marginRight: 15 }}
          onPress={nextHandler}
        />
      </>
    )
  }

  const DotComponent = ({ selected }: { selected: boolean }) => {
    return (
      <View style={{
        height: 6,
        width: selected ? 15 : 6,
        backgroundColor: selected ? Colors.primary : 'gray',
        borderRadius: 6,
        marginHorizontal: 3
      }} />
    )
  }

  return (
    <>
      <StatusBar />
      <Onboarding
        ref={onboardingRef}
        pages={data.map((onboardData, index) => ({
          backgroundColor: onboardData.backgroundColor,
          image: <Image source={onboardData.imagePath} style={{ backgroundColor: Colors.primary, width: width, height: '100%' }} />,
          title: (
            <OnboardText
              text={onboardData.title}
              type={'title'}
            />
          ),
          subtitle: (
            <OnboardText
              text={onboardData.subtitle}
              type={'subtitle'}
            />
          ),
        }))
        }
        imageContainerStyles={styles.imageContainerStyles}
        containerStyles={styles.containerStyle}
        titleStyles={styles.titleStyles}
        subTitleStyles={styles.subTitleStyles}
        bottomBarHeight={100}
        bottomBarHighlight={false}
        DotComponent={DotComponent}
        DoneButtonComponent={DoneButton}
        SkipButtonComponent={SkipButton}
        NextButtonComponent={NextButton}
      />
    </>

  )
}

export default OnBoard

const styles = StyleSheet.create({
  imageContainerStyles: {
    paddingBottom: 0,
    paddingVertical: 0,
    height: height / 1.8,
    width: width + 300,
    borderBottomEndRadius: '50%',
    borderBottomStartRadius: '50%',
    overflow: 'hidden',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 0,
  },
  titleStyles: {

  },
  subTitleStyles: {

  },


})
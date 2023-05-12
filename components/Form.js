import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Signup from './Signup'
import PersonalDetails from './PersonalDetails'
import Extra from './Extra'

const Form = () => {
  const [formData, setFormData] = useState({
    // Signup
    name: '',
    email: '',
    password: '',
    cpassword: '',

    // Personal Details
    age: '',
    designation: '',
    company: '',

    // Extras
    hobbies: '',
    activities: '',
  })

  const [screen, setScreen] = useState(0)
  const FormTitle = [
    'Signup',
    'Personal Details',
    'Extra',
  ]
  const ScreenDisplay = () => {
    switch (screen) {
      case 0:
        return <Signup formData={formData} setFormData={setFormData} />
      case 1:
        return <PersonalDetails formData={formData} setFormData={setFormData} />
      case 2:
        return <Extra formData={formData} setFormData={setFormData} />
      default:
        return <Signup formData={formData} setFormData={setFormData} />
    }
  }
  return (
    <>
    <View style={styles.wrapper}>
      <Text style={{ fontSize: 32 }}>{FormTitle[screen] + " Screen"}</Text>
      <View>{ScreenDisplay()}</View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          onPress={() => {setScreen((currScreen) => currScreen - 1)}}
          disabled={screen === 0}
        >
          <Text style={styles.button}>Prev</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            if (screen === FormTitle.length - 1) {
              console.log(formData);
            } else {
              setScreen((currScreen) => currScreen + 1)
            }
          }}
        >
          <Text style={styles.button}>
            { screen === FormTitle.length - 1 ? "Submit" : "Next"}
          </Text>
        </Pressable>
      </View>
    </>
  )
}
export default Form

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    justifyContent: 'center',
    color: 'white',
    backgroundColor: 'gray',
    paddingVertical: 5,
    paddingHorizontal: 30,
    marginLeft: 20,
    textAlign: 'center',
  }
})
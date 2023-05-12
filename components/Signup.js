import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Signup({formData, setFormData}) {
  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Enter your name'
          value={formData.name}
          onChangeText={(name) => {
            setFormData({...formData, name})
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Enter your email'
          value={formData.email}
          onChangeText={(email) => {
            setFormData({...formData, email})
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Enter your password'
          value={formData.password}
          onChangeText={(password) => {
            setFormData({...formData, password})
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Confirm Password'
          value={formData.cpassword}
          onChangeText={(cpassword) => {
            setFormData({...formData, cpassword})
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: '#ffc0cb',
    borderRadius: 15,
    width: 170,
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
  }
})
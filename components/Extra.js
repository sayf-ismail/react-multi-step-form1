import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function Extra({formData, setFormData}) {
  return (
    <>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Enter your hobbies'
          value={formData.hobbies}
          onChangeText={(hobbies) => {
            setFormData({...formData, hobbies})
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholderTextColor={'#003f5c'}
          placeholder='Enter your activities'
          value={formData.activities}
          onChangeText={(activities) => {
            setFormData({...formData, activities})
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
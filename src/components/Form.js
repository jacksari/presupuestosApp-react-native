import React,{useState} from "react";
import { View, Text, StyleSheet,TextInput } from 'react-native'
import colors from "../utils/colors";
import {Picker} from '@react-native-picker/picker';


function Form({setCapital,setInterest,setMonths,months}) {

  return (
    <View style={styles.viewForm}>
      <View style={styles.viewInput}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={styles.input}
          onChange={(e)=> setCapital(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[styles.input, styles.inputPercentaje]}
          onChange={(e)=> setInterest(e.nativeEvent.text)}
        />
      </View>
      <Picker
        selectedValue={months}
        style={pickerSelectStyles.input}
        onValueChange={(itemValue, itemIndex) => setMonths(itemValue)}
      >
        <Picker.Item label="Seleccione plazos" value={null}/>
        <Picker.Item label="3 meses" value="3" />
        <Picker.Item label="6 meses" value="6" />
        <Picker.Item label="9 meses" value="9" />
        <Picker.Item label="12 meses" value="12" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  viewForm: {
    position: 'absolute',
    top: 90,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
    zIndex: 1,
  },
  viewInput: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.PRIMARY_COLOR,
    borderRadius: 15,
    width: '60%',
    marginRight: 5,
    marginLeft: -5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
  },
  inputPercentaje: {
    width: '40%',
    marginLeft: 5
  }
})

const pickerSelectStyles = StyleSheet.create({
  input: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    color: 'black',
    paddingRight: 30,
    backgroundColor: '#fff',
    marginHorizontal: -5
  }
})



export default Form;

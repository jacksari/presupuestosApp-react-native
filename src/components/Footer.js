import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../utils/colors";

function Footer({calcular}) {
  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 100,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: colors.PRIMARY_COLOR_DARK,
    borderRadius: 20,
    padding: 10,
    width: '75%'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    padding: 10,
    textAlign: 'center'
  },
})

export default Footer;

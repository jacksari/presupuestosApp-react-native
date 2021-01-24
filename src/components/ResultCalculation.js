import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import DataResult from "./DataResult";

function ResultCalculation({errorMessage, capital, interest, months, total}) {
  return (
    <View style={styles.content}>
      {total && (
          <View style={styles.boxResult}>
            <Text style={styles.title}>RESUMEN</Text>
            <DataResult
              styles={styles.value}
              label="Cantidad solicitada:"
              value={capital}
            />
            <DataResult
              styles={styles.value}
              label="Interes %:"
              value={interest}
            />
            <DataResult
              styles={styles.value}
              label="Plazos:"
              value={months}
            />
            <DataResult
              styles={styles.value}
              label="Pago mensual:"
              value={`S/. ${total.monthlyFee} `}
            />
            <DataResult
              styles={styles.value}
              label="Pago total:"
              value={`S/. ${total.totalPayable} `}
            />

          </View>
      )}
      <View>
        <Text style={styles.error}>{errorMessage}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    textAlign: 'center',
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 15
  },
  content: {
    marginTop: 0,
    marginHorizontal: 50
  },
  boxResult:{
    padding: 30
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30
  },
  value:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  }
})

export default ResultCalculation;

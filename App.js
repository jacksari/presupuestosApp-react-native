import React,{useState, useEffect} from 'react';
import {StyleSheet, View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import colors from './src/utils/colors'
import Form from "./src/components/Form";
import Footer from "./src/components/Footer";
import ResultCalculation from "./src/components/ResultCalculation";

function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (capital && interest && months) calcular();
    else reset();
  }, [capital, interest, months]);

  const calcular = () => {
    reset()
    if(!capital){
        setError('Añade la cantidad que quieres solicitar')
    }else if(!interest){
        setError('Añade el interes del prestamo')
    }else if(!months){
        setError('Seleccione los meses a pagar')
    } else{
      setError(null)
      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.',','),
        totalPayable: (fee * months).toFixed(2).replace('.',',')
      })
      console.log('total', total);
    }
  }
  const reset = () => {
    setError('');
    setTotal(null);
  };

  return (
    <>
      <StatusBar barStyle="light-content"/>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.back}/>
        <Text style={styles.titleApp}>Cotizador de Prestamos</Text>
        <Form
          months={months}
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
        />
      </SafeAreaView>

      <ResultCalculation capital={capital} errorMessage={error} interest={interest} months={months} total={total}/>

      <Footer calcular={calcular}/>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    height: 290,
    alignItems: 'center',
  },
  titleApp:{
    position: 'absolute',
    top: 25,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 10
  },
  back: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  }
});

export default App;

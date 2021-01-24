import React from "react";
import { Text, View } from "react-native";

function DataResult({styles, label, value}) {
  return (
    <View style={styles}>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}

export default DataResult;

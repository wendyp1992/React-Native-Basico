import React, { Component } from "react";
import { StyleSheet, Text, View, Image, AppRegistry } from "react-native";

export default class Bananas extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello world!</Text>
        <Text style={styles.instructions}>
          La siguiente es una guia para que puedas avanzar en el mundo de React
          Native
        </Text>
        <Text style={styles.instructions}>
          Presione Cmd+R para recargar, {"\n"}, Cmd+D or shake for dev menu.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //StyleSheet permite declarar los estilos de la aplicacion
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "gray"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    color: "red",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "purple",
    marginBottom: 5
  }
});
AppRegistry.registerComponent("Agenda Citas", () => Bananas);

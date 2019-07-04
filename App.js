import React, { Component } from "react";
import { StyleSheet, Text, View, Image, AppRegistry } from "react-native";

export default class Bananas extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg"
    };
    return <Image source={pic} style={{ width: 500, height: 300 }} />;
  }
}

AppRegistry.registerComponent("AwesomeProject", () => Bananas);

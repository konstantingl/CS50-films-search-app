import React from 'react';
import { StyleSheet } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class Loader extends React.Component {

  render() {
    const { visible } = this.state;
    return (
      <AnimatedLoader
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      />
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});

import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Product from "./Product";
const Card = ({ img, price, title,id }) => {
  return (
    <View>
      <Image source={img} />
      <Text>{price}</Text>
      <Text>{title}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  // img: {
  //   width: 100,
  //   height: 100,
  // },
});

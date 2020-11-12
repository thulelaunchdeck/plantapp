import React from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

const Card = ({ color, style, children, ...rest }) => {
  const cardStyles = [styles.card, style];

    return (
      <Block color={color || theme.colors.white} style={cardStyles} {...rest}>
        {children}
      </Block>
    );
}
export default Card;

export const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base
  }
});

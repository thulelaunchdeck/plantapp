import React from "react";
import { StyleSheet } from "react-native";

import Block from "./Block";
import { theme } from "../constants";

const Badge = ({ children, style, size, color, ...rest }) => {
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size
    },
    style
  ]);

  return (
    <Block
      flex={false}
      middle
      center
      color={color}
      style={badgeStyles}
      {...rest}
    >
      {children}
    </Block>
  );
}
export default Badge;

const styles = StyleSheet.create({
  badge: {
    height: theme.sizes.base,
    width: theme.sizes.base,
    borderRadius: theme.sizes.border
  }
});

import React, {useState, useEffect} from "react";
import { StyleSheet, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

import Text from "./Text";
import Block from "./Block";
import Button from "./Button";
import { theme } from "../constants";

const Input = ({ label, error, secure, rightLabel, rightStyle, onRightPress, email, phone, number, style, ...rest }) => {
  const [isSecure, setSecure] = useState(false);

  useEffect(() => {
    if (secure) {
      setSecure(true);
    }
  }, []);

  const renderLabel = () => {
    return (
      <Block flex={false}>
        {label ? (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        ) : null}
      </Block>
    );
  }

  const renderToggle = () => {
    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => setSecure(!isSecure)}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={theme.colors.gray}
            size={theme.sizes.font * 1.35}
            name={isSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  const renderRight = () => {
    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  const inputStyles = [
    styles.input,
    error && { borderColor: theme.colors.accent },
    style
  ];

  const inputType = email
    ? "email-address"
    : number
    ? "numeric"
    : phone
    ? "phone-pad"
    : "default";

  return (
    <Block flex={false} margin={[theme.sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...rest}
      />
      {renderToggle()}
      {/* {renderRight()} */}
    </Block>
  );
}

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.black,
    borderRadius: theme.sizes.radius,
    fontSize: theme.sizes.font,
    fontWeight: "500",
    color: theme.colors.black,
    height: theme.sizes.base * 3
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: theme.sizes.base * 2,
    height: theme.sizes.base * 2,
    top: theme.sizes.base,
    right: 0
  }
});

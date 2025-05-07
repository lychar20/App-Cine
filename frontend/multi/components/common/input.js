import React from "react"
import { TextInput, StyleSheet } from "react-native"
import { colorList } from "../../constants/colors"

export default function Input({
  placeholder,
  style,
  textStyle,
  placeholderTextColor,
  keyboardType,
  secureTextEntry,
  onChangeText
}) {
  return (
    <TextInput
      testID="text-input"
      placeholder={placeholder}
      style={[styles.input, style, textStyle]}
      placeholderTextColor={placeholderTextColor || "#fff"}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: "white",
    textAlign: "center",
    borderRadius: 20,
    height: 45,
    marginHorizontal: 35,
    color: colorList.neonPink,
    paddingHorizontal: 10,
    marginTop: 20,
    backgroundColor: "white"
  }
})
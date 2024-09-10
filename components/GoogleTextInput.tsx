import { View, Text } from "react-native";
import React from "react";
import { GoogleInputProps } from "@/types/type";

const GoogleTextInput = ({
  icon,
  containerStyle,
  handlePress,
  textInputBackgroundColor,
  initialLocation,
}: GoogleInputProps) => {
  return (
    <View
      className={`flex flex-row items-center justify-center relative z-50 rounded-xl mb-5 ${containerStyle}`}
    >
      <Text>search</Text>
    </View>
  );
};

export default GoogleTextInput;

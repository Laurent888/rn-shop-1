import React from "react";
import { View, Text } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          fontWeight: "600",
        }}
      >
        Loading...
      </Text>
    </View>
  );
};

export default LoadingScreen;

import React from "react";
import { View, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}
    >
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={{ color: "#efefef", fontWeight: "700", fontSize: 20 }}>
        Meet & Chat
      </Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;

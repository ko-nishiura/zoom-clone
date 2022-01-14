import React from "react";
import { View, Text, TextInput } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View
      style={{
        backgroundColor: "#333333",
        flexDirection: "row",
        paddingHorizontal: 10,
        height: 40,
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Fontisto name="search" size={20} color={"#858585"} />
      <Text style={{ color: "#858585", paddingLeft: 10, fontSize: 20 }}>
        Search
      </Text>
    </View>
  );
};

export default SearchBar;

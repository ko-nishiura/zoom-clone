import React from "react";
import { View, Text, Pressable } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const ChatHeader = ({ setModalVisible }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
      }}
    >
      <Pressable onPress={() => setModalVisible(false)}>
        <Text style={{ color: "#fff", fontSize: 20 }}>Close</Text>
      </Pressable>
      <Text style={{ color: "#fff", fontSize: 20, fontWeight: "800" }}>
        Chat
      </Text>
      <Entypo name="bell" size={25} color="#efefef" />
    </View>
  );
};

export default ChatHeader;

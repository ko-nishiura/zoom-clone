import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "video-camera",
    title: "New Meeting",
    color: "#ff751f",
  },
  {
    id: 2,
    name: "plus-square",
    title: "Join",
  },
  {
    id: 3,
    name: "calendar",
    title: "Schedule",
  },
  {
    id: 4,
    name: "upload",
    title: "Share Screen",
  },
];

const MenuButtons = ({ navigation }) => {
  const openMeeting = () => {
    navigation.navigate("Room");
  };

  return (
    <View
      style={{
        marginTop: 25,
        paddingBottom: 10,
        borderBottomColor: "#1f1f1f",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {items.map((item, index) => (
        <View style={{ alignItems: "center", flex: 1 }} key={index}>
          <TouchableOpacity
            style={{
              height: 50,
              width: 50,
              backgroundColor: item.color ? item.color : "#0479dc",
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (item.id == 1) {
                openMeeting();
              }
            }}
          >
            <FontAwesome name={item.name} size={23} color={"#efefef"} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#858585",
              fontSize: 12,
              paddingTop: 10,
              fontWeight: "600",
            }}
          >
            {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default MenuButtons;

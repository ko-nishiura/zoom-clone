import React from "react";
import { View, Text, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactMenuButtons = [
  {
    type: "starred",
    name: "starred",
  },
  {
    type: "contact",
    name: "kelly",
    photo: require("../assets/kelly-sikkema-JN0SUcTOig0-unsplash.jpg"),
  },
  {
    type: "contact",
    name: "ethan",
    photo: require("../assets/ethan-hoover-0YHIlxeCuhg-unsplash.jpg"),
  },
  {
    type: "contact",
    name: "stefan",
    photo: require("../assets/stefan-stefancik-QXevDflbl8A-unsplash.jpg"),
  },
];

const ContactsMenu = () => {
  return (
    <View style={{}}>
      {contactMenuButtons.map((item, index) => (
        <View
          key={index}
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          {item.type === "starred" ? (
            <View
              style={{
                backgroundColor: "#333",
                height: 55,
                width: 55,
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AntDesign name="star" size={30} color={"#efefef"} />
            </View>
          ) : (
            <Image
              source={item.photo}
              style={{ height: 55, width: 55, borderRadius: 20 }}
            />
          )}
          <Text style={{ paddingLeft: 20, color: "#efefef", fontSize: 18 }}>
            {item.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default ContactsMenu;

import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import ChatHeader from "./ChatHeader";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Chat = ({ modalVisible, setModalVisible }) => {
  const [messageText, setMessageText] = React.useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1c" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1 }}>
              <ChatHeader setModalVisible={setModalVisible} />
              <View style={{ flex: 1 }}></View>
              <View
                style={{
                  borderColor: "#2f2f2f",
                  borderTopWidth: 1,
                  padding: 12,
                }}
              >
                <Text style={{ color: "#fff" }}>Send to: Everyone</Text>
                <View style={{ flexDirection: "row" }}>
                  <TextInput
                    style={{
                      height: 40,
                      color: "#efefef",
                      borderColor: "#595859",
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 12,
                      marginTop: 12,
                      flex: 1,
                    }}
                    placeholder="Tap here to chat"
                    placeholderTextColor="#595859"
                    value={messageText}
                    onChangeText={(text) => setMessageText(text)}
                  />
                  <TouchableOpacity
                    style={{
                      height: 40,
                      width: 40,
                      marginTop: 12,
                      marginLeft: 12,
                      backgroundColor: messageText ? "#0b71eb" : "#373838",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 10,
                    }}
                  >
                    <FontAwesome name="send" size={18} color="#efefef" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
};

export default Chat;

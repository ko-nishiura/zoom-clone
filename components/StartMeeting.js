import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const StartMeeting = ({ name, roomId, setName, setRoomId, joinRoom }) => {
  return (
    <View>
      <View style={{}}>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            value={name}
            placeholder="Enter name"
            placeholderTextColor="#767476"
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter room id"
            placeholderTextColor="#767476"
            value={roomId}
            onChangeText={(text) => setRoomId(text)}
          />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => joinRoom()}
          style={{
            width: 350,
            height: 50,
            marginTop: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0470dc",
            borderRadius: 15,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "800" }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StartMeeting;

const styles = StyleSheet.create({
  textInputView: {
    width: "100%",
    backgroundColor: "#373528",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: {
    color: "#fff",
    fontSize: 18,
  },
});

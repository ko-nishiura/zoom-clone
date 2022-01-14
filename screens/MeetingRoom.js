import React, { useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";
import { Camera } from "expo-camera";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Chat from "../components/Chat";

const menuIcons = [
  { id: 1, name: "microphone", title: "Mute", customColor: "#efefef" },
  { id: 2, name: "video-camera", title: "Stop Video", customColor: "#" },
  { id: 3, name: "upload", title: "Share Content", customColor: "#" },
  { id: 4, name: "group", title: "Participants", customColor: "#" },
];

const MeetingRoom = () => {
  const [name, setName] = React.useState();
  const [roomId, setRoomId] = React.useState();
  const [activeUser, setActiveUser] = React.useState([]);
  const [startCamera, setStartCamera] = React.useState(false);
  const [modalVisible, setModalVisible] = React.useState(false);

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Access denied");
    }
  };

  const joinRoom = () => {
    __startCamera();
    socket.emit("join-room", { roomId: roomId, userName: name });
  };

  useEffect(() => {
    const API_URL = "http://192.168.100.196:3001";
    socket = io(`${API_URL}`);
    socket.on("connection", () => console.log("connected"));
    socket.on("all-users", (users) => {
      setActiveUser(users);
    });
  }, []);

  return (
    <View style={{ backgroundColor: "#1c1c1c", flex: 1 }}>
      {startCamera ? (
        <SafeAreaView style={{ flex: 1 }}>
          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={"fullScreen"}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Chat
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </Modal>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#000",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <Camera
                type={"front"}
                style={{
                  width: activeUser.length <= 1 ? "100%" : 150,
                  height: activeUser.length <= 1 ? 600 : 150,
                }}
              ></Camera>
              {activeUser
                .filter((user) => user.userName != name)
                .map((user, index) => (
                  <View
                    key={index}
                    style={{
                      borderColor: "#333",
                      borderWidth: 1,
                      width: 150,
                      height: 150,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>{user.userName}</Text>
                  </View>
                ))}
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            {menuIcons.map((icon, index) => (
              <TouchableOpacity
                key={index}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 50,
                  marginTop: 15,
                }}
              >
                <FontAwesome name={icon.name} size={24} color="#efefef" />
                <Text style={{ color: "#FFF", marginTop: 10 }}>
                  {icon.title}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 50,
                marginTop: 15,
              }}
              onPress={() => setModalVisible(true)}
            >
              <FontAwesome name={"comment"} size={24} color="#efefef" />
              <Text style={{ color: "#FFF", marginTop: 10 }}>Chat</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      ) : (
        <StartMeeting
          name={name}
          setName={setName}
          roomId={roomId}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )}
    </View>
  );
};

export default MeetingRoom;

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

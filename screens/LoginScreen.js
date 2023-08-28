import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";
import image from "../assets/icon.png";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar />
      <ImageBackground
        source={{
          uri: "https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg",
        }}
        resizeMode="stretch"
        style={styles.image}
      >
        <KeyboardAvoidingView style={{ alignItems: "center" }}>
          <View>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                paddingBottom: 5,
                color: "#fff",
              }}
            >
              Email
            </Text>
            <TextInput
              placeholder="Ex : abc@gmail.cpm"
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 10,
                backgroundColor: "#fff",
                width: 350,
                padding: 5,
                paddingLeft: 15,
                marginBottom: 10,
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text
              style={{
                fontWeight: 600,
                fontSize: 16,
                paddingBottom: 5,
                color: "#fff",
              }}
            >
              Password
            </Text>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 10,
                width: 350,
                padding: 5,
                paddingLeft: 15,
                backgroundColor: "#fff",
                marginBottom: 10,
              }}
            />
          </View>
          <Pressable
            style={{
              width: 350,
              backgroundColor: "blue",
              padding: 10,
              marginTop: 20,
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </Pressable>
          <View style={{ marginTop: 20 }}>
            <Pressable onPress={() => navigation.navigate("Register")}>
              <Text style={{ fontSize: 16, color: "#fff" }}>
                Don't have an account?{" "}
                <Text style={{ color: "red", fontSize: 18 }}>Sign Up</Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

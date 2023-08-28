import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Pressable } from "react-native";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 16,
            paddingBottom: 5,
          }}
        >
          Name
        </Text>
        <TextInput
          placeholder="Name"
          spellCheck={true}
          style={{
            borderWidth: 1,
            borderColor: "#181818",
            borderRadius: 10,
            width: 350,
            padding: 5,
            paddingLeft: 15,
            marginBottom: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 16,
            paddingBottom: 5,
          }}
        >
          Email
        </Text>
        <TextInput
          placeholder="Ex : abc@gmail.com"
          style={{
            borderWidth: 1,
            borderColor: "#181818",
            borderRadius: 10,
            width: 350,
            padding: 5,
            paddingLeft: 15,
            marginBottom: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 16,
            paddingBottom: 5,
          }}
        >
          Password
        </Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderColor: "#181818",
            borderRadius: 10,
            width: 350,
            padding: 5,
            paddingLeft: 15,
            marginBottom: 10,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontWeight: 600,
            fontSize: 16,
            paddingBottom: 5,
          }}
        >
          Confirm Password
        </Text>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={{
            borderWidth: 1,
            borderColor: "#181818",
            borderRadius: 10,
            width: 350,
            padding: 5,
            paddingLeft: 15,
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
      >
        <Text
          style={{
            textAlign: "center",
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Register
        </Text>
      </Pressable>
      <View style={{ marginTop: 20 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={{ fontSize: 16, color: "#181818" }}>
            Already have an Account?
            <Text style={{ color: "red", fontSize: 18 }}>Sign In</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterScreen;

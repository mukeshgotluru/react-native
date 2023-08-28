import { StyleSheet, Text, View } from "react-native";

const Home = (props) => {
  const { children, style, isDarkTheme } = props;

  return (
    <View style={[styles.box, style]}>
      <Text style={{ color: isDarkTheme ? "#fff" : "#181818" }}>
        {children}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
});

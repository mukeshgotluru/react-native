import { StyleSheet } from "react-native";
import StackNavigator from "./StackNavigator";

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    padding: 10,
    position: "absolute",
  },
  scroll: {
    height: 900,
    flex: 1,
  },
  image: {
    width: 190,
    height: 210,
  },
  imageCont: {
    width: 190,
    height: 210,
    margin: 10,
  },
  wrapContainer: {
    flex: 1,
    flexWrap: "wrap-reverse",
    width: "100%",
  },
  button: {
    borderRadius: 25,
    width: 100,
  },
  background: {
    backgroundColor: "lightgreen",
  },
  mini: {
    backgroundColor: "skyblue",
  },
  modal: {
    height: 200,
    marginTop: "75%",
  },
});

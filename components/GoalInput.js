import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your Course Goal"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="#F31282" />
          </View>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={addGoalHandler} color="#B180F0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: 'center',
    paddingBottom: 24,
    padding: 10,
    backgroundColor: '#311B6B',
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#E4D0FF",
    backgroundColor: '#E4D0FF',
    color: '#120438',
    borderRadius: 6,
    width: '80%',
    marginBottom: 20,
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin:20,
  }
});

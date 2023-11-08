import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
// 20520541 - Ngô Nhật Huy
const Feedback = ({ feedback, onChangeFb, handleSendFeedbackClick, darkMode }) => {
  return (
    <View>
      <Text style={[styles.title, darkMode]}>Feedback</Text>
      <TextInput
        style={[styles.textInput, darkMode]}
        placeholder="Your feedback here..."
        multiline
        numberOfLines={4}
        textAlignVertical="top"
        value={feedback}
        onChangeText={onChangeFb}
      />
      <Button title="SEND FEEDBACK" onPress={handleSendFeedbackClick} style={styles.sendButton} />
    </View>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    color: 'black',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    height: 120,
  },
  sendButton: {
    borderWidth: 1,
    borderRadius: 5,
  },
});

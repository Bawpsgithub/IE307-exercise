import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { db } from '../db/db';
import { SettingsContext } from './SettingsContext';
// Ngô Nhật Huy - 20520541
const AddNoteScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { darkMode, fontSize } = useContext(SettingsContext);

  const navigation = useNavigation();

  const addNote = (titleText, contentText) => {
    if (titleText.trim() === '') {
      Alert.alert('Warning', 'Please enter a title!');
      return;
    }
    db.transaction((tx) => {
      tx.executeSql('INSERT INTO notes (title, content) VALUES (?, ?)', [titleText, contentText],
        () => {
          navigation.goBack();
        });
    });
  };

  const titleHeight = fontSize !== null ? fontSize + 34 : 40;
  const contentHeight = titleHeight + 70;

  const textInputFontSize = fontSize !== null ? fontSize : 14;
  const confirmIconSize = fontSize !== null ? fontSize + 20 : 34;

  const renderInput = (placeholder, state, setState, style) => (
    <TextInput
      placeholder={placeholder}
      multiline
      style={[styles.input, style, { height: style === styles.inputTitle ? titleHeight : contentHeight }, darkMode && styles.darkColor]}
      onChangeText={(text) => setState(text)}
      placeholderTextColor={darkMode ? 'white' : 'black'}
      value={state}
      fontSize={textInputFontSize}
    />
  );

  const renderIconButton = (name, color, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <MaterialIcon name={name} size={confirmIconSize} color={color} />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      {renderInput('Enter your title', title, setTitle, styles.inputTitle)}
      {renderInput('Enter your note', content, setContent, styles.inputNote)}
      <View style={styles.iconButton}>
        {renderIconButton('cancel', '#FC0000', () => navigation.goBack())}
        {renderIconButton('check-circle', '#00FF01', () => addNote(title, content))}
      </View>
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  inputTitle: {
    margin: 12,
  },
  inputNote: {
    marginHorizontal: 12,
  },
  iconButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    gap: 5,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  darkColor: {
    color: 'white',
    borderColor: 'white',
  },
});

export default AddNoteScreen;

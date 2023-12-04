import React, { useEffect, useState, useCallback, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { SettingsContext } from './SettingsContext';
import { db } from '../db/db';
// Ngô Nhật Huy - 20520541
const Note = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { darkMode, fontSize } = useContext(SettingsContext);
  const [notes, setNotes] = useState([]);

  const fetchData = useCallback(() => {
    try {
      db.transaction(tx => {
        tx.executeSql('SELECT * FROM notes', [], (_, results) => {
          console.log('Query completed');
          const notesArray = [];
          const len = results.rows.length;

          if (len > 0) {
            for (let i = 0; i < len; i++) {
              const row = results.rows.item(i);
              notesArray.push(row);
            }

            setNotes(notesArray);
          } else {
            setNotes([]);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      fetchData();
      console.log('NoteList fetched!');
    }
  }, [isFocused, fetchData]);

  const deleteNote = (id) => {
    db.transaction((tx) => {
      tx.executeSql('DELETE FROM notes WHERE id=?', [id], () => {
        fetchData();
      });
    });
  };

  const appNameFontSize = fontSize !== null ? fontSize + 8 : 20;
  const titleFontSize = appNameFontSize - 2;
  const addNoteIconSize = fontSize !== null ? fontSize + 20 : 34;

  const itemContainerStyle = { backgroundColor: darkMode ? 'black' : 'white' };
  const itemTextColor = { color: darkMode ? '#FFF' : 'gray' };
  const itemIconColor = { color: darkMode ? 'white' : 'black' };
  const itemFontSize = fontSize !== null ? fontSize : 34;
// Ngô Nhật Huy - 20520541
  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.appName}>
        <Text style={[styles.appNameText, { fontSize: appNameFontSize, color: darkMode ? '#368EFE' : '#FA5701' }]}>
          Note App
        </Text>
      </View>

      <View style={styles.header}>
        <Text style={[styles.title, darkMode && styles.darkColor, { fontSize: titleFontSize }]}>All notes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddNote')}>
          <IonIcon name='add-circle' size={addNoteIconSize} color={darkMode ? '#368EFE' : '#FA5701'} />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.itemContainer, itemContainerStyle]}
            onPress={() => navigation.navigate('EditNote', { note: item })}
          >
            <View style={styles.item}>
              <Text style={[styles.itemTitleText, itemTextColor, { fontSize: itemFontSize }]}>{item.title}</Text>
              <Text style={[itemTextColor, { fontSize: itemFontSize }]}>{item.content}</Text>
            </View>
            <TouchableOpacity
              onPress={() => deleteNote(item.id)}
              style={styles.deleteButton}
            >
              <IonIcon name='trash-outline' size={itemFontSize} color={itemIconColor.color} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appName: {
    alignItems: 'center',
    marginVertical: 20,
  },
  appNameText: {
    color: '#FA5701',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'gray',
    fontWeight: 'bold',
    fontSize: 20,
  },
  darkContainer: {
    backgroundColor: 'black',
  },
  darkColor: {
    color: 'white',
    borderColor: 'white',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    borderRadius: 5,
    margin: 12,
  },
  item: {
    flex: 1,
  },
  itemTitleText: {
    fontWeight: 'bold',
  },
  deleteButton: {
    padding: 8,
  },
});

export default Note;

import React, { createContext, useState, useEffect  } from 'react';
import { db } from '../db/db';

const SettingsContext = createContext();
// Ngô Nhật Huy - 20520541
const SettingsProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const updateDarkMode = (newDarkModeValue) => {
    setDarkMode (newDarkModeValue);

    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM settings',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              tx.executeSql(
                'UPDATE settings SET theme = ? WHERE id = 1',
                [newDarkModeValue ? 1 : 0],
                () => {
                  console.log('Dark mode updated in the database');
                },
                (tx, error) => {
                  console.log('Error updating dark mode in the database:', error);
                }
              );
            } else {
              tx.executeSql(
                'INSERT INTO settings (theme) VALUES (?)',
                [newDarkModeValue? 1: 0],
                () => {
                  console.log('Dark mode inserted into the database');
                },
                (tx, error) => {
                  console.log('Error inserting dark mode into the database:', error);
                }
              );
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateFontSize = (newFontSizeValue) => {
    setFontSize(newFontSizeValue);

    try {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM settings',
          [],
          (tx, results) => {
            if (results.rows.length > 0) {
              tx.executeSql(
                'UPDATE settings SET fontsize = ? WHERE id = 1',
                [newFontSizeValue],
                () => {
                  console.log('Font size updated in the database');
                },
                (tx, error) => {
                  console.log('Error updating font size in the database:', error);
                }
              );
            } else {
              tx.executeSql(
                'INSERT INTO settings (fontsize) VALUES (?)',
                [newFontSizeValue],
                () => {
                  console.log('Font size inserted into the database');
                },
                (tx, error) => {
                  console.log('Error inserting font size into the database:', error);
                }
              );
            }
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
// Ngô Nhật Huy - 20520541
  useEffect(() => {
    const fetchDataFromDatabase = () => {
      try {
        db.transaction(tx => {
          tx.executeSql('SELECT FROM settings', [], (tx, results) => {
            if (results.rows.length > 0) {
              const {theme, fontsize} = results.rows.item(0);
              setDarkMode(theme === 1);
              setFontSize(fontsize);
              return;
            }
            else {
              setDarkMode(false);
              setFontSize(16);
              return;
            }
          });
      });
    } catch (error) {
      console.log(error);
    }
    };

    fetchDataFromDatabase();
    console.log('SettingsContext fetched!');
  }, [darkMode, fontSize]);

  return (
    <SettingsContext.Provider value={{ darkMode, updateDarkMode, fontSize, updateFontSize }}>
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsContext, SettingsProvider };
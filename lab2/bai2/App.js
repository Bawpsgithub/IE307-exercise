import React, {useState} from 'react';
import { View,  StyleSheet,  Alert } from 'react-native';
import Logo from './components/Logo'
import SwitchButton from './components/SwitchButton'
import Feedback from './components/Feedback'
import FAQs from './components/FAQs'
// 20520541 - Ngô Nhật Huy
export default function App() {
  const [darkMode, setdarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [feedback, setFeedback] = useState('');
  const [faqs, setFAQs] = useState([]);

  const handleOnDarkModeChange = () => {
    setdarkMode(!darkMode);
  };

  const handleOnNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handleSendFeedbackClick = () => {
    if (feedback.trim() === '') {
      return;
    }

    if (notifications) {
      Alert.alert("Thank you for your feedback!");
    }

    const newFAQs = [feedback, ...faqs];
    setFAQs(newFAQs);
    setFeedback('');
  };

  return (
    <View style = { [styles.container, darkMode && styles.darkContainer] }>
      <Logo darkMode={darkMode && styles.darkColor} />
      
      <SwitchButton
        text={"Dark Mode"}
        value={darkMode}
        onValueChange={handleOnDarkModeChange}
        darkMode={darkMode && styles.darkColor} 
      />
      <SwitchButton
        text={"Notifications"}
        value={notifications}
        onValueChange={handleOnNotificationsChange}
        darkMode={darkMode && styles.darkColor} 
      />
      
      <Feedback
        feedback={feedback}
        onChangeFb={(text) => setFeedback(text)}
        handleSendFeedbackClick={handleSendFeedbackClick}
        darkMode={darkMode && styles.darkColor}
      />

      <FAQs
        faqs={faqs}
        darkMode={darkMode && styles.darkColor}
      />
    </View>
  );
}
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,

  },

  darkContainer: {
    backgroundColor: 'black',
  },
  darkColor: {
    color: 'white',
    borderColor: 'white',
  },
});

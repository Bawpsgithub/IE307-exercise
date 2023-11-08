import React, {useState} from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
// 20520541 - Ngô Nhật Huy
const FAQs = ({ faqs, darkMode }) => {

  return (
  <View>
    <Text style={[styles.title, darkMode]}>Frequently Asked Questions</Text>
    <ScrollView>
      {faqs.map((faq, index) => (
        <Text style={darkMode} key={index}>
          Q: {faq}
        </Text>
      ))}
    </ScrollView>
  </View>
  );
}

export default FAQs;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
  },
});
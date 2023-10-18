import React, { useState } from "react";
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View, ImageBackground, SectionList } from "react-native";
import { workouts, fruits_vegetables } from "./data.js";


export default function App() {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const renderItem = ({ item }) => {
    const handleSelect = (type) => {
      if (selectedTypes.includes(type)) {
        setSelectedTypes(
          selectedTypes.filter((selectedType) => selectedType !== type)
        );
      } else {
        setSelectedTypes([...selectedTypes, type]);
      }
    };
    return (
      <View style={styles.itemsContainer}>
        <Text style={styles.items}>{item.type}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleSelect(item.type)}>
            <Text style={styles.buttonContent}>
              {selectedTypes.includes(item.type) ? "Deselect" : "Select"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderFruits = ({ item }) => {
    const handleSelect = (type) => {
      if (selectedTypes.includes(type)) {
        setSelectedTypes(
          selectedTypes.filter((selectedType) => selectedType !== type)
        );
      } else {
        setSelectedTypes([...selectedTypes, type]);
      }
    };
    return (
      <View style={styles.itemsContainer}>
        <Text style={styles.items}>{item}</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => handleSelect(item)}>
            <Text style={styles.buttonContent}>
              {selectedTypes.includes(item) ? "Deselect" : "Select"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList - Workouts</Text>
      <View style={styles.workoutsContainer}>
        {/*workouts*/}
        <ImageBackground
          source={require("./assets/workouts.jpg")}
          style={styles.imageBackground}
        >
          <FlatList
            data={workouts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            style={styles.flatListContentContainer}

          />
        </ImageBackground>
      </View>
      <Text style={styles.title}>SectionList - Fruits & Vegetables</Text>
      <View style={styles.fruitsContainer}>
        <ImageBackground
          source={require("./assets/fruits-vegetables.jpg")}
          style={styles.imageBackground}
        >
          <SectionList
            sections={fruits_vegetables}
            keyExtractor={(item, index) => item + index}
            renderItem={renderFruits}
            style={styles.flatListContentContainer}
            renderSectionHeader={({ section }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{section.title}</Text>
              </View>
            )}
          />
        </ImageBackground>
      </View>
      <View style={styles.selectedTypesContainer}>


        <Text style={styles.selectedTypesTitle}>SELECTED EXERCISES:</Text>
        <Text>{selectedTypes.join(", ")}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({


  imageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 24,
    paddingTop: 50,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTypesContainer: {
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedTypesTitle: {
    fontWeight: "bold",
    color: "red",
  },
  workoutsContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  fruitsContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  items: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#3e69fa",
    padding: 5,
    marginLeft: 140,
    width: 80,
  },
  buttonContent: {
    color: "white",
     alignItems: "center",
  },
  itemsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    marginBottom: 13,
    borderRadius: 10,
  },
  flatListContentContainer: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 60,
    paddingVertical: 10,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
    color: "white",
  },
});

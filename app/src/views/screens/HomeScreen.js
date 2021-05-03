import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers";
import { Card, TextInput, Button } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const numColumns = 2
const WIDTH = Dimensions.get('window').width

const HomeScreen = ({navigation}) => {
  const [text, setText] = useState("");
  const [people, setPeople] = useState([
    {
      key: 1,
      title: "Atraction & Activities",
      country: "Barcelona",
      image: require("../../assests/steven-lasry-UinkNpnCoJ8-unsplash.jpg"),
    },
    {
      key: 2,
      title: "Atraction & Activities",
      country: "Australia",
      image: require("../../assests/benjamin-punzalan-uMez7bFB2JQ-unsplash.jpg"),
    },
    {
      key: 3,
      title: "Atraction & Activities",
      country: "Dubai",
      image: require("../../assests/jeshoots-com-qVEa8R0lIWk-unsplash.jpg"),
    },
    {
      key: 4,
      title: "Atraction & Activities",
      country: "India",
      image: require("../../assests/atharva-tulsi-zTdh_ft2oRM-unsplash.jpg"),
    },
  ]);

  const [iconList, setIconList] = useState([
    {
      key: 1,
      icon: 'calendar-month',
      title: 'Hotel',
      screen: 'Hotel'
    },
    {
      key: 2,
      icon: 'map-marker',
      title: 'Tour',
      screen: 'Tour'
    },
    {
      key: 3,
      icon: 'car',
      title: 'Car',
      screen: 'Car'
    },
    {
      key: 4,
      icon: 'airplane',
      title: 'Flight',
      screen: 'Flight'
    },
    {
      key: 5,
      icon: 'ferry',
      title: 'Cruise',
      screen: 'Cruise'
    },
    {
      key: 6,
      icon: 'bus',
      title: 'Bus',
      screen: 'Bus'
    },
    {
      key: 7,
      icon: 'star',
      title: 'Event',
      screen: 'Event'
    },
    {
      key: 8,
      icon: 'dots-horizontal',
      title: 'More'
    },
  ])

  return (
    <ScrollView>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <TextInput
            label="What are you looking for?"
            value={text}
            onChangeText={(text) => setText(text)}
            mode="flat"
          />
         
        </Card.Content>
        <FlatList
            data={iconList}
            contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.vB}>
                <Icon name={item.icon} color='tomato' size={20} />
              <Text style={{alignSelf: 'center'}}>
                {item.title}
              </Text>
              </TouchableOpacity>
            )}
            numColumns={4}
          />
      </Card>
      <View style={styles.textHeading}>
        <Text style={{ fontSize: 20 }}>Promos Today</Text>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Card style={styles.cards}>
            <Card.Cover
              source={item.image}
              style={styles.img}
              resizeMode="cover"
              title={item.title}
            />
            <View style={styles.vCard}>
              <Card.Title
                title={item.title}
                subtitle={item.country}
                subtitleStyle={styles.subtitleStyle}
                titleStyle={styles.titleStyle}
              />
              <Card.Actions>
                <Button mode="contained" color="red">
                  Book Now
                </Button>
              </Card.Actions>
            </View>
          </Card>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.textHeading}>
        <Text style={{ fontSize: 20 }}>Tours</Text>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <Card style={styles.cards}>
            <Card.Cover
              source={item.image}
              style={styles.img}
              resizeMode="cover"
              title={item.title}
            />
            <View style={styles.vCard}>
              <Card.Title
                title={item.title}
                subtitle={item.country}
                subtitleStyle={styles.subtitleStyle}
                titleStyle={styles.titleStyle}
              />
              <Card.Actions>
                <Button mode="contained" color="red">
                  Book Now
                </Button>
              </Card.Actions>
            </View>
          </Card>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
  cardStyle: {
    width: "90%",
    alignSelf: "center",
    height: 220,
    borderRadius: 15,
    elevation: 10,
    marginTop: 50,
  },
  cards: {
    width: 230,
    height: 300,
    elevation: 10,
    borderRadius: 10,
    margin: 10,
  },
  vB: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 10
  },
  img: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  textHeading: {
    height: 40,
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
  },
  titleStyle: {
    fontSize: 18,
    color: "white",
  },
  subtitleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  vCard: {
    position: "absolute",
    width: "100%",
    marginTop: "78%",
  },
});

export default HomeScreen;

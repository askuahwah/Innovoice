import React, { useContext } from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import { RoomContext } from '../Redux/reduxContext.js';
import style from './home_style.js'; // Your styles here

export default function Home({ navigation }) {
  const { rooms } = useContext(RoomContext);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={style.text_tob}>
        <Text style={style.text}>Rooms</Text>
      </View>
      <ScrollView style={style.room_cards}>
        {rooms.map((room) => (
          <View key={room.id} style={style.card}>
            <Image source={{ uri: room.imageUrl }} style={style.cardImage} />
            <View style={style.cardContent}>
              <Text style={style.cardTitle}>{room.name}</Text>
              <Text style={style.cardDescription}>{room.description}</Text>
              <Text>Temperature: {room.temp}</Text>
              <Text>Fan Speed: {room.fan_speed}</Text>
              <Text>Light Time: {room.light_time}</Text>
              <View style={style.room_button}>
              <Button
                title="Change"
                onPress={() => navigation.navigate('Card', { roomId: room.id })}
              />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

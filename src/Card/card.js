import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, Image, Button } from 'react-native';
import { RoomContext } from '../Redux/reduxContext.js';
import Slider from '@react-native-community/slider';
import styles from './card_style'; 
import Ac from '../assets/ac.jpg';
import Bulb from '../assets/bulb.jpg';
import Fan from '../assets/fan.jpeg';

export default function Card({ route }) {
  const { roomId } = route.params;
  const { rooms, updateRoom } = useContext(RoomContext);
  const room = rooms.find((r) => r.id === roomId) || {};

  const [acTemperature, setAcTemperature] = useState(room.temp || '24°C');
  const [fanSpeed, setFanSpeed] = useState(room.fan_speed || '0');
  const [bulbBrightness, setBulbBrightness] = useState(room.light_time || '0%');

  const handleTemperatureChange = (newTemp) => {
    setAcTemperature(newTemp);
    updateRoom(roomId, { temp: `${newTemp}°C` });
  };

  const handleFanSpeedChange = (newSpeed) => {
    setFanSpeed(newSpeed);
    updateRoom(roomId, { fan_speed: `${newSpeed}%` });

    const sliderValue = (newSpeed * 30) + 105;
    sendSliderValue(sliderValue);
  };

  const handleBulbBrightnessChange = (newBrightness) => {
    setBulbBrightness(newBrightness);
    updateRoom(roomId, { light_time: `${newBrightness}%` });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        <View style={styles.controlBlock}>
          <Image source={Ac} style={styles.icon} />
          <Slider
            style={styles.slider}
            value={parseInt(acTemperature)}
            onValueChange={handleTemperatureChange}
            minimumValue={16}
            maximumValue={30}
            step={1}
          />
          <Text>AC Temperature: {acTemperature}</Text>
        </View>

        <View style={styles.controlBlock}>
          <Image source={Fan} style={styles.icon} />
          <Slider
            style={styles.slider}
            value={parseInt(fanSpeed)}
            onValueChange={handleFanSpeedChange}
            minimumValue={0}
            maximumValue={5}
            step={1}

          />
          <Text>Fan Speed: {fanSpeed}</Text>
        </View>

        <View style={styles.controlBlock}>
          <Image source={Bulb} style={styles.icon} />
          <Slider
            style={styles.slider}
            value={parseInt(bulbBrightness)}
            onValueChange={handleBulbBrightnessChange}
            minimumValue={0}
            maximumValue={100}
            step={1}
          />
          <Text>Bulb Brightness: {bulbBrightness}</Text>
        </View>
        <Button title='Voice Control'/>
      </View>
    </SafeAreaView>
  );

  function sendSliderValue(value) {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", "http://192.168.43.119/slider?value=" + value, true);
      xhr.send();
  }

}

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import * as Location from 'expo-location';
import { Icon, Button, Image } from 'react-native-elements'

const shops = [
  {
    coordinate: {
      latitude: 55.6855,
      longitude: 12.5971,
    },
    icon: <View style={{ backgroundColor: 'white', width: 50, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 25 }}>
      <Image
        source={require('./assets/meat.png')}
        style={{
          height: 40,
          width: 40,
        }}
      />
    </View>
  },
  {
    coordinate: {
      latitude: 55.6800,
      longitude: 12.5800,
    },
    icon: <Image
      source={require('./assets/veggie.png')}
      style={{
        height: 50,
        width: 50,
      }}
    />
  },
  {
    coordinate: {
      latitude: 55.6896,
      longitude: 12.5912,
    },
    icon: <Icon
      raised
      name='birthday-cake'
      type='font-awesome'
      color='blue'
    />
  },
  {
    coordinate: {
      latitude: 55.6441,
      longitude: 12.5330,
    },
    icon: <Icon
      raised
      name='meetup'
      type='font-awesome'
      color='blue'
    />
  }
]

export const Map = () => {
  const { navigate } = useNavigation()

  const [location, setLocation] = useState({
    latitude: 55.6841,
    longitude: 12.5930,
  });

  const mapRef = useRef(null)
  const [mapIsReady, setMapIsReady] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          return
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        setLocation(currentLocation.coords);

        if (mapRef && mapIsReady) {
          mapRef.current?.animateToRegion({ ...location, latitudeDelta: 0.1, longitudeDelta: 0.1 })
        }
      } catch (err) {
        console.log(err)
      }
    })();
    // Obtain location only once for simplicity
  }, []);

  const position = {
    ...location,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  }

  return (
    <View style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height }}>
      <MapView
        onLayout={() => setMapIsReady(true)}
        ref={mapRef}
        initialRegion={position}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      >
        {
          shops.map(({ icon, coordinate }, idx) => {
            return <Marker coordinate={coordinate} key={`marker-${idx}`}>
              {icon}
            </Marker>
          })
        }
        <Marker coordinate={location}>
          <Icon
            raised
            name='user'
            type='font-awesome'
            color='#f50'
          />
        </Marker>
      </MapView>
      <Button
        style={{ position: 'absolute', bottom: 130, alignSelf: 'center' }}
        title={'Support all in the area'}
        onPress={() => {
          navigate('UserSignIn')
        }}
      />
    </View>
  );
}

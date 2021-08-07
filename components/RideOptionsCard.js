import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

const data = [
  {
    id: 'Uber-X-123',
    title: 'UberX',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: 'Uber-XL-423',
    title: 'Uber XL',
    multiplier: 1.75,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: 'Uber-LUX-403',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  },
];
const SURGE_CHARGE_RATE = 1.5;
const RideOptionsCard = () => {
  const [selected, setSelected] = useState(null);
  const traverTimeInformation = useSelector(selectTravelTimeInformation);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow p-1`}>
      <View>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride- {traverTimeInformation?.distance?.text}{' '}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${
              id === selected?.id && 'bg-gray-200'
            }   `}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: 'contain' }}
              source={{ uri: image }}
            />
            <View>
              <Text style={tw`text-xl font-semibold`}> {title} </Text>
              <Text> {traverTimeInformation.duration?.text} Travel Time </Text>
              <Text style={tw`text-xl`}>
                {(
                  (traverTimeInformation?.duration.value *
                    SURGE_CHARGE_RATE *
                    multiplier) /
                  5
                ).toFixed()}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black ${!selected && 'bg-gray-300'} p-2 ml-4 mr-3`}
        >
          <Text style={tw`text-center text-white`}>
            {' '}
            Choose {selected?.title}{' '}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});

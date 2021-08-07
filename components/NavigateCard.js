import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import NavFavourites from './NavFavourites';
import { Icon } from 'react-native-elements';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Mike</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'en',
              components: 'country:ke',
            }}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate('RideOptionsCard');
            }}
            placeholder='Where to?'
            debounce={400}
            nearbyPlacesAPI='GooglePlacesSearch'
          />
        </View>
        <NavFavourites />
        <View
          style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
        >
          <TouchableOpacity onPress={()=> navigation.navigate("RideOptionsCard")}
            style={tw` flex flex-row bg-black justify-between w-24 px-4 py-3 rounded-full`}
          >
            <Icon name='car' type='font-awesome' color='white' size={16} />
            <Text style={tw`text-white text-center`}> Rides </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row justify-between  w-24 px-4 py-3 rounded-full`}
          >
            <Icon name='car' type='font-awesome' color='black' size={16} />
            <Text style={tw`text-black text-center`}> Rides </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});

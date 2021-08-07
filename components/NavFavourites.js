import { name } from 'ci-info';
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Juja, Kenya',
  },
  {
    id: '124',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Thika, Kenya',
  },
];
const NavFavourites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color='white'
            size={18}
            type='ionicon'
          />
          <View>
            <Text style={tw`font-semibold text-lg`}> {location} </Text>
            <Text style={tw`text-gray-500`}> {destination} </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});

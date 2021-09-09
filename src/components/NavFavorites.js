import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: '123',
    icon: 'home',
    location: 'Home',
    destination: 'Rua Trajano Filgueira n° 1, Mossoró, Rio Grande do Norte'
  },
  {
    id: '456',
    icon: 'briefcase',
    location: 'Work',
    destination: 'Centro, Mossoró, Rio Grande do Norte'
  }
]

export const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      ItemSeparator={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={(({ item: { location, destination, icon } }) =>
        <TouchableOpacity
          style={tw`flex-row items-center p-3`}
        >
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

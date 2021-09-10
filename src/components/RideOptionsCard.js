import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import { Icon, } from 'react-native-elements'
import { useSelector } from 'react-redux'
import tw from 'tailwind-react-native-classnames'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data = [
  {
    id: 'Uber-X-123',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberX.png',
  },
  {
    id: 'Uber-XL-456',
    title: 'Uber XL',
    multiplier: 1.2,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/UberXL.png',
  },
  {
    id: 'Uber-LUX-789',
    title: 'Uber LUX',
    multiplier: 1.75,
    image: 'https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_485,h_385/f_auto,q_auto/products/carousel/Lux.png',
  },
]

const SURGE_CHARGE_RATE = 4.21;

export const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null)
  const travelTimeInformation = useSelector(selectTravelTimeInformation)

  return (
    <View style={tw`bg-white flex-grow flex-1`}>
      <View>
        <TouchableOpacity
          style={tw`absolute left-5 z-50 top-4 p-3 rounded-full`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="font-awesome" size={16} />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Selecione a corrida - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item: { image, title, id, multiplier }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 
            ${id === selected?.id && 'bg-gray-200'}`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain"
              }}
              source={{ uri: image }}
            />

            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`} >{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>

            <Text style={tw`text-lg`}>

              {new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                100
              )}

            </Text>

          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}
        >
          <Text style={tw`text-center text-white text-xl`}>Chamar {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


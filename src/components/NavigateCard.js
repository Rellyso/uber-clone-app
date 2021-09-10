import React from 'react'
import { Text, SafeAreaView, View, StyleSheet, TouchableOpacity } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../slices/navSlice'
import { NavFavorites } from './NavFavorites'
import { Icon } from 'react-native-elements'

export const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={tw`bg-white flex-1`}
    >
      <Text
        style={tw`text-center py-5 text-xl`}
      >
        Bom dia, Rellyson
      </Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw`px-5`}>
          <GooglePlacesAutocomplete
            placeholder="para onde?"
            styles={toInputBoxStyles}

            returnKeyType={"search"}
            minLength={2}

            fetchDetails={true}
            enablePoweredByContainer={false}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}

            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                }));

              navigation.navigate('RideOptionsCard')
            }}

            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'pt-BR'
            }}
          />
        </View>

        <NavFavorites />
      </View>
      <View
        style={tw`
          flex-row
          bg-white
          justify-evenly
          py-2
          mt-auto
          border-gray-100
          border-t`
        }
      >
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row bg-black w-28 px-4 py-3 rounded-full justify-between`}
        >
          <Icon size={16} name="car" type="font-awesome" color="white" />
          <Text style={tw`text-white text-center`}>Corrida</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={tw`flex flex-row bg-white w-24 px-4 py-3 rounded-full justify-between`}
        >
          <Icon size={16} name="fast-food-outline" type="ionicon" color="black" />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#f2f2f2'
  }
})
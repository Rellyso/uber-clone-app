import React from 'react'
import { Text, SafeAreaView, View, StyleSheet } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import tw from 'tailwind-react-native-classnames'
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { setDestination } from '../slices/navSlice'
import { NavFavorites } from './NavFavorites'

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
        Good morning, Someone
      </Text>

      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw`px-5`}>
          <GooglePlacesAutocomplete
            placeholder="Where to?"
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

              navigation.navigate('RideOptions')
            }}

            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'pt-BR'
            }}
          />
        </View>
      </View>

      <NavFavorites />
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
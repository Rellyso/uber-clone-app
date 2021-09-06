import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { NavOptions } from '../components/NavOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env'
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice'

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100, height: 100, resizeMode: "contain"
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />


        <View>
          <GooglePlacesAutocomplete
            placeholder="Where from?"

            styles={{
              container: {
                flex: 0,
              },
              textInput: {
                fontSize: 18
              }
            }}

            enablePoweredByContainer={false}
            // keyExtractor="search"
            onPress={(data, details = null) => {
              dispatch(setOrigin({
                location: details.geometry.location,
                description: data.description,
              }))

              dispatch(setDestination(null))
            }}
            fetchDetails

            minLength={2}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'pt-BR'
            }}

            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'

export const RideOptionsCard = () => {
  return (
    <View style={tw`bg-white flex-grow`}>
      <Text style={tw`text-center py-5 text-xl`}>Select a Ride</Text>
    </View>
  )
}


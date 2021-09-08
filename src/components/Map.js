import React, { useRef, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'
import { selectDestination, selectOrigin } from '../slices/navSlice'
import { useSelector } from 'react-redux'
import MapViewDirections from 'react-native-maps-directions'
import { GOOGLE_MAPS_API_KEY } from '@env'

const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(selectDestination)
  const mapRef = useRef(null)

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 50,
        left: 50,
        bottom: 50,
        right: 50
      }
    })
  }, [origin, destination])

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location.lat,
        longitude: origin?.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}

          strokeWidth={3}
          lineDashPattern={[100000, 0]}
          lineCap={"round"}
          lineJoin={10}
          style={{

          }}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,

          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,

          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  )
}

export default Map
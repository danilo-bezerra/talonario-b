import React, { useState, useEffect } from "react";
import {} from "react-native";
import * as Location from "expo-location";

export default function useLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [data, setData] = useState(null);

  async function getLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);

    const address = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setData({
      latitude: Number(location?.coords?.latitude),
      longitude: Number(location?.coords?.longitude),
      address: address[0],
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return data || { latitude: null, longitude: null, address: null };
}

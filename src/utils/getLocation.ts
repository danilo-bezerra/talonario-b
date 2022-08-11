import React, { useState, useEffect } from "react";
import {} from "react-native";
import * as Location from "expo-location";

type Location = {
    latitude: number,
    longitude: number,
    address: string
}

export function getLocation() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [data, setData] = useState<Location | null>(null);

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
      address: `${address[0]?.street}, ${address[0].district}, ${address[0]?.subregion} - ${address[0].region}, ${address[0]?.country}`,
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return data || { latitude: null, longitude: null, address: null };
}
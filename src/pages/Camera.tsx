import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import { Heading, HStack, VStack } from "native-base";
import { Button } from "../components/Button";
let camera;
export default function AppCamera({ route, navigation }) {
  const [startCamera, setStartCamera] = React.useState(false);
  const [previewVisible, setPreviewVisible] = React.useState(false);
  const [capturedImage, setCapturedImage] = React.useState(null);

  const { handleCarImages, id } = route.params;

  const __startCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    console.log(status);
    if (status === "granted") {
      setStartCamera(true);
    } else {
      Alert.alert("Acesso a camera negado");
    }
  };

  console.log(capturedImage);

  const __takePicture = async () => {
    const photo = await camera.takePictureAsync();
    console.log({ photo });
    console.log(Object.keys(photo));
    setPreviewVisible(true);
    //setStartCamera(false)
    setCapturedImage(photo);
  };
  const __savePhoto = () => {
    console.log(capturedImage.uri);
    console.log(id);
    handleCarImages(capturedImage.uri, id);
    navigation.goBack();
  };
  const __retakePicture = () => {
    setCapturedImage(null);
    setPreviewVisible(false);
    __startCamera();
  };

  useEffect(() => {
    __startCamera();
  }, []);

  return (
    <VStack flex={1} bg="gray.100" alignItems="center" justifyContent="center">
      <VStack flex={1} w="full">
        {previewVisible && capturedImage ? (
          <CameraPreview
            photo={capturedImage}
            savePhoto={__savePhoto}
            retakePicture={__retakePicture}
          />
        ) : (
          <Camera
            type={Camera.Constants.Type.back}
            style={{ flex: 1 }}
            ref={(r) => {
              camera = r;
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "transparent",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  flexDirection: "row",
                  flex: 1,
                  width: "100%",
                  padding: 20,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    flex: 1,
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={__takePicture}
                    style={{
                      width: 70,
                      height: 70,
                      bottom: 0,
                      borderRadius: 50,
                      backgroundColor: "#fff",
                    }}
                  />
                </View>
              </View>
            </View>
          </Camera>
        )}
      </VStack>
    </VStack>
  );
}

const CameraPreview = ({ photo, retakePicture, savePhoto }) => {
  //   console.log("sdsfds", photo);
  return (
    <VStack bg="transparent" flex={1} w="full" h="full">
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={{
          flex: 1,
        }}
      >
        <VStack flex={1} p={15} justifyContent="flex-end">
          <HStack justifyContent="space-between">
            <Button title="Nova Foto" onPress={retakePicture} flex={0.48} />
            <Button title="Salvar Foto" onPress={savePhoto} flex={0.48} />
          </HStack>
        </VStack>
      </ImageBackground>
    </VStack>
  );
};

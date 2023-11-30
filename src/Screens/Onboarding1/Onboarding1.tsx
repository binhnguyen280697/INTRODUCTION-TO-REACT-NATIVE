import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Padding, Border, Color } from "../GlobalStyles";
import { useFonts } from 'expo-font';

export const Onboarding1 = () => {
  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('@/Assets/font/poppins/Poppins-Bold.ttf'),
    'PoppinsThin': require('@/Assets/font/poppins/Poppins-Light.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
    <View style={[styles.onboarding1, styles.button1ShadowBox]}>
      
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("@/Assets/img/wellcome.png")}
      />
      <View style={styles.textBlock}>
        <Text style={styles.welcomeToQreveal}>Welcome to QReveal</Text>
        <Text style={styles.simplifyScanDiscover}>
          Simplify, Scan, Discover: Navigate the World with QR Ease!
        </Text>
      </View>
      <View style={styles.actions}>
        <Pressable style={styles.buttonLayout} onPress={() => {}}>
          <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
        </Pressable>
        <Pressable
          style={[styles.button1, styles.buttonLayout]}
          onPress={() => {}}
        >
          <Text style={[styles.next, styles.skipTypo]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button1ShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  skipTypo: {
    fontFamily: 'PoppinsBold',
    fontWeight: "700",
    letterSpacing: 0,
    textAlign: "center",
  },
  buttonLayout: {
    padding: Padding.p_3xs,
    width: 149,
    borderRadius: Border.br_3xs,
    flexDirection: "row",
    height: 54,
    justifyContent: "center",
    alignItems: "center",
  },
  onboarding1Child: {
    top: 1,
    left: 537,
    width: 414,
    height: 895,
    position: "absolute",
  },
  image2Icon: {
    marginLeft: -178,
    top: 110,
    width: 355,
    height: 319,
    left: "50%",
    position: "absolute",
  },
  welcomeToQreveal: {
    fontSize: 28,
    letterSpacing: -0.3,
    lineHeight: 42,
    fontWeight: "600",
    fontFamily: 'PoppinsBold',
    color: "#1a1a1a",
    textAlign: "center",
  },
  simplifyScanDiscover: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: 'PoppinsThin',
    color: "#808080",
    width: 287,
    marginTop: 8,
    textAlign: "center",
  },
  textBlock: {
    marginLeft: -145,
    top: 445,
    width: 290,
    justifyContent: "center",
    alignItems: "center",
    left: "50%",
    position: "absolute",
  },
  statusBarLight: {
    top: 10,
    right: -21,
    left: 13,
    maxWidth: "100%",
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  skip: {
    fontSize: 15,
    color: Color.blue,
  },
  next: {
    fontSize: 16,
    color: Color.white,
  },
  button1: {
    backgroundColor: Color.blue,
    shadowColor: "rgba(0, 48, 120, 0.1)",
    shadowRadius: 30,
    elevation: 30,
    marginLeft: 29,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  actions: {
    marginLeft: -164,
    top: 676,
    width: 327,
    flexDirection: "row",
    height: 54,
    left: "50%",
    position: "absolute",
  },
  onboarding1: {
    borderRadius: 40,
    backgroundColor: Color.white,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 23,
    elevation: 23,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Onboarding1;

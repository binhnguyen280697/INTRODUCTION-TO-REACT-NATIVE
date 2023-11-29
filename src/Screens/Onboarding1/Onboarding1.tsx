import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Padding, Border, Color } from "../GlobalStyles";

export const Onboarding1 = () => {
  return (
    <View style={[styles.onboarding1, styles.button1ShadowBox]}>
      <Image
        style={styles.onboarding1Child}
        resizeMode="cover"
        source={require("../assets/Welcome.png")}
      />
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={styles.textBlock}>
        <Text style={styles.welcomeToQreveal}>Welcome to QReveal</Text>
        <Text style={styles.simplifyScanDiscover}>
          Simplify, Scan, Discover: Navigate the World with QR Ease!
        </Text>
      </View>
      <Image
        style={styles.statusBarLight}
        resizeMode="cover"
        source={require("../assets/status-bar--light.png")}
      />
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
    fontFamily: FontFamily.poppinsBold,
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
    top: 130,
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
    fontFamily: FontFamily.poppinsSemiBold,
    color: "#1a1a1a",
    textAlign: "center",
  },
  simplifyScanDiscover: {
    fontSize: 17,
    lineHeight: 25,
    fontFamily: FontFamily.poppinsRegular,
    color: "#808080",
    width: 287,
    marginTop: 8,
    textAlign: "center",
  },
  textBlock: {
    marginLeft: -145,
    top: 485,
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

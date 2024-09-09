import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function app() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-blue-800 text-2xl font-pblack">
        Amardeep Ranjan! 🎉
      </Text>
      <Link href="/home">Go to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({});

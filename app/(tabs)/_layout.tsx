import React from "react";
import { Tabs } from "expo-router";
import { Icons } from "@/src/ui/common/Icons";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          ...(Platform.OS === "web" && {
            alignSelf: "center",
            maxWidth: 600,
            width: "100%",
          }),
        },
        tabBarIconStyle: {
          marginTop: 3,
        },
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "홈",
          tabBarIcon: ({ focused }) => (
            <Icons.Home color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "상품",
          tabBarIcon: ({ focused }) => (
            <Icons.Document color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "검색",
          tabBarIcon: ({ focused }) => (
            <Icons.Search color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "마이",
          tabBarIcon: ({ focused }) => (
            <Icons.Profile color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
    </Tabs>
  );
}

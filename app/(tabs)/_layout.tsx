import React from "react";
import { Tabs } from "expo-router";
import { Icons } from "@/src/ui/common/Icons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
        },
        tabBarIconStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.Home color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.Document color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.Search color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.Profile color={focused ? "#007AFF" : "#8E8E93"} />
          ),
        }}
      />
    </Tabs>
  );
}

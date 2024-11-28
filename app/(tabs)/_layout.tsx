import React from 'react';
import { Tabs } from 'expo-router';
import { Icons } from '@/src/ui/common/Icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90
        },
        tabBarIconStyle: {
          alignItems: 'center',
          justifyContent: 'center'
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icons.Home
            color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Icons.Document 
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Explore',
          tabBarIcon: ({ focused }) => (
            <Icons.Search 
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: 'user',
          tabBarIcon: ({ focused }) => (
            <Icons.Profile
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
    </Tabs>
  );
}

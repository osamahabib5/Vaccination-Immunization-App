import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

// x

export default function Details({navigation, route}) {
  return (
    <Text>This is {route.params.name}'s profile</Text>
  )
}


import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {globalStyles} from '../styles/globalStyles';

const HomeScreen = ({navigation}: any) => {
  return (
    <View style={[globalStyles.container]}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('NotificationTab', {
            screen: 'NotificationScreen',
            params: {
              title: 'Hi',
            },
          })
        }>
        <Text
          style={{
            color: 'blue',
          }}>
          Go to Notification
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

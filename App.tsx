import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Home, InfoCircle, SearchNormal1, User} from 'iconsax-react-native';
import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: 'white',
          },
        ]}>
        <NavigationContainer>
          <Tabs.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarActiveTintColor: 'coral',
              tabBarInactiveTintColor: '#676767',

              tabBarLabelStyle: {
                fontSize: 14,
                marginTop: 4,
              },
              tabBarStyle: {
                paddingVertical: 12,
                height: 60,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              tabBarIcon: ({focused, size, color}) => {
                size = 28;
                color = focused ? 'coral' : '#676767';

                let icon: ReactNode = <></>;

                if (route.name === 'Home') {
                  icon = <Home size={size} color={color} />;
                } else if (route.name === 'Search') {
                  icon = <SearchNormal1 size={size} color={color} />;
                } else if (route.name === 'Profile') {
                  icon = <User size={size} color={color} />;
                } else {
                  icon = <InfoCircle size={size} color={color} />;
                }

                return icon;
              },
            })}>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="About" component={AboutScreen} />
            <Tabs.Screen name="Search" component={SearchScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
          </Tabs.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => (
  <View style={styles.container}>
    <Text>Home screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={styles.container}>
    <Text>About screen</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.container}>
    <Text>Search screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.container}>
    <Text>Profile screen</Text>
  </View>
);

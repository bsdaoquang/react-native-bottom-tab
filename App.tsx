import {View, Text, SafeAreaView} from 'react-native';
import React, {ReactNode} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './src/router/HomeNavigator';
import SearchNavigator from './src/router/SearchNavigator';
import NotificationNavigator from './src/router/NotificationNavigator';
import ProfileNavigator from './src/router/ProfileNavigator';
import {User, Home, Notification, SearchNormal1} from 'iconsax-react-native';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {
              elevation: 10,
              paddingVertical: 12,
              minHeight: 60,
            },
            tabBarIcon: ({focused, size, color}) => {
              let icon: ReactNode;
              size = 28;
              color = focused ? 'coral' : '#676767';

              switch (route.name) {
                case 'HomeaTab':
                  <Home size={size} color={color} />;
                  break;

                case 'SearchTab':
                  icon = <SearchNormal1 size={size} color={color} />;

                  break;

                case 'NotificationTab':
                  icon = <Notification size={size} color={color} />;
                  break;

                default:
                  icon = <User size={size} color={color} />;
                  break;
              }

              return icon;
            },
            tabBarActiveTintColor: 'coral',
            tabBarShowLabel: false,
            tabBarInactiveTintColor: '#676767',
            tabBarLabelStyle: {
              fontSize: 14,
              marginTop: 4,
            },
          })}>
          <Tab.Screen
            name="HomeTab"
            options={{
              title: 'Trang chủ',
            }}
            component={HomeNavigator}
          />
          <Tab.Screen
            name="SearchTab"
            options={{
              title: 'Tìm kiếm',
            }}
            component={SearchNavigator}
          />
          <Tab.Screen
            name="NotificationTab"
            options={{
              title: 'Thông báo',
              tabBarBadge: 5,
            }}
            component={NotificationNavigator}
          />
          <Tab.Screen
            name="ProfileTab"
            options={{
              title: 'Cá nhân',
            }}
            component={ProfileNavigator}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

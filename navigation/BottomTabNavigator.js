import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import CoinStack from '../stacks/CoinStack';
import LinksScreen from '../screens/LinksScreen';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Coins"
        component={CoinStack}
        options={{
          title: 'Coins',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="coins" />,
        }}
      />
      <BottomTab.Screen
        name="Holdings"
        component={LinksScreen}
        options={{
          title: 'Holdings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="wallet" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

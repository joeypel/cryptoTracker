import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import CoinScreen from '../screens/CoinsScreen';
import CoinDetailScreen from '../screens/CoinDetailScreen';

const Stack = createStackNavigator();


export default CoinStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Coins" component={CoinScreen} options={{ title: 'Cryptocurrency' }} />
            <Stack.Screen name="Details" component={CoinDetailScreen} options={{ title: 'Details', headerBackTitle: 'Back' }} />
        </Stack.Navigator>
    )
}

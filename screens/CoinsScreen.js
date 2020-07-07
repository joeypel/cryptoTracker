import React from 'react'
import { View, Text, FlatList } from 'react-native'

import CoinListItem from '../components/CoinListItem'


import testData from '../testData'

export default CoinsScreen = props => {

    return (<View style={{ flex: 1 }}>
        <FlatList
            data={testData}
            keyExtractor={(item) => item.id + ""}
            renderItem={({ item }) => {
                return (<CoinListItem
                    onSelect={() => { props.navigation.navigate('Details', item) }}
                    info={item}
                ></CoinListItem>)
            }}
        />


    </View>)
}
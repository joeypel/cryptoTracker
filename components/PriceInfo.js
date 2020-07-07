import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default PriceInfo = props => {

    return (
        <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: '#444', borderBottomWidth: StyleSheet.hairlineWidth, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Open</Text>
                    <Text>${props.open}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Close</Text>
                    <Text>$333</Text>
                </View>


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: '#444', borderBottomWidth: StyleSheet.hairlineWidth, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1 }}>
                    <Text>High</Text>
                    <Text>$222</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Low</Text>
                    <Text>$333</Text>
                </View>


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1 }}>
                    <Text>Average</Text>
                    <Text>$222</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Change</Text>
                    <Text>33.3%</Text>
                </View>


            </View>

        </View>)
}
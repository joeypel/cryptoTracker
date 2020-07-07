import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default MarketInfo = props => {

    return (
        <View style={{ width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: '#444', borderBottomWidth: StyleSheet.hairlineWidth, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Market Cap</Text>
                    <Text>${abbreviateNumber(props.marketCap)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Volume</Text>
                    <Text>${abbreviateNumber(props.volume)}</Text>
                </View>


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderBottomColor: '#444', borderBottomWidth: StyleSheet.hairlineWidth, }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1 }}>
                    <Text>Circulating</Text>
                    <Text>{props.circulating}</Text>

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Max Supply</Text>
                    <Text>{props.maxSupply}</Text>
                </View>


            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1 }}>
                    <Text>All Time High</Text>
                    <Text>${abbreviateNumber(props.ATH)}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 6, flex: 1, }}>
                    <Text>Rank</Text>
                    <Text>{props.rank}</Text>
                </View>


            </View>

        </View>)
}


function abbreviateNumber(value) {
    let newValue = value;
    const suffixes = ["", "K", "M", "B", "T"];
    let suffixNum = 0;
    while (newValue >= 1000) {
        newValue /= 1000;
        suffixNum++;
    }

    newValue = Number(newValue).toPrecision(4);

    newValue += suffixes[suffixNum];
    return newValue;
}
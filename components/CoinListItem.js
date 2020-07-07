import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import SmallChart from '../components/SmallChart'



import Colors from '../constants/Colors'
import { SvgUri } from 'react-native-svg'

export default CoinListItem = props => {

    const postive24h = props.info['1d'].price_change_pct > 0 ? true : false


    return (<TouchableOpacity onPress={props.onSelect}>
        <Card style={{ padding: 8 }}>
            <View style={{ flexDirection: 'row', padding: 5 }}>
                <SvgUri uri={props.info.logo_url} width={50} height={50} style={{ width: 50, height: 50 }} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 1, marginHorizontal: 5 }}>
                    <View style={{ justifyContent: 'space-between', alignItems: 'baseline', flex: 1 }}>
                        <Text style={styles.nameText} numberOfLines={1}>{props.info.name}</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text>{props.info.symbol}</Text>
                            {postive24h > 0 ?
                                <Text style={styles.percentTextUp}>▲{Number(props.info["1d"].price_change_pct * 100).toPrecision(4)}%</Text> :
                                <Text style={styles.percentTextDown}>▼{Number(props.info["1d"].price_change_pct * 100).toPrecision(4)}%</Text>}


                        </View>

                    </View>

                    <View style={{ flex: 1, }}>
                        <SmallChart dataX={props.info.timestamps} dataY={props.info.prices} postive24h={postive24h}></SmallChart>
                    </View>
                    <View style={{}}>
                        {props.info.price < 1.5 ? <Text style={styles.priceText}>${Number(props.info.price).toFixed(4)}</Text> : <Text style={styles.priceText}>${Number(props.info.price).toFixed(2)}</Text>}
                        <Text style={styles.mcapText}>MCap {abbreviateNumber(props.info.market_cap)}</Text>
                        {/* <Text style={styles.mcapText}>MCap {props.info.market_cap}</Text> */}

                    </View>
                </View>

            </View>
        </Card>
    </TouchableOpacity >)
}

function abbreviateNumber(value) {
    var suffixes = ["", "K", "M", "B", "T"];
    var suffixNum = Math.floor(("" + value).length / 3);
    var shortValue = parseFloat((suffixNum != 0 ? (value / Math.pow(1000, suffixNum)) : value).toPrecision(5));
    if (shortValue % 1 != 0) {
        shortValue = shortValue.toFixed(3);
    }
    return shortValue + suffixes[suffixNum];
}

const styles = StyleSheet.create({
    nameText: { fontSize: 16, fontWeight: 'bold' },
    priceText: { fontWeight: 'bold' },
    mcapText: { fontWeight: '300', color: 'gray' },
    percentTextUp: { color: Colors.postiveColor, fontWeight: 'bold', paddingLeft: 4 },
    percentTextDown: { color: Colors.negativeColor, fontWeight: 'bold', paddingLeft: 4 }
})
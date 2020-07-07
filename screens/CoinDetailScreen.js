import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SvgUri } from 'react-native-svg'

import DetailsListItem from '../components/DetailsListItem'
import PriceInfo from '../components/PriceInfo'
import MarketInfo from '../components/MarketInfo'

export default CoinDetailScreen = props => {

    props.navigation.setOptions({ title: props.route.params.name })
    return (<ScrollView style={{ flex: 1 }}>
        {/* <Text>{JSON.stringify(props.route.params)}</Text> */}
        <View style={{ flexDirection: 'row', padding: 10, justifyContent: 'space-between', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <SvgUri uri={props.route.params.logo_url} width={75} height={75} style={{ minWidth: 50, minHeight: 50 }} />
                <View>
                    <Text>{props.route.params.symbol}</Text>
                    <Text>${Number(props.route.params.price).toFixed(2)}</Text>
                </View>
            </View>
            <Text>{props.route.params.symbol}</Text>
        </View>
        <View>
            <Text style={styles.headerText}>Price (24h)</Text>
            <View style={{ alignItems: 'center', }}>
                <PriceInfo
                    open={44}></PriceInfo>
            </View>
        </View>
        <View>
            <Text style={styles.headerText}>Market Stats</Text>
            <View style={{ alignItems: 'center', }}>
                <MarketInfo
                    marketCap={props.route.params.market_cap}
                    maxSupply={props.route.params.max_supply}
                    volume={props.route.params['1d'].volume}
                    circulating={props.route.params.circulating_supply}
                    ATH={props.route.params.high}
                    rank={props.route.params.rank}
                />
            </View>
        </View>
        <View>
            <Text style={styles.headerText}>About {props.route.params.name}</Text>
            <Text>{JSON.stringify(props.route.params.description)}</Text>
        </View>

        {props.route.params.website_url ? <DetailsListItem left={'Website'} right={props.route.params.website_url}></DetailsListItem> : null}

        {props.route.params.block_explorer_url ? <DetailsListItem left={'Explorer'} right={props.route.params.block_explorer_url}></DetailsListItem> : null}
        {props.route.params.reddit_url ? <DetailsListItem left={'Reddit'} right={props.route.params.reddit_url}></DetailsListItem> : null}
        {props.route.params.twitter_url ? <DetailsListItem left={'Twitter'} right={props.route.params.twitter_url}></DetailsListItem> : null}
        {props.route.params.github_url ? <DetailsListItem left={'Source Code'} right={props.route.params.github_url}></DetailsListItem> : null}
        {props.route.params.whitepaper_url ? <DetailsListItem left={'Whitepaper'} right={props.route.params.whitepaper_url}></DetailsListItem> : null}
        {props.route.params.telegram_url ? <DetailsListItem left={'Chat'} right={props.route.params.telegram_url}></DetailsListItem> : null}
    </ScrollView>)
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 16, fontWeight: 'bold'
    }
})

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
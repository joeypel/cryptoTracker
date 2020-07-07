import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default DetailsListItem = props => {

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 8 }}>
                <Text>{props.left}</Text>
                <View style={{ flexDirection: 'row', flexShrink: 1, justifyContent: 'flex-end' }}>
                    <Text numberOfLines={1} style={styles.linkText}>{props.right}</Text>
                    {!props.noLink ? <Text style={styles.linkText}>▶</Text> : null}
                </View>

            </View>
            {!props.last ? <View style={{ borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth }} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    linkText: {
        fontWeight: '300', color: '#444', flexShrink: 1
    }
})
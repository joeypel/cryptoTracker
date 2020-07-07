import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import Svg, {
    Circle,
    Ellipse,
    G,
    // Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

import * as d3 from "d3";

/* Use this if you are using Expo
import * as Svg from 'react-native-svg';
const { Circle, Rect } = Svg;
*/

export default SmallChart = props => {

    var newArray = props.dataX.map(function (e, i) { return { x: new Date(e), y: props.dataY[i] } });

    let yBounds = d3.extent(props.dataY)

    const scaleX = d3.scaleLinear().domain([new Date(newArray[0].x), new Date(newArray[newArray.length - 1].x)]).range([0, 100]).clamp(true)
    const scaleY = d3.scaleLinear().domain(yBounds).range([5, 95]).clamp(true)



    var lineFunction = d3.line()
        .x(function (d) { return scaleX(d.x); })
        .y(function (d) { return scaleY(d.y); })
        .curve(d3.curveBasis);

    // console.log(newArray)
    // console.log(lineFunction(newArray))
    return (<View style={{ flex: 1 }}>

        <Svg height="100%" width="100%" viewBox="0 0 100 100">
            <Path d={lineFunction(newArray)} fill="none" stroke={props.postive24h ? 'green' : 'red'} strokeWidth={3} />

        </Svg>
    </View>)
}
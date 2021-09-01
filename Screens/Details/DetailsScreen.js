import React from "react";
import {Text, View} from "react-native";
export default function DetailsScreen({route}) {
    const { name } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details {name}</Text>
        </View>
    );
}

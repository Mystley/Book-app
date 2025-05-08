import React from "react";
import {View, Text} from "react-native";
import styles from "./styles"

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Favorites</Text>
            </View>
        </View>
    )
}
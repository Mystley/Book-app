import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const MyButton = ({title, onPress, color = 'orange'}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default MyButton
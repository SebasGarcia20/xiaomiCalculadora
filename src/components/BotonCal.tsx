import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    backgroundColor?: string;
    colorText?: string;
    action: (numeroTexto: string) => void;
}

export const BotonCal = ({ text, backgroundColor = '#040404', colorText = "#9c9c9c", action }: Props) => {
    return (
        <TouchableOpacity
            style={styles.test}
            onPress={() => action(text)}
        >
            <View style={{ ...styles.boton, backgroundColor: backgroundColor }}>
                <Text style={{ ...styles.botonTexto, color: colorText }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

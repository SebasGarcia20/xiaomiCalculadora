import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    backgroundColor?: string;
    colorText?: string;
}

export const BotonCal = ({ text, backgroundColor = '#040404', colorText = "#9c9c9c" }: Props) => {
    return (
        <TouchableOpacity style={styles.test}  >
            <View style={{ ...styles.boton, backgroundColor: backgroundColor }}>
                <Text style={{ ...styles.botonTexto, color: colorText }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

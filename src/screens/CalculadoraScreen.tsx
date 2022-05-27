import React from 'react'
import { Text, View } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {
    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoPequeno}>72,526,356</Text>
            <Text style={styles.resultado}>72,526,356</Text>

            <View style={styles.hr}/>

            <View style={styles.fila}>
                <BotonCal text="AC" colorText='#eb753e' />
                <BotonCal text="<-" colorText="#eb753e" />
                <BotonCal text="%" colorText="#eb753e" />
                <BotonCal text="/" colorText="#eb753e" />
            </View>

            <View style={styles.fila}>
                <BotonCal text="7" />
                <BotonCal text="8" />
                <BotonCal text="9" />
                <BotonCal text="x" colorText="#eb753e" />
            </View>

            <View style={styles.fila}>
                <BotonCal text="4" />
                <BotonCal text="5" />
                <BotonCal text="6" />
                <BotonCal text="-" colorText="#eb753e" />
            </View>

            <View style={styles.fila}>
                <BotonCal text="1" />
                <BotonCal text="2" />
                <BotonCal text="3" />
                <BotonCal text="+" colorText="#eb753e" />
            </View>

            <View style={styles.fila}>
                <BotonCal text="[]" colorText="#eb753e"/>
                <BotonCal text="0" />
                <BotonCal text="." />
                <BotonCal text="=" backgroundColor="#eb753e" />
            </View>


        </View>


    )
}

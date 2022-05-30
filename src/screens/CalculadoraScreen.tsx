import React from 'react'
import { Text, View } from 'react-native';
import { BotonCal } from '../components/BotonCal';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {

    const {
        limpiarNumero,
        calcular,
        btnRestar,
        btnSumar,
        btnMultiplicar,
        btnDividir,
        borrarUltimoNumero,
        crearNumero,
        numeroAnterior,
        numero,
        porcentaje
    } = useCalculadora();


    return (
        <View style={styles.calculadoraContainer}>
            {numeroAnterior !== '0' && <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>}
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            <View style={styles.hr} />

            <View style={styles.fila}>
                <BotonCal text="AC" colorText='#eb753e' action={limpiarNumero} />
                <BotonCal text="<-" colorText="#eb753e" action={borrarUltimoNumero} />
                <BotonCal text="%" colorText="#eb753e" action={porcentaje} />
                <BotonCal text="/" colorText="#eb753e" action={btnDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCal text="7" action={crearNumero} />
                <BotonCal text="8" action={crearNumero} />
                <BotonCal text="9" action={crearNumero} />
                <BotonCal text="x" colorText="#eb753e" action={btnMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCal text="4" action={crearNumero} />
                <BotonCal text="5" action={crearNumero} />
                <BotonCal text="6" action={crearNumero} />
                <BotonCal text="-" colorText="#eb753e" action={btnRestar} />
            </View>

            <View style={styles.fila}>
                <BotonCal text="1" action={crearNumero} />
                <BotonCal text="2" action={crearNumero} />
                <BotonCal text="3" action={crearNumero} />
                <BotonCal text="+" colorText="#eb753e" action={btnSumar} />
            </View>

            <View style={styles.fila}>
                <BotonCal text="[]" colorText="#eb753e" action={limpiarNumero} />
                <BotonCal text="0" action={crearNumero} />
                <BotonCal text="." action={crearNumero} />
                <BotonCal text="=" backgroundColor="#eb753e" action={calcular} />
            </View>
        </View>
    )
}

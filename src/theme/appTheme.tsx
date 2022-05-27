import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#040404',
    },
    calculadoraContainer: {
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: '#d6d5d4',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
    resultadoPequeno: {
        color: 'gray',
        fontSize: 20,
        textAlign: 'right'
    },
    boton: {
        height: 60,
        width: 60,
        backgroundColor: '#040404',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 24,
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 22,
        fontWeight: '400',
        color: '#d6d5d4'
    },
    hr: {
        backgroundColor: '#343434',
        height: 1,
        marginBottom: 25,
        marginTop: 10
    },
    test: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    }

})
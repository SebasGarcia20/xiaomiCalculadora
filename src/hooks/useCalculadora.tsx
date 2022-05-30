import { useRef, useState } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numero, setNumero] = useState('0')
    const [numeroAnterior, setNumeroAnterior] = useState('0')

    const ultimaOperacion = useRef<Operadores>()

    const limpiarNumero = () => {
        setNumero('0');
        setNumeroAnterior('0');
    } 

    const crearNumero = (numeroTexto: string) => {
        if (numero.includes('.') && numeroTexto === '.') return;
        if (numero.startsWith('0')) {
            //Punto decimal
            if (numeroTexto === '.') {
                setNumero('0.')
                //si tiene otro cero y tiene un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)
                //si es diferente de cero y no tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
                //evitar el 00000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }
    }

    const porcentaje = () => {
        if (numero !== '0') {
            let sacarPorcentaje = parseFloat(numero) / 100
            setNumero(sacarPorcentaje.toString())
        }
    }

    const borrarUltimoNumero = () => {
        if (numero.length > 1) {
            setNumero(numero.slice(0, -1));
        } else {
            setNumero('0');
        }
    }

    const pasarNumaNumAnterior = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnDividir = () => {
        pasarNumaNumAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {
        pasarNumaNumAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }
    const btnSumar = () => {
        pasarNumaNumAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }
    const btnRestar = () => {
        pasarNumaNumAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`)
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`)
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;
            case Operadores.dividir:
                if (num1 === 0) {
                    setNumero('No se puede dividir en 0')
                } else {
                    setNumero(`${num2 / num1}`)
                }
                break;

        }

        setNumeroAnterior('0');
    }

    return {
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
        porcentaje,
        
    }
}


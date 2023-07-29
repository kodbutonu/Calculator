import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import math  from 'mathjs';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleButtonPress = (buttonValue) => {
        if (buttonValue === '=') {
            calculateResult();
        } else if (buttonValue === 'C') {
            clearResult();
        } else {
            setResult((prevResult) => prevResult + buttonValue);
        }
    };

    const calculateResult = () => {
        try {
            const evaluatedResult = math.evaluate(result);
            setResult(evaluatedResult.toString());
        } catch (error) {
            setResult('');
        }
    };

    const clearResult = () => {
        setResult('');
    };

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={result} editable={false} />
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
                    <Text style={styles.buttonText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
                    <Text style={styles.buttonText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
                    <Text style={styles.buttonText}>9</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
                    <Text style={styles.buttonText}>/</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
                    <Text style={styles.buttonText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
                    <Text style={styles.buttonText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
                    <Text style={styles.buttonText}>6</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
                    <Text style={styles.buttonText}>*</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
                    <Text style={styles.buttonText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
                    <Text style={styles.buttonText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
                    <Text style={styles.buttonText}>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
                    <Text style={styles.buttonText}>0</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
                    <Text style={styles.buttonText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('=')}>
                    <Text style={styles.buttonText}>=</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.clearButton} onPress={clearResult}>
                <Text style={styles.clearButtonText}></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    input: {
        height: 80,
        fontSize: 30,
        backgroundColor: '#ffffff',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        backgroundColor: '#b0b0b0',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        margin: 5,
    },
    buttonText: {
        fontSize: 24,
        color: '#ffffff',
    },
    clearButton: {
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        marginTop: 20,
    },
    clearButtonText: {
        fontSize: 20,
        color: '#ffffff',
    },
});

export default Calculator;

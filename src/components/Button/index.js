import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styles';

const Button = ({text, onPress}) => {
    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

export default Button;

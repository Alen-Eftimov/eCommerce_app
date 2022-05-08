import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        padding: 10,
        backgroundColor: 'white',
    },
    title: {
        color: 'black',
    },
    picker: {
        backgroundColor: '#d9d9d9',
        marginVertical: 10,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    oldPrice: {
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    description: {
        marginVertical: 10,
        lineHeight: 18,
    },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        width: 130,
    },
    button: {
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d1d1d1',
        color: 'black',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
    },
    quantity: {
        color: '#007b90',
    },
});

export default styles;

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 5,
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer: {
        padding: 10,
        flex: 3,
    },
    title: {
        fontSize: 18,
        color: 'black',
    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    star: {
        margin: 2,
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
    quantityContainer: {
        margin: 5,
    },
});

export default styles;
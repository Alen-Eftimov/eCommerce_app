import React from 'react';
import { Image, View, Text, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const ProductItem = ({item}) => {
    // const {item} = props;

    const navigation = useNavigation();

    const onPress = () => {
        console.warn('item pressed');
        navigation.navigate('ProductDetails', {id: item.id});
    };

    return (
        <Pressable onPress={onPress} style={styles.root}>
            <Image style={styles.image} source={{uri: item.image}} />

            <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
            {/* Ratings */}
            <View style={styles.ratingsContainer}>
                {Array(5).fill().map((element, index) =>
                 <FontAwesome
                 key={`${item.id}-${index}`}
                 style={styles.star}
                 name={index < Math.floor(item.avgRating) ? 'star' : 'star-o' && index < Math.min(item.avgRating) ? 'star-half-full' : 'star-o'}
                 size={18}
                 color={'#e47911'}
                />)}
                {/* <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                <FontAwesome style={styles.star} name="star" size={18} color={'#e47911'} />
                <FontAwesome style={styles.star} name="star-half-full" size={18} color={'#e47911'} />
                <FontAwesome style={styles.star} name="star-o" size={18} color={'#e47911'} /> */}
                <Text> {item.ratings}</Text>
            </View>
            <Text style={styles.price}>
                from ${item.price}
                {item.oldPrice && <Text style={styles.oldPrice}> ${item.oldPrice}</Text>}
            </Text>
            </View>
        </Pressable>
    );
};

export default ProductItem;

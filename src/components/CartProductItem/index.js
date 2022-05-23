import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../QuantitySelector';

import styles from './styles';

const CartProductItem = ({cartItem}) => {
    // const {quantity, item} = cartItem;

    const [quantity, setQuantity] = useState(cartItem.quantity)
    
    return (
        <View style={styles.root}>
            <View style={styles.row}>
                <Image style={styles.image} source={{uri: cartItem.item.image}} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{cartItem.item.title}</Text>
                    {/* Ratings */}
                    <View style={styles.ratingsContainer}>
                        {Array(5).fill().map((element, index) =>
                        <FontAwesome
                        key={`${cartItem.id}-${index}`}
                        style={styles.star}
                        name={index < Math.floor(cartItem.item.avgRating) ? 'star' : 'star-o' && index < Math.min(cartItem.item.avgRating) ? 'star-half-full' : 'star-o'}
                        size={18}
                        color={'#e47911'}
                        />
                        )
                        }
                        <Text> {cartItem.item.ratings}</Text>
                    </View>
                    <Text style={styles.price}>
                        from ${cartItem.item.price}
                        {cartItem.item.oldPrice && <Text style={styles.oldPrice}> ${cartItem.item.oldPrice}</Text>}
                    </Text>
                </View>
            </View>            
            <View style={styles.quantityContainer}>
                <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </View>          
        </View>
    );
};

export default CartProductItem;
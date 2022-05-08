import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import product from '../../data/product';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    console.log(selectedOption);
    return (
        <View>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}

            {/* Option Selector */}
            <Picker
             selectedValue={selectedOption}
             onValueChange={(productValue, productIndex) =>
                 setSelectedOption(productValue)
            }>
                {product.options.map(option => <Picker.Item key={`${product.id}-${option}`} label={option} value={option} />)}
            </Picker>
            {/* Price */}
            <Text style={styles.price}>
                from ${product.price}
                {product.oldPrice && (<Text style={styles.oldPrice}> ${product.oldPrice}</Text>)}
            </Text>

            {/* Description */}
            <Text style={styles.description}>
                {product.description}
            </Text>
            {/* Quantity Selector */}
            <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            {/* Buttons */}
            <Button text={'Add to Cart'} onPress={() => {console.warn('Add to cart');}} />
            <Button text={'Buy Now'} onPress={() => {console.warn('Buy Now');}} />
        </View>
    );
};

export default ProductScreen;

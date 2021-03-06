import React, {useState} from 'react';
import { View, Text, ScrollView } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousel from '../../components/ImageCarousel';

import product from '../../data/product';


const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [quantity, setQuantity] = useState(1);
    console.log(selectedOption);

    const route = useRoute();
    console.log(route.params);

    return (
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

            {/* Image Carousel */}
            <ImageCarousel images={product.images} />
            {/* Option Selector */}
            <Picker
             selectedValue={selectedOption}
             onValueChange={(productValue, productIndex) =>
                 setSelectedOption(productValue)}
             style={styles.picker}
            >
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
            <View style={{ marginBottom: 20}}>
                <Button
                text={'Add to Cart'}
                onPress={() => {
                    console.warn('Add to cart');
                }}
                // eslint-disable-next-line react-native/no-inline-styles
                containerStyles={{ backgroundColor: '#e3c905' }}
                />
                <Button              
                text={'Buy Now'}
                onPress={() => {
                    console.warn('Buy Now');
                    }}
                />
            </View>
        </ScrollView>
    );
};

export default ProductScreen;

import React, { useState, useCallback } from 'react';
import { View, Image, FlatList, useWindowDimensions } from 'react-native';
import styles from './styles';

const ImageCarousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const windowWidth = useWindowDimensions().width;

    const onFlatListUpdate = useCallback(({viewableItems}) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index || 0);
        }
        console.log(viewableItems);
    }, []);

    return (
        <View style={styles.root}>
            <FlatList
             data={images}
             renderItem={({item}) => (
                 <Image
                  style={[styles.image, {width: windowWidth - 40}]}
                  source={{ uri: item }}
                />
             )}
             horizontal
             showsHorizontalScrollIndicator={false}
             snapToInterval={windowWidth - 20}
             snapToAlignment={'center'}
             decelerationRate={'fast'}
             viewabilityConfig={{
                viewAreaCoveragePercentThreshold: 50,
                minimumViewTime: 300,
             }}
             onViewableItemsChanged={onFlatListUpdate}
            />
            <View style={styles.dots}>
                {images.map((image, index) => (
                    <View
                     style={[
                        styles.dot,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                            backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
                        },
                     ]}
                     key={`${image.id}-${index}`}
                    />
                ))}
            </View>
        </View>
    );
};

export default ImageCarousel;

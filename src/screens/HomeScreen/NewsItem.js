import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Constants
import { COLORS, FONTS, SIZES } from '../../constants';

const NewsItem = ({ title, image }) => {
    return (
        <>
            <LinearGradient colors={[COLORS.secondary, 'transparent', 'transparent']} style={styles.container}>
                <Text
                    style={styles.title}
                    numberOfLines={2}
                >
                    {title}
                </Text>
                <Image
                    source={{ uri: image }}
                    style={{
                        width: '100%',
                        height: '100%',
                        zIndex: -1
                    }}
                />
            </LinearGradient>
            <TouchableWithoutFeedback >
                <View style={styles.detailBtn}>
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            textAlign: 'center'
                        }}
                    >
                        อ่านต่อ
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        height: SIZES.height / 3.3,
        marginBottom: 30,
        borderRadius: 16,
        overflow: 'hidden',
    },
    title: {
        ...FONTS.body3,
        color: COLORS.white,
        position: 'absolute',
        padding: 10
    },
    detailBtn: {
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        bottom: 15,
        width: '30%',
        height: '15%',
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray
    }
});

export default NewsItem;
import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

// Constants
import {
    COLORS,
    SIZES,
    FONTS
} from '../../constants';

const ButtonItem = ({ value, isSelectedNumber }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => isSelectedNumber(value)}
        >
            <Text
                style={{
                    ...FONTS.h2,
                    fontSize: 26,
                }}
            >
                {value}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: SIZES.radius,
    }
});

export default ButtonItem;
import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

// Icons
import SimIcon from 'react-native-vector-icons/SimpleLineIcons';

// Constants
import { COLORS, SIZES, FONTS } from '../../constants';

const ReportItem = ({ status, time, date }) => {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text
                    style={{
                        ...FONTS.body2,
                        color: (status === 'ตรงเวลา')
                            ? 'green'
                            : (status === 'รับช้า')
                                ? 'orange'
                                : 'red'
                    }}
                >
                    {status}
                </Text>
                <Text
                    style={{ ...FONTS.body3 }}
                >
                    {time} {date}
                </Text>
            </View>
            <TouchableWithoutFeedback>
                <View style={styles.detail}>
                    <SimIcon
                        name="arrow-right"
                        size={30}
                        color={COLORS.secondary}
                    />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: SIZES.height / 9,
        borderRadius: 3,
        marginBottom: 10,
        borderStartWidth: 5,
        borderColor: COLORS.secondary
    },
    info: {
    }
});

export default ReportItem;
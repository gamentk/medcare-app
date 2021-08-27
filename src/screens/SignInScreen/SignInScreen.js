import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

// Constants
import {
    COLORS,
    SIZES,
    FONTS
} from '../../constants';

// Components
import ButtonItem from './ButtonItem';

const SignInScreen = () => {
    // Buttons Input
    const buttons = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['ลืมรหัส', 0, 'ลบ']
    ];

    const [selectedNumber, setSelectedNumber] = useState('');

    function isSelectedNumber(number) {
        setSelectedNumber(prevState => prevState + number);
    }

    // Render Top Container
    function renderHeader() {
        return (
            <View
                style={styles.headerContainer}
            >
                {/* App Name */}
                <Text
                    style={{
                        ...FONTS.h1,
                        color: COLORS.primary,
                        position: 'absolute',
                        top: '10%'
                    }}
                >
                    MEDCARE
                </Text>

                {/* Description */}
                <Text
                    style={{
                        ...FONTS.h2,
                        color: COLORS.secondary,
                        position: 'absolute',
                        top: '50%'
                    }}
                >
                    กรุณาใส่หมายเลขผู้ป่วย
                </Text>
                <Text
                    style={{
                        ...FONTS.body3,
                        color: COLORS.secondary,
                        position: 'absolute',
                        top: '60%'
                    }}
                >
                    เพื่อเข้าใช้งาน
                </Text>

                {/* Selected Number */}
                <Text
                    style={{
                        ...FONTS.h1,
                        fontSize: 40,
                        paddingTop: 10,
                        position: 'absolute',
                        top: '70%'
                    }}
                >
                    {selectedNumber}
                </Text>
            </View>
        );
    }

    // Render Bottom Container
    function renderFooter() {
        return (
            <View
                style={styles.buttonsContainer}
            >
                {renderButtons()}
            </View>
        )
    }

    // Render Buttons
    function renderButtons() {
        let layout = buttons.map((buttonRow, index) => {
            let rowItems = buttonRow.map((buttonItem, buttonIndex) => {
                return (
                    <ButtonItem
                        key={`btn-${buttonIndex}`}
                        value={buttonItem}
                        isSelectedNumber={isSelectedNumber}
                    />
                )
            });

            return (
                <View
                    key={`row-${index}`}
                    style={styles.buttonRow}
                >
                    {rowItems}
                </View>
            );
        });

        return layout;
    }

    // Entry Point
    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderFooter()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: COLORS.white
    },
    buttonsContainer: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: COLORS.white
    },
    buttonRow: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default SignInScreen;
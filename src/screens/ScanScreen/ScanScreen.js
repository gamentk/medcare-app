import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import LinearGradient from 'react-native-linear-gradient';

// Icons
import AntIcon from 'react-native-vector-icons/AntDesign';

// Constants
import { COLORS, SIZES, FONTS } from '../../constants';

const ScanScreen = () => {
    // Render Header
    function renderHeader() {
        return (
            <LinearGradient
                colors={[COLORS.black, 'transparent', 'transparent', 'transparent', 'transparent']}
                style={{
                    flex: 1,
                    padding: 15
                }}
            >
                {/* Header */}
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <AntIcon
                        name="close"
                        size={30}
                        color={COLORS.white}
                    />
                    <Text style={{ ...FONTS.body3, color: COLORS.white }}>
                        แสกน QR Code ที่ปรากฎบนเครื่อง
                    </Text>
                    <AntIcon
                        name="infocirlceo"
                        size={30}
                        color={COLORS.thirdary}
                    />
                </View>
            </LinearGradient>
        );
    }

    return (
        <View style={styles.container}>
            <RNCamera
                style={styles.preview}
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.off}
                androidCameraPermissionOptions={{
                    title: 'การขออนุญาตใช้กล้อง',
                    message: 'MedCare จำเป็นต้องใช้กล้องเพื่อแสกน QR Code',
                    buttonPositive: 'ตกลง',
                    buttonNegative: 'ยกเลิก'
                }}
                captureAudio={false}
            >
                {renderHeader()}
            </RNCamera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    preview: {
        flex: 1
    }
});

export default ScanScreen;
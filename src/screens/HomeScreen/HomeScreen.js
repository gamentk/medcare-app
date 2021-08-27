import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

// Icons
import AntIcon from 'react-native-vector-icons/AntDesign'

// Constants
import { COLORS, FONTS } from '../../constants';

// Components
import NewsItem from './NewsItem';

const HomeScreen = () => {
    // News Dummy
    const news = [
        {
            key: '1',
            title: 'เจาะประสิทธิภาพ SINOVAC ข้อมูลแท้จากองค์การอนามัยโลก',
            image: 'https://images.workpointnews.com/workpointnews/2021/05/08163713/1620466620_80652_GettyImages-150337688.jpg'
        },
        {
            key: '2',
            title: 'อนุทิน เผย ไทยจะมีวัคซีนไฟเซอร์ รวม 32.5 ล้านโดส ภายในสิ้นปี หลังซื้อเพิ่มอีก 10 ล้านโดส',
            image: 'https://images.workpointnews.com/workpointnews/2021/08/11124319/1628660586_91588_web32.jpg'
        },
        {
            key: '3',
            title: 'ทูตสหรัฐฯ ประจำยูเอ็น ย้ำจุดยืน บริจาควัคซีนช่วยไทยสู้โควิด-19 กังวลสถานการณ์เมียนมา',
            image: 'https://images.workpointnews.com/workpointnews/2021/08/11121724/1628659033_86819_THAI_US_UN_AMB_WEBNO.jpg'
        }
    ];

    // Render Header
    function renderHeader() {
        return (
            <View
                style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingBottom: 10,
                    marginBottom: 15,
                    borderBottomWidth: 1,
                    borderBottomColor: COLORS.thirdary
                }}
            >
                {/* Hello Message */}
                <View
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <Text style={{ ...FONTS.body1, color: COLORS.secondary }}>
                        สวัสดี สมเจียง
                    </Text>
                    <Text style={{ ...FONTS.body3, letterSpacing: 1, color: COLORS.secondary }}>
                        เวลารับยาครั้งต่อไป 18:30
                    </Text>
                </View>

                {/* Search Button */}
                <View
                    style={{
                        justifyContent: 'center'
                    }}
                >
                    <AntIcon
                        name="search1"
                        size={30}
                        color={COLORS.gray}
                    />
                </View>
            </View>
        );
    }

    // Render Content
    function renderContent() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                {/* News Card */}
                <FlatList
                    data={news}
                    renderItem={({ item }) => <NewsItem {...item} />}
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderContent()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25,
        paddingHorizontal: 25,
        backgroundColor: COLORS.white
    }
});

export default HomeScreen;
import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native';

// Components
import ReportItem from './ReportItem';

// Constants
import { COLORS, SIZES, FONTS } from '../../constants';

// Reports Dummy
import { reports } from './reports';

const ReportScreen = () => {
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
                        ประวัติการรับยา
                    </Text>
                    <Text style={{ ...FONTS.body3, letterSpacing: 1, color: COLORS.secondary }}>
                        เวลารับยาครั้งต่อไป 18:30
                    </Text>
                </View>
            </View>
        );
    }

    function renderContent() {
        return (
            <View
                style={{
                    flex: 1
                }}
            >
                <FlatList
                    data={reports}
                    renderItem={({ item }) => <ReportItem {...item} />}
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

export default ReportScreen;
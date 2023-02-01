import { View, Text, StyleSheet } from 'react-native';

function ShopScrees() {
    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"Shop"</Text> screen!
            </Text>
        </View>
    );
}

export default ShopScrees;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    highlight: {
        fontWeight: 'bold',
        color: '#eb1064',
    },
});

import { View, Text, StyleSheet } from 'react-native';

export default function ShopScrees(): JSX.Element {
    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"Shop"</Text> screen!
            </Text>
        </View>
    );
}

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

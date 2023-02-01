import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccountScreen(): JSX.Element {
    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"Account"</Text> screen!
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

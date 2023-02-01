import { View, Text, Button, StyleSheet } from 'react-native';

function AccountScreen() {
    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"Account"</Text> screen!
            </Text>
        </View>
    );
}

export default AccountScreen;

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

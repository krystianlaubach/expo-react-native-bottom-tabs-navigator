import { View, Text, StyleSheet } from 'react-native';

function BranchesScreen() {
    return (
        <View style={ styles.rootContainer }>
            <Text>
                This is the <Text style={ styles.highlight }>"Branches"</Text> screen!
            </Text>
        </View>
    );
}

export default BranchesScreen;

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

import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    name: 'home' | 'person',
    focused: boolean,
    color: string,
    size: number,
};

export default function TabIcon({ name, focused, color, size }: Props): JSX.Element {
    return (
        <View style={ focused && styles.focused }>
            <Ionicons name={ name } color={color} size={size} />
        </View>
    );
}

const styles = StyleSheet.create({
    focused: {
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 4,
        borderTopColor: '#3c0a6b',
    },
});

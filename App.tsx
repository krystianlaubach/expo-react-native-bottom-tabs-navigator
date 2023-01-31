import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import TabIcon from './components/TabIcon';

const Tabs = createBottomTabNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light"/>
            <NavigationContainer>
                <Tabs.Navigator screenOptions={{
                    headerStyle: { backgroundColor: '#3c0a6b' },
                    headerTintColor: 'white',
                    tabBarActiveTintColor: '#3c0a6b',
                    tabBarStyle: { borderTopWidth: 0, elevation: 0 },
                }}>
                    <Tabs.Screen name='Welcome' component={ WelcomeScreen } options={{
                        tabBarIcon: ({color, size, focused}) => <TabIcon name='home' focused={ focused } color={ color }  size={ size } />,
                        tabBarLabel: 'Home',
                    }} />
                    <Tabs.Screen name='UserScreen' component={ UserScreen } options={{
                        tabBarIcon: ({color, size, focused}) => <TabIcon name='person' focused={ focused } color={ color }  size={ size } />,
                        tabBarLabel: 'User Dashboard',
                        tabBarBadge: 3,
                    }} />
                </Tabs.Navigator>
            </NavigationContainer>
        </>
    );
}

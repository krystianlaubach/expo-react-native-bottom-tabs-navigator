import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, MaterialIcons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import BranchesScreen from './screens/BranchesScreen';
import AccountScreen from './screens/AccountScreen';
import TabButton from './components/TabButton';

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
                    <Tabs.Screen name='Home' component={ HomeScreen } options={{
                        tabBarButton: TabButton,
                        tabBarIcon: ({color, size}) => <Entypo name='home' color={color} size={size} />,
                        tabBarLabel: 'Home',
                    }} />
                    <Tabs.Screen name='Shop' component={ ShopScreen } options={{
                        tabBarButton: TabButton,
                        tabBarIcon: ({color, size}) => <SimpleLineIcons name='basket' color={color} size={size} />,
                        tabBarLabel: 'Shop',
                    }} />
                    <Tabs.Screen name='Branches' component={ BranchesScreen } options={{
                        tabBarButton: TabButton,
                        tabBarIcon: ({color, size}) => <MaterialCommunityIcons name='store' color={color} size={size} />,
                        tabBarLabel: 'Branches',
                    }} />
                    <Tabs.Screen name='Account' component={ AccountScreen } options={{
                        tabBarButton: TabButton,
                        tabBarIcon: ({color, size}) => <MaterialIcons name='account-circle' color={color} size={size} />,
                        tabBarLabel: 'Account',
                        tabBarBadge: 3,
                    }} />
                </Tabs.Navigator>
            </NavigationContainer>
        </>
    );
}

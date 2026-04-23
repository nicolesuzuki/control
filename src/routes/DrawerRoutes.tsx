import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import EntidadeScreen from "../screens/EntidadeScreen";
import ContasPagarScreen from "../screens/ContasPagarScreen";
import ContasReceberScreen from "../screens/ContasReceberScreen";
import { Ionicons } from "@expo/vector-icons";
import{View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";

const Drawer = createDrawerNavigator();
function CustomDrawerContent(props: any){
    const user = {
        nome:"João Silva",
        foto: "https://i.pravatar.cc/100"
    };
    return(
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <view style={styles.header}>
                    <Image
                    source={{uri:user.foto}}
                    style={styles.avatar}
                    />
                    <Text style={styles.name}>
                        {user.nome}
                    </Text>
                </view>
                <DrawerItemList {...props}/>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <TouchableOpacity
                style={styles.logoutButton}
                onPrees={() => console.log("logout")}>

                <Ionicons name="log-out-outline" size={22} color="#fff" />
                <Text style={styles.logoutText}>
                        Deslogar
                </Text>

                </TouchableOpacity>
            </View>
        </View>
    );
}
export default function DrawerRoutes (){
    return (
        <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
            headerStyle: {
                backgroundColor: "#1E88E5"
            },
            headerTintColor:"#fff",
            drawerActiveTintColor:"#1E88E5"
        }}>
            <Drawer.Screen
            name="Home"
            component={HomeScreen}
            options={{
                drawerIcon: ({ color, size}) => (
                    <Ionicons name="home-outline" size={size} color={color}/>
                )
            }}
            />
            
        </Drawer.Navigator>
    )
}
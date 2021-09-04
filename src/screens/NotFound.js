import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../contants/theme";

export default function NotFound() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>404</Text>
            <View style={styles.button}>
                {/* <Button
                    icon={<Icon name="home" size={20} color={COLORS.dark} />}
                    onPress={() => navigation.navigate("Home")}
                    title=""
                    type="outline"
                ></Button> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#fff",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        color: COLORS.colorTextGrey,
    },
    button: {
        minWidth: 150,
        paddingVertical: 10,
    },
});

import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";

export default function Navbar() {
    const navigation = useNavigation();

    return (
        <>
            <DrawerItem
                label="Home"
                onPress={() => navigation.navigate("Home")}
            />
            <DrawerItem
                label="Not Found"
                onPress={() => navigation.navigate("NotFound")}
            />
        </>
    );
}

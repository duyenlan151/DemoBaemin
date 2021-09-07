import { DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React, { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
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


export default Navbar;
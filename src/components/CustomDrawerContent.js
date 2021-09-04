import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from "react";
import Navbar from "./Navbar";

export default function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <Navbar />
        </DrawerContentScrollView>
    );
}

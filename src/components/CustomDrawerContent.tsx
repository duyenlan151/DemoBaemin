import Navbar from "@components/Navbar";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC } from "react";

interface DrawerProps {}

const CustomDrawerContent: FC<DrawerProps> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Navbar />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
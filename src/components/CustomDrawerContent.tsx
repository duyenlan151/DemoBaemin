import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, ReactNode } from "react";
import Navbar from "@components/Navbar";

interface DrawerProps {
    children: ReactNode
}

const CustomDrawerContent: FC<DrawerProps> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Navbar />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
import { DrawerContentScrollView } from "@react-navigation/drawer";
import React, { FC, ReactNode } from "react";
import Navbar from "@components/Navbar";

interface IProps {
    children: ReactNode
}

const CustomDrawerContent: FC<IProps> = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <Navbar />
        </DrawerContentScrollView>
    );
}

export default CustomDrawerContent;
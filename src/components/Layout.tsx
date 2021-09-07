import Header from "@components//Header";
import COLORS from "@contants/theme";
import React, { FC, ReactNode } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

interface LayoutProps {
    children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <SafeAreaView style={styles.container}>
            {/* <View> */}
            <Header />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 115,
        backgroundColor: COLORS.white,
    },
});

export default Layout;

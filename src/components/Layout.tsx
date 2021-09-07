import React, { FC, ReactNode } from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import COLORS from "@contants/theme";
import Header from "@components//Header";

interface IProps {
    children: ReactNode
}

const Layout: FC<IProps> = ({ children }) => {
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

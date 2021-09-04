import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";
import COLORS from "../contants/theme";
import Header from "./Header";

export default function Layout({ children }) {
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

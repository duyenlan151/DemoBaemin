import COLORS from '@contants/theme';
import React, { FC } from "react";
import { StyleSheet, Text, View } from 'react-native';

interface NotFoundProps { }

const NotFound: FC<NotFoundProps> = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>404</Text>
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

export default NotFound;

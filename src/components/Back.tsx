import { useNavigation } from "@react-navigation/native";
import React, { FC, ReactNode } from "react";
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "@contants/theme";

interface BackProps {
    children: ReactNode
}

const Back: FC<BackProps> = ({ children }) => {
    const naviagtion = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableWithoutFeedback onPress={() => naviagtion.goBack()}>
                    <Icon name="west" color={COLORS.dark} size={20} />
                </TouchableWithoutFeedback>
            </View>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 115,
        backgroundColor: COLORS.white,
        flex: 1,
    },
    header: {
        padding: 15,
        borderBottomWidth: 1,
        borderColor: COLORS.colorBorder,
    },
});

export default Back;
import React from "react";
import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../contants/theme";
import { randomImages } from "../mock";

import ICMenu from '../assets/icons/ic-partnerBadge.svg';

function Category({ category, onPress }) {
    const { title, desc, imgUrl, star, km } = category;

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <View style={styles.wrapperImage}>
                    <Image
                        style={styles.tinyImage}
                        // source={{
                        //     uri: "https://i.vimeocdn.com/portrait/58832_300x300.jpg",
                        // }}
                        // source={
                        //     randomImages[
                        //         Math.floor(Math.random() * randomImages.length)
                        //     ]
                        // }
                        source={imgUrl}
                    />
                </View>
                <View style={styles.wrapperText}>
                    <View style={styles.groupHeader}>
                        <Text style={styles.title} numberOfLines={2}>
                            <ICMenu style={styles.icon} width={20} height={15}/>
                            {title ? title : ""}
                        </Text>
                        <Text style={styles.groupBody} numberOfLines={2}>
                            {desc ? desc : ""}
                        </Text>
                    </View>
                    <View style={styles.groupFooter}>
                        <Icon name="star" color={COLORS.yellow} size={18} />
                        <Text style={styles.iconFooter}>
                            {star ? star : "1"}
                        </Text>
                        <Text style={styles.textTiny}>(999+)</Text>
                        <Text style={styles.circle}>{} </Text>
                        <Text style={styles.iconFooter}>
                            {km ? km + "km" : "0"}{" "}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: "center",
        paddingHorizontal: 16,
        paddingVertical: 15,
        justifyContent: "center",
        backgroundColor: COLORS.white,
        borderBottomWidth: 1,
        borderColor: COLORS.colorBorder,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        minHeight: 120,
        //     elevation: 1,
    },
    "container:first-child": {
        borderTopWidth: 1,
    },
    text: {
        marginBottom: 3,
        marginTop: 1,
        letterSpacing: 0.2,
    },
    tinyImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        resizeMode: "cover",
        // objectFit: 'cover',
        // objectPosition: 'center'
    },
    wrapperImage: {
        position: "relative",
        width: 88,
        height: 88,
        overflow: "hidden",
    },
    wrapperText: {
        paddingHorizontal: 12,
        flexShrink: 1,
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
    },
    groupHeader: {
        display: "flex",
        flexDirection: "column",
    },
    groupBody: {
        color: COLORS.colorDesc,
        fontSize: 13,
        marginTop: 1,
        lineHeight: 20,
    },
    groupFooter: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
    },
    iconFooter: {
        marginLeft: 2,
        color: COLORS.colorTextGrey,
    },
    title: {
        fontSize: 15,
        fontWeight: "700",
        lineHeight: 21,
    },
    circle: {
        width: 3,
        height: 3,
        backgroundColor: COLORS.colorTextGrey,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 8,
    },
    textTiny: {
        fontSize: 11,
        color: COLORS.colorTextTiny,
        marginLeft: 3,
    },
    icon: {
        marginRight: 10,
        marginTop: 10,
    },
});

Category.propTypes = {};

export default Category;

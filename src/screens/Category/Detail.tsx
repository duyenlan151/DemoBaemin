import { useRoute } from "@react-navigation/native";
import React, { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Back from "@components/Back";
import COLORS from "@contants/theme";
import { randomImages } from "@mock/index";
import { ICategory } from "@models/category.model";

interface ParamTypes {
    category: ICategory
}

const Detail: FC = () => {
    const route = useRoute();
    const { category } = route?.params;
    // const category: ICategory =  route?.params?.category;

    return (
        <Back>
            <ScrollView style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.wrapperImage}>
                        <Image
                            style={styles.largeImage}
                            source={category?.imgUrl}
                            // source={
                            //     randomImages[
                            //         Math.floor(
                            //             Math.random() * randomImages.length
                            //         )
                            //     ]
                            // }
                            // source={{
                            //     uri: "https://i.vimeocdn.com/portrait/58832_300x300.jpg",
                            // }}
                        />
                    </View>
                    <View style={styles.wrapperBody}>
                        <Text style={styles.title}>{category?.title}</Text>
                        <Text style={styles.desc}>{category?.desc}</Text>
                        <View style={styles.menu}>
                            <Icon name="place" color={COLORS.blue} size={20} />
                            <Text style={styles.iconFooter}>
                                {category?.km ? category?.km + "km" : "0"}{" "}
                            </Text>
                        </View>
                        <View style={styles.menu}>
                            <Icon name="star" color={COLORS.yellow} size={20} />
                            <Text style={styles.iconFooter}>
                                {category?.star ? category?.star : "1"}
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </Back>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: "100%",
        display: "flex",
    },
    wrapperImage: {
        margin: 15,
        width: 150,
        height: 90,
        marginHorizontal: "auto",
        alignSelf: "center",
        overflow: 'hidden',
        justifyContent: 'center',
        position: 'relative',
        top: 0,
        zIndex: 10,
    },
    largeImage: {
        position: 'absolute',
        resizeMode: 'cover',
        top: '50%',
        left: '50%',
        transform: [
            { translateY: -45 },
            { translateX: -45 },
        ]
    },
    wrapperBody: {
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderColor: COLORS.colorBorder,
    },
    title: {
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: "bold",
        lineHeight: 22,
    },
    desc: {
        fontSize: 14,
        lineHeight: 22,
        marginBottom: 10,
    },
    menu: {
        paddingTop: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    iconFooter: {
        marginLeft: 6,
    },
});

export default Detail;
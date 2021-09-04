import { useNavigation } from "@react-navigation/native";
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Category from '../../components/Category';
import Layout from "../../components/Layout";
import COLORS from '../../contants/theme';
import {categories} from '../../mock';
import {categoryService} from '../../services/categry.service';

export default function ListCategory() {
  const navigation = useNavigation();
  const [dataCategories, setdataCategories] = React.useState(categories);

  React.useEffect(() => {
    fetchCateoryList();
    return () => {
      fetchCateoryList();
    };
  }, []);

  // function fetch list data
  const fetchCateoryList = async () => {
    let resCategory = await categoryService.getAll();
    // console.log("🚀 ~ file: ListCategory.js ~ line 21 ~ React.useEffect ~ resCategory", resCategory)
  };

  return (
    <Layout>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Restaurants near you</Text>
        <View>
          {dataCategories &&
            dataCategories.map(item => (
              <Category
                key={item.id}
                onPress={() =>
                    navigation.navigate("Detail", {
                        category: item,
                    })
                }
                category={item}
              />
            ))}
          {/* <FlatList
                scrollEnabled={false}
                data={categories}
                renderItem={({ item }) => (
                    <CategoryList
                        onPress={() =>
                            navigation.navigate("Detail", {
                                title: item.title,
                            })
                        }
                        category={item}
                    />
                )}
                keyExtractor={(category) => `${category.id}`}
            /> */}
        </View>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
  },
  title: {
    marginHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textTitle,
    letterSpacing: 0.1,
  },
});

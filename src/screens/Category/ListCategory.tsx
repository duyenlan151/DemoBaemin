import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, FC } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Category from '@components/Category';
import Layout from "@components/Layout";
import COLORS from '@contants/theme';
import {categories} from '@mock/index';
import { ICategory } from "@models/category.model";
import categoryService from '@services/category.service';

interface ListCategoryProps {}

const ListCategory: FC<ListCategoryProps> = () => {
  const navigation = useNavigation();
  const [dataCategories, setdataCategories] = useState<ICategory[]>(categories);
  
  useEffect(() => {
    fetchCateoryList();

    // unsub
    return () => {
    };
  }, []);

  // function fetch list data
  const fetchCateoryList = async () => {
    try{
      let resCategory = await categoryService.getAll();
      // console.log("🚀 ~ file: ListCategory.js ~ line 21 ~ React.useEffect ~ resCategory", resCategory)
    }catch(err){
      console.log('Error:', err);
    }
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
                    // navigation.navigate('Detail', {
                    //   screen: 'Feed',
                    //   params: { sort: 'latest' },
                    // })
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

export default ListCategory;
// import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { 
  Input, 
  NativeBaseProvider, 
  ScrollView,
  Image, 
  Flex, 
  Box, 
  Text,
  Heading, 
  Body,
  FlatList,
  Card,
  CardItem,
 } from "native-base";
import { TouchableOpacity } from "react-native";
import Categories from "../../components/categories";
import items from "../../dummy/furniture";
import ProductItem from "../../components/product-Item";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [Products, setProducts] = useState([]);
  // const navigation = useNavigation();

  const categoriesHandler = (categoryName) => {
    setActiveCategory(categoryName);
    const Product = getItems(categoryName);
    setProducts(Product);
  };

  const getItems = (activeCategory) => {
    const getItems = items.find(item => item.kategori === activeCategory);

    if (getItems) {
      return getItems.items; 
    } else {
      return null; 
    }
  }

  const renderItem = ({ item }) => {
    return <ProductItem item={item} />;
  };
  
  console.log(Products);


  return(
    <NativeBaseProvider>
      <ScrollView mx={14} mt={12} scrollIndicatorInsets={false}>
        <Flex direction="row" alignItems={"center"}>
        <Image size={"64px"} borderRadius={100} source={require('../../assets/brody.png')}
          alt="hitam" /> 
          <Box alignItems={"center"}>
            <Text marginLeft={5} fontSize={24}>Hi, Brody</Text>
          </Box>
        </Flex>
        <Input placeholder=" Search Product" width="100%" borderRadius="4" py="3" px="1" mt='24px' fontSize="14" />
        <TouchableOpacity>
          <Image height={150} width='100%' mt={30} source={require('../../assets/promo_poster.png')} alt="diskon" />
        </TouchableOpacity>
        <Heading mt={5}>Categories</Heading>
        <Categories onChange={categoriesHandler}/>

        <FlatList
          data={Products} 
          renderItem={ renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2} 
        />
      </ScrollView>
    </NativeBaseProvider>
  )
}
export default Home;
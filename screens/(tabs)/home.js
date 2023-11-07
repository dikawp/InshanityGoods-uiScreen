// import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import {
  Input,
  HStack,
  ScrollView,
  Image,
  Flex,
  Box,
  Text,
  Heading,
} from "native-base";
import { TouchableOpacity } from "react-native";
import Categories from "../../components/categories";
import items from "../../dummy/furniture";
import ProductItem from "../../components/product-Item";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [Products, setProducts] = useState([]);

  const categoriesHandler = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const getItems = (activeCategory) => {
    const getItems = items.find((item) => item.kategori === activeCategory);

    if (getItems) {
      return getItems.items;
    } else {
      return null;
    }
  };

  useEffect(() => {
    setProducts(getItems(activeCategory));
  });

  console.log(Products);

  return (
    <ScrollView mx={14} mt={12} showsVerticalScrollIndicator={false}>
      <Flex direction="row" alignItems={"center"}>
        <Image
          size={"64px"}
          borderRadius={100}
          source={require("../../assets/brody.png")}
          alt="hitam"
        />
        <Box alignItems={"center"}>
          <Text marginLeft={5} fontSize={24}>
            Hi, Brody
          </Text>
        </Box>
      </Flex>
      <Input
        placeholder=" Search Product"
        width="100%"
        borderRadius="4"
        py="3"
        px="1"
        mt="24px"
        fontSize="14"
      />
      <TouchableOpacity onPress={() => navigation.navigate("Discount")}>
        <Image
          height={150}
          width="100%"
          mt={30}
          source={require("../../assets/promo_poster.png")}
          alt="diskon"
        />
      </TouchableOpacity>
      <Heading mt={5}>Categories</Heading>
      <Categories onChange={categoriesHandler} />

      <HStack flexWrap={"wrap"} justifyContent={"space-between"}>
        {Products.map((item) => {
          return <ProductItem item={item} key={item.id} />;
        })}
      </HStack>
    </ScrollView>
  );
};
export default Home;

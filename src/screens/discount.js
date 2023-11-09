// import { useNavigation } from "@react-navigation/native";
// import { Heading, Center, NativeBaseProvider } from "native-base";

// const Discount = () => {
//   const navigation = useNavigation();

//   return(
//     <NativeBaseProvider>
//       <Center flex={1}>
//         <Heading>Discount</Heading>
//       </Center>
//     </NativeBaseProvider>
//   )
// }
// export default Discount;

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
  Center,
} from "native-base";
import { TouchableOpacity } from "react-native";
import items from "../dummy/furniture";
import ProductItem from "../components/product-Item";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const activeCategory = "All";
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const filteredItems = items
      .filter((item) => item.kategori === activeCategory)
      .flatMap((category) => category.items.slice(0, 4))
      .map((item) => ({
        ...item,
        harga: item.harga * 0.6,
      }));

    setProducts(filteredItems);
  }, [activeCategory]);

  console.log(Products);

  return (
    <ScrollView mx={14} showsVerticalScrollIndicator={false}>
      <Center mt={5}>
        <Heading>Discount Items</Heading>
      </Center>
      <TouchableOpacity>
        <Image
          height={150}
          width="100%"
          mt={30}
          source={require("../images/promo_poster.png")}
          alt="diskon"
        />
      </TouchableOpacity>

      <HStack mt={5} flexWrap={"wrap"} justifyContent={"space-between"}>
        {Products.map((item) => {
          return <ProductItem item={item} key={item.id} />;
        })}
      </HStack>
    </ScrollView>
  );
};
export default Home;

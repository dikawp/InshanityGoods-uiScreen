import React from "react";
import { VStack, Box, Text, View } from "native-base";

const ProductItem = ({ item }) => {
  return (
    <View borderWidth={1} width={'50%'}>
      <VStack space="4">
        <Box px="4" pt="4">
          <Text fontWeight={"bold"}>{item.nama}</Text>
          <Text>{item.deskripsi}</Text>
        </Box>
        <Box px="4" pb="4">
          <Text>Harga: {item.harga}</Text>
        </Box>
      </VStack>
    </View>
  );
};

export default ProductItem;

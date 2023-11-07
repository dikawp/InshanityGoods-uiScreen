import React from "react";
import { TouchableOpacity } from "react-native";
import { Box, Text, Image, HStack, VStack, Heading } from "native-base";

const ProductItem = ({ item }) => {
  return (
    <TouchableOpacity>
      <Box height={235} width={170} mx={1} m={5} p={3} backgroundColor={'#FEFFC1'}>
        <Image
          source={{uri: item.image}}
          height="60%"
          alt="null"
        />
        <HStack
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <VStack space={1} mt={2}>
            <Heading size="xs">{item.nama}</Heading>
            <Text fontSize="sm">{item.kategori}</Text>
            <Heading mt={2} size={'sm'}>IDR : {item.harga}</Heading>
          </VStack>
        </HStack>
    </Box>
  </TouchableOpacity>
  );
};

export default ProductItem;

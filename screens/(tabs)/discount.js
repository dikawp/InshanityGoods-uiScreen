import { useNavigation } from "@react-navigation/native";
import { Heading, Center, NativeBaseProvider } from "native-base";


const Discount = () => {
  const navigation = useNavigation();

  return(
    <NativeBaseProvider>
      <Center flex={1}>
        <Heading>Discount</Heading>
      </Center>
    </NativeBaseProvider>
  )
}
export default Discount;
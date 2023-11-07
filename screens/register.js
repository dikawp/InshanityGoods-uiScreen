import {
  Button,
  NativeBaseProvider,
  View,
  Text,
  VStack,
  FormControl,
  Input,
  Center,
} from "native-base";
import { TouchableOpacity } from "react-native";

function Register({ navigation }) {
  return (
    <NativeBaseProvider>
      <View mx={14} my={20}>
        <Text fontSize={"32px"}>Sign Up</Text>
        <Text fontSize={"18px"}>Create Your Account</Text>
        <VStack space={8} mt={20}>
          <FormControl>
            <Input placeholder="Username" />
          </FormControl>
          <FormControl>
            <Input placeholder="Email" />
          </FormControl>
          <FormControl>
            <Input placeholder="Password" type="password" />
          </FormControl>
          <FormControl>
            <Input placeholder="Comfirm Password" type="password" />
          </FormControl>
          <Button backgroundColor={'#FFE60D'} onPress={() => navigation.navigate("Tabs")} mt={1} style={{ color: 'blue' }}>Sign Up</Button>
        </VStack>
        <Center mt={3} flexDirection={'row'}>
          <Text fontSize={'14px'}>
            Already have Account? 
          </Text>
          <TouchableOpacity>
            <Text fontSize={'14px'} color={'blue.400'} ml={2}>
              Sign In
            </Text>
          </TouchableOpacity>
        </Center>
      </View>
    </NativeBaseProvider>
  );
}

export default Register;

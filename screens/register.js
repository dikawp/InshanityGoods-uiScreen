import { 
    Button,
    NativeBaseProvider,
   } from "native-base"; 


function Register({navigation}) {
    return (
      <NativeBaseProvider>
        <Button title="Pantek" onPress={() => navigation.navigate("Tabs")} />
      </NativeBaseProvider>
    );
  }

  export default Register;
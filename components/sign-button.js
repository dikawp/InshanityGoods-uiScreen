import { Box, Center, Text, TouchableOpacity } from "native-base";

const SignButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.75} >
      <Box>
        <Center>
          <Text>Sign Up</Text>
        </Center>
      </Box>
    </TouchableOpacity>
  );
};

export default SignButton;

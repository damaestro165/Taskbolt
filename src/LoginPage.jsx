import React from 'react';
import FormHeader from './component/FormHeader';

import {
  Center,
  FormControl,
  FormLabel,
  Image,
  Stack,
  VStack,
  Input,
  Button,
  Text,
  Link,
  Box,
} from '@chakra-ui/react';
import AuthImage from './assets/login.png';
import { PasswordField } from './component/PasswordField';

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen relative w-full'>
      <FormHeader />
      <div className='bg-[#5720DD] md:h-screen h-1/3 x md:w-2/6 w-full'>
        <Center className='md:h-full md:ml-[6rem] pt-5 overflow-x-hidden mt-20 md:mt-0 xl:w-[50rem]  xl:ml-[8rem]'>
          <Image
            src={AuthImage}
            className=' w-[20rem] md:w-[55rem] xl:w-[55rem] md:h-[24rem] xl:h-[31rem] object-cover rounded-md  '
          />
        </Center>
      </div>
      <div className='md:w-4/6 bg-white h-2/3 md:h-screen w-full '>
        <Center className='h-full -mt-8 flex-col md:mt-0 lg:mt-4 xl:mt-0 lg:px-[5rem] xl:px-[8rem]  xl:gap-5 w-full'>
          <Link
            color='#5720DD'
            alignSelf='flex-end'
            mr={5}
            visibility={{ base: 'vissible', sm: 'hidden' }}
          >
            <Text as='u'> Need Any Help?</Text>
          </Link>
          <Text className=' self-start px-10 text-3xl font-semibold'>
            Login
          </Text>
          <VStack as='form' spacing={8} w='100%' p={{ base: 5, sm: 5 }}>
            <VStack spacing='2rem' w='100%'>
              <FormControl variant='floating' id='last-name'>
                <Input
                  placeholder=' '
                  type='email'
                  height='56px'
                  pt={4}
                  px={2.5}
                  pb={2.5}
                />
                <FormLabel className='text-gray-500 '>Email Address</FormLabel>
              </FormControl>
              <PasswordField />
            </VStack>
            <Link color='#5720DD' alignSelf='flex-start' mr={5}>
              <Text as='u'> Forget Password?</Text>
            </Link>
            <VStack w='100%'>
              <Button
                bg='#c8c8c8'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
              >
                Log In
              </Button>
            </VStack>
          </VStack>
          <Box className='flex'>
            <Text>Don't have an account yet?</Text>
            <Link color='#5720DD'>
              <Text as='u'> Register</Text>
            </Link>
          </Box>
        </Center>
      </div>
    </div>
  );
};

export default Login;
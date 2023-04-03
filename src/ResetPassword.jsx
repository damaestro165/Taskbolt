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
import SignupImage from './assets/signup.png';
import { PasswordField } from './component/PasswordField';
const ResetPassword = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen relative w-full'>
      <FormHeader />
      <div className='bg-[#5720DD] md:h-screen h-1/3 x md:w-2/6 w-full'>
        <Center className='md:h-full md:ml-[6rem] pt-5 overflow-x-hidden mt-20 md:mt-0'>
          <Image
            src={SignupImage}
            className=' w-[20rem] md:w-[55rem] md:h-[24rem] xl:h-[31rem] object-cover rounded-md'
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
          <Box className='flex items-center justify-center flex-col mt-5 md:mt-0'>
            <Text className=' text-3xl font-semibold'>Reset Password</Text>
            <Text>Set a secure password.</Text>
          </Box>
          <VStack as='form' spacing={8} w='100%' p={{ base: 5, sm: 5 }}>
            <VStack spacing='1rem' w='100%'>
              <PasswordField label='Create New Password' />
              <PasswordField label='Re-enter Password' />
            </VStack>

            <VStack w='100%'>
              <Button
                bg='#c8c8c8'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
              >
                Enter To Confirm
              </Button>
            </VStack>
          </VStack>
        </Center>
      </div>
    </div>
  );
};

export default ResetPassword;

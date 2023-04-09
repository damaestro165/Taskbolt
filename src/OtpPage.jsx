import React, { useEffect, useState } from 'react';
import FormHeader from './component/FormHeader';

import {
  Center,
  Image,
  VStack,
  PinInput,
  PinInputField,
  Button,
  Text,
  Link,
  Box,
  HStack,
  createStandaloneToast,
} from '@chakra-ui/react';
import AuthImage from './assets/otpimage.png';
import axios from 'axios';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const Id = JSON.parse(localStorage.getItem('Id'));

  const { ToastContainer, toast } = createStandaloneToast();

  useEffect(() => {
    axios
      .post(
        'https://60d0-105-112-124-76.eu.ngrok.io/api/v1/users/registerotp',
        {
          id: Id,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      )
      .then(function (response) {
        toast({
          title: 'One-Time Password sent successfully!',
          description: 'Check your email',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'bottom',
        });
      })
      .catch(function (error) {});
  }, [Id]);

  const handleOtp = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/verifyotp',
        {
          id: Id,
          otp: otp,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      )
      .then(function (response) {
        toast({
          title: 'User verification successfully!',
          description: `welcome ${response.data.data.firstname} `,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'bottom',
        });
      })
      .catch(function (error) {
        if (error.response.data.msg === 'Wrong OTP!') {
          toast({
            title: 'Wrong OTP!',
            description: 'Input the correct Otp and retry',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
        }
        if (error.response.data.msg === 'OTP expired!') {
          toast({
            title: 'OTP expired!',
            description: 'Retry',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
        }
      });
  };

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
          <Box className='flex items-center justify-center flex-col mt-5 md:mt-0 gap-5'>
            <Text className=' text-3xl font-semibold'>Enter OTP</Text>
            <Text className=' text-center px-16'>
              Enter the one time code that was sent to your email address for
              account confirmation.
            </Text>
          </Box>
          <VStack as='form' spacing={8} w='100%' p={{ base: 5, sm: 5 }}>
            <HStack
              spacing='2rem'
              w='100%'
              className='flex justify-center items-center text-[#5720DD] '
            >
              <PinInput
                size='lg'
                focusBorderColor='#5720DD'
                placeholder=' '
                onChange={(value) => setOtp(value)}
                type='number'
                otp
              >
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>

            <VStack w='100%'>
              <Text>Resend code in 00 : 59</Text>
              <Button
                bg='#c8c8c8'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
                onClick={handleOtp}
              >
                Verify Account
              </Button>
            </VStack>
          </VStack>
        </Center>
      </div>
    </div>
  );
};

export default OtpPage;

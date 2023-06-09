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
import CountdownTimer from './component/Countdown';
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const Id = JSON.parse(localStorage.getItem('Id'));
  const navigate = useNavigate();

  const { ToastContainer, toast } = createStandaloneToast();

  useEffect(() => {
    axios
      .post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/registerotp',
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

  const resendOtp = () => {
    axios
      .post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/registerotp',
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
  };

  const handleOtp = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://project-sprint-staging.up.railway.app/api/v1/users/verifyotp',
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
          description: `Login `,
          status: 'success',
          duration: 1000,
          isClosable: true,
          position: 'bottom',
        });
        navigate('/login');
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
        if (error.response.data.msg === 'User already verified!') {
          toast({
            title: 'User already verified!',
            description: 'Login',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'bottom',
          });
          navigate('/login');
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
        <Center className='h-full flex-col  -mt-10 md:mt-0 lg:mt-4 xl:mt-0 lg:px-[5rem] xl:px-[8rem]  xl:gap-5 w-full'>
          <Link
            color='#5720DD'
            alignSelf='flex-end'
            mr={5}
            my={5}
            mx={5}
            visibility={{ base: 'vissible', sm: 'hidden' }}
          >
            <Text as='u' className='text-xs'>
              Need Any Help?
            </Text>
          </Link>
          <Box className='flex items-center justify-center flex-col mt-5 md:mt-0 gap-5'>
            <Text className='text-xl md:text-3xl font-semibold'>Enter OTP</Text>
            <Text className=' text-center px-5 md:px-16'>
              Enter the one time code that was sent to your email address for
              account confirmation.
            </Text>
          </Box>
          <VStack
            as='form'
            spacing={8}
            w='100%'
            p={{ base: 5, sm: 5 }}
            onSubmit={handleOtp}
          >
            <HStack
              spacing={{ base: '.5rem', md: '2rem' }}
              w='100%'
              className='flex justify-center items-center text-[#5720DD] '
            >
              <PinInput
                size={{ base: 'md', md: 'lg' }}
                focusBorderColor='#5720DD'
                placeholder=' '
                onChange={(value) => setOtp(value)}
                type='number'
                otp
              >
                <PinInputField required />
                <PinInputField required />
                <PinInputField required />
                <PinInputField required />
                <PinInputField required />
              </PinInput>
            </HStack>

            <VStack w='100%'>
              <HStack>
                <Text>Resend code in</Text>
                <CountdownTimer resendOtp={resendOtp} />
              </HStack>

              <Button
                bg='#5720DD'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
                onSubmit={handleOtp}
                type='submit'
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

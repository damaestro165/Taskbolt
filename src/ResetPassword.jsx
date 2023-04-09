import React, { useEffect, useRef, useState } from 'react';
import FormHeader from './component/FormHeader';

import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import {
  Center,
  Image,
  VStack,
  Button,
  Text,
  Link,
  Box,
  createStandaloneToast,
} from '@chakra-ui/react';
import AuthImage from './assets/resetpass.png';
import { PasswordField } from './component/PasswordField';
const ResetPassword = () => {
  const passwordRef = useRef('');
  const reEnterPasswordRef = useRef('');
  const { toast } = createStandaloneToast();
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const newToken = searchParams.get('token');
    setToken(newToken);
    // use the token for resetting the password
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = passwordRef.current.value;
    const reEnteredPassword = reEnterPasswordRef.current.value;

    if (password !== reEnteredPassword) {
      toast({
        title: 'Password does not match',
        description: 'make sure the password matches',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'bottom',
      });
    }

    try {
      const response = await axios.post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/resetpassword',
        {
          password: password,
          token: token,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      );

      // localStorage.setItem('Id', JSON.stringify(response.data.id));
      navigate('/login');
      if (response.data.msg === 'Password reset successful!') {
        toast({
          title: 'Password reset successful!',
          description: 'Login',
          status: 'success',
          duration: 9000,
          isClosable: true,
          position: 'bottom',
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response?.data.msg === 'Signature has expired') {
        toast({
          title: 'Season Expired',
          description: 'Resend Link',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'bottom',
        });
        navigate('/forgetpass');
      }
      if (error.response?.data.msg === 'Token Expired!') {
        toast({
          title: 'Token Expired!',
          description: 'Resend Link',
          status: 'error',
          duration: 9000,
          isClosable: true,
          position: 'bottom',
        });
      }
    }
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
          <Box className='flex items-center justify-center flex-col mt-5 md:mt-0'>
            <Text className=' text-3xl font-semibold'>Reset Password</Text>
            <Text>Set a secure password.</Text>
          </Box>
          <VStack
            as='form'
            spacing={8}
            w='100%'
            p={{ base: 5, sm: 5 }}
            onSubmit={handleSubmit}
          >
            <VStack spacing='1rem' w='100%'>
              <PasswordField
                label='Create New Password'
                ref={passwordRef}
                required
              />
              <PasswordField
                label='Re-enter Password'
                ref={reEnterPasswordRef}
                required
              />
            </VStack>

            <VStack w='100%'>
              <Button
                bg='#c8c8c8'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
                type='submit'
                onSubmit={handleSubmit}
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

import React, { useRef } from 'react';
import FormHeader from './component/FormHeader';
import axios from 'axios';
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
  createStandaloneToast,
} from '@chakra-ui/react';
import AuthImage from './assets/login.png';
import { PasswordField } from './component/PasswordField';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const passWordref = useRef('');
  const emailRef = useRef('');
  const navigate = useNavigate();
  const { ToastContainer, toast } = createStandaloneToast();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passWordref.current.value;

    axios
      .post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/login',
        {
          email: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        }
      )
      .then(function (response) {
        localStorage.setItem('User', JSON.stringify(response?.data?.data));
        if (response.data.msg === 'Success!') {
          toast({
            title: 'Success!',
            description: `welcome ${response?.data?.data?.firstname} `,
            status: 'success',
            duration: 9000,
            isClosable: true,
            position: 'bottom',
          });
        }
      })
      .catch(function (error) {
        if (error?.response?.data?.msg === 'User not verified!') {
          localStorage.setItem(
            'Id',
            JSON.stringify(error?.response?.data?.data?.id)
          );
          navigate('/otp');
        }
        if (error.response.data.msg === 'Incorrect Password!') {
          toast({
            title: 'Incorrect Password!',
            description: 'Input the correct password ',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'bottom',
          });
        }
        if (error.response.data.msg === 'Email does not exist!') {
          toast({
            title: 'Email does not exist!',
            description: 'Register Instead ',
            status: 'error',
            duration: 9000,
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
        <Center className='h-full -mt-10  flex-col md:mt-0 lg:mt-4 xl:mt-0 lg:px-[5rem] xl:px-[8rem]  xl:gap-5 w-full'>
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
          <Text className=' self-start mb-2 md:mb-0 px-10 text-xl md:text-3xl font-semibold'>
            Login
          </Text>
          <VStack as='form' spacing={8} w='100%' p={{ base: 5, sm: 5 }}>
            <VStack spacing='2rem' w='100%'>
              <FormControl variant='floating' id='email'>
                <Input
                  placeholder=' '
                  type='email'
                  height='56px'
                  pt={4}
                  px={2.5}
                  pb={2.5}
                  ref={emailRef}
                  required
                />
                <FormLabel className='text-gray-500 '>Email Address</FormLabel>
              </FormControl>
              <PasswordField ref={passWordref} />
            </VStack>
            <Link
              color='#5720DD'
              alignSelf='flex-start'
              mr={5}
              href='/forgetpass'
            >
              <Text as='u'> Forget Password?</Text>
            </Link>
            <VStack w='100%'>
              <Button
                bg='#5720DD'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
                onClick={handleLogin}
              >
                Log In
              </Button>
            </VStack>
          </VStack>
          <Box className='flex'>
            <Text>Don't have an account yet?</Text>
            <Link color='#5720DD' href='/signup'>
              <Text as='u'> Register</Text>
            </Link>
          </Box>
        </Center>
      </div>
    </div>
  );
};

export default Login;

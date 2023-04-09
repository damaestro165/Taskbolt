import React, { useRef } from 'react';
import FormHeader from './component/FormHeader';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
  createStandaloneToast,
  Box,
} from '@chakra-ui/react';
import SignupImage from './assets/signup.png';
import { PasswordField } from './component/PasswordField';

const Signup = () => {
  const { ToastContainer, toast } = createStandaloneToast();
  const passWordref = useRef('');
  const emailRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passWordref.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    axios
      .post(
        'https://taskbolt-user-staging.up.railway.app/api/v1/users/register',
        {
          firstname: firstName,
          lastname: lastName,
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
        localStorage.setItem('Id', JSON.stringify(response.data.id));
        navigate('/otp');
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.data.detail[0].msg === 'email already exists!') {
          toast({
            title: 'Email Already Exists',
            description: 'Login instead',
            status: 'error',
            duration: 9000,
            isClosable: true,
            position: 'bottom',
          });
        }
        if (
          error.response.data.detail[0].msg ===
          'Password not secure! Must contain minimum of 6 characters, an uppercase, a lowercase, a number, and a symbol'
        ) {
          toast({
            title: 'Weak Password',
            description:
              'Password not secure! Must contain minimum of 6 characters, an uppercase, a lowercase, a number, and a symbol',
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
            src={SignupImage}
            className=' w-[20rem] md:w-[55rem] xl:w-[55rem] md:h-[24rem] xl:h-[31rem] object-cover rounded-md  '
          />
        </Center>
      </div>
      <div className='md:w-4/6 bg-white h-2/3 md:h-screen w-full '>
        <Center className='h-full flex-col mt-[4rem] md:mt-0 lg:mt-4 xl:mt-0 lg:px-[5rem] xl:px-[8rem]  xl:gap-5 w-full'>
          <Link
            color='#5720DD'
            alignSelf='flex-end'
            mr={5}
            mx={5}
            visibility={{ base: 'visible', sm: 'hidden' }}
          >
            <Text as='u'> Need Any Help?</Text>
          </Link>
          <Text className=' self-start px-10 text-3xl font-semibold'>
            Register Account
          </Text>
          <VStack
            as='form'
            spacing={8}
            w='100%'
            p={{ base: 5, sm: 10 }}
            onSubmit={handleSignup}
          >
            <VStack spacing='2rem' w='100%'>
              <Stack
                w='100%'
                spacing={{ base: 8, md: 3 }}
                direction={{ base: 'column', md: 'row' }}
              >
                <FormControl variant='floating' id='first-name'>
                  <Input
                    placeholder=' '
                    type='text'
                    height='56px'
                    ref={firstNameRef}
                    required
                  />
                  <FormLabel className='text-gray-500 '>First name</FormLabel>
                </FormControl>
                <FormControl variant='floating' id='last-name'>
                  <Input
                    placeholder=' '
                    height='56px'
                    type='text'
                    ref={lastNameRef}
                    required
                  />
                  <FormLabel className='text-gray-500'>Last name</FormLabel>
                </FormControl>
              </Stack>
              <FormControl variant='floating' id='last-name'>
                <Input
                  placeholder=' '
                  type='email'
                  height='56px'
                  ref={emailRef}
                  pt={4}
                  px={2.5}
                  pb={2.5}
                  required
                />
                <FormLabel className='text-gray-500'>Email Address</FormLabel>
              </FormControl>
              <PasswordField ref={passWordref} />
            </VStack>
            <VStack w='100%'>
              <Button
                bg='#c8c8c8'
                color='white'
                rounded='md'
                w={{ base: '100%' }}
                height='56px'
                onSubmit={handleSignup}
                type='submit'
              >
                Register Account
              </Button>
            </VStack>
            <Box className='flex gap-1'>
              <Text>Already have an account? </Text>

              <Link color='#5720DD' href='/login'>
                <Text as='u'> LogIn</Text>
              </Link>
            </Box>
          </VStack>
        </Center>
      </div>
    </div>
  );
};

export default Signup;

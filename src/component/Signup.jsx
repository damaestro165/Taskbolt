import React from 'react';
import FormHeader from './FormHeader';
import { Center, Image } from '@chakra-ui/react';
import SignupImage from '../assets/signup.png';

const Signup = () => {
  return (
    <div className='flex flex-col md:flex-row h-screen relative'>
      <FormHeader />
      <div className='bg-[#5720DD] md:h-screen h-1/3  md:w-2/6  w-full'>
        <Center className='h-full ml-[6rem]'>
          <Image
            src={SignupImage}
            className='w-[786px] h-[500px] object-cover rounded-md'
          />
        </Center>
      </div>
      <div className='md:w-4/6 bg-white h-2/3 md:h-screen'>
        <Center className='h-full'>Good</Center>
      </div>
    </div>
  );
};

export default Signup;

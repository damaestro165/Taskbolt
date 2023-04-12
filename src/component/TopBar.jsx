import { Avatar, Box, Button, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import Logo from '../assets/logo.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import MenuComp from './Menu';

import NotificationIcon from './BellIcon';

const TopBar = () => {
  return (
    <Box className='bg-[#5720DD] w-full p-5 px-10 flex justify-between'>
      <HStack spacing='2rem'>
        <Image src={Logo} alt='logo' w='8rem' />
        <Button
          rightIcon={<AiOutlinePlus />}
          bg='white'
          variant='solid'
          color='brand.100'
          fontSize='xl'
          py='1.5rem'
        >
          Create Project
        </Button>
        <MenuComp />
      </HStack>
      <HStack spacing='2rem'>
        <NotificationIcon boxSize={6} />
        <Avatar name='T K' src='' />
      </HStack>
    </Box>
  );
};

export default TopBar;

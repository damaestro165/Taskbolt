import {
  Avatar,
  Box,
  Button,
  HStack,
  Image,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  IconButton,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import Logo from '../assets/logo.svg';
import { AiOutlinePlus } from 'react-icons/ai';
import MenuComp from './Menu';

import NotificationIcon from '../assets/Icons/BellIcon';
import { CiSearch } from 'react-icons/ci';

import { RiCommandFill } from 'react-icons/ri';
import CreateProjectModal from './CreateProjectModal';

const TopBar = () => {
  return (
    <Box className='bg-[#5720DD] w-full p-5 px-10 flex justify-between'>
      <HStack spacing='2rem'>
        <Image src={Logo} alt='logo' w='8rem' />
        <CreateProjectModal />

        <MenuComp title='Quick Access' color='white' />
      </HStack>
      <HStack spacing='2rem'>
        <InputGroup size='lg' py='-2.5rem'>
          <InputLeftElement
            children={<CiSearch fontSize='1.5rem' />}
            color='white'
          />
          <Input
            type='search'
            placeholder='Search or type a command'
            width='26rem'
            border='none'
            color='white'
            bg='#794de4'
            _placeholder={{ color: 'inherit' }}
          />
          <InputRightElement width='5rem'>
            <Button
              fontSize='0.8rem'
              leftIcon={<RiCommandFill fontSize='1rem' />}
              h='1.5rem'
            >
              F
            </Button>
          </InputRightElement>
        </InputGroup>
        <NotificationIcon boxSize={6} />
        <Avatar name='T K' src='' border='1px' />
      </HStack>
    </Box>
  );
};

export default TopBar;

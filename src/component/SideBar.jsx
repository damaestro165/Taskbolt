import {
  Flex,
  useDisclosure,
  Icon,
  Collapse,
  Box,
  Text,
  Divider,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '../assets/Icons/HomeIcon';
import { HiOutlineChevronDown } from 'react-icons/hi';
import TemplateIcon from '../assets/Icons/TemplateIcon';
import ProjectIcon from '../assets/Icons/ProjectIcon';
import StaredIcon from '../assets/Icons/StaredIcon';
import HighlightIcon from '../assets/Icons/HighlightIcon';
import SetingdIcon from '../assets/Icons/SetingdIcon';
import ArchivedIcon from '../assets/Icons/ArchivedIcon';
import ViewIcon from '../assets/Icons/ViewIcon';

const SideBar = () => {
  const integrations = useDisclosure();
  return (
    <div className='w-1/6  '>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        aria-label='Main Navigation'
        bg='#f5f5f5'
        height='100%'
      >
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <HomeIcon boxSize={6} /> Home
          </Box>
          <HiOutlineChevronDown fontSize='1.5rem' />
        </NavLink>
        <Divider />
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <TemplateIcon boxSize={6} /> Template
          </Box>
        </NavLink>
        <Divider />
        <NavLink
          className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'
          onClick={integrations.onToggle}
        >
          <Box className=' gap-4 flex'>
            <ProjectIcon boxSize={6} /> My Project
          </Box>
          <Icon
            as={HiOutlineChevronDown}
            ml='auto'
            transform={integrations.isOpen && 'rotate(180deg)'}
            fontSize='1.5rem'
          />
        </NavLink>

        <Collapse in={integrations.isOpen}>
          <Box className='flex flex-col justify-center items-center gap-8 bg-white text-[1rem] py-4 px-10'>
            <NavLink className='flex items-center text-[1rem] justify-between w-full px-6 '>
              <ProjectIcon boxSize={6} />
              <Text className='w-3/4'> Sections</Text>
            </NavLink>
            <NavLink className='flex items-center text-[1rem] justify-between w-full px-6'>
              <StaredIcon boxSize={6} />
              <Text className='w-3/4'> Stared</Text>
            </NavLink>
            <NavLink className='flex items-center text-[1rem] justify-between w-full px-6'>
              <ArchivedIcon boxSize={6} />
              <Text className='w-3/4'> Archived</Text>
            </NavLink>
            <NavLink className='flex items-center text-[1rem] justify-between w-full px-6'>
              <ViewIcon boxSize={6} />
              <Text className='w-3/4'> View Mode</Text>
            </NavLink>
            <NavLink className='flex items-center text-[1rem] justify-between w-full px-6'>
              <SetingdIcon boxSize={6} />
              <Text className='w-3/4'> Settings</Text>
            </NavLink>
          </Box>
        </Collapse>
        <Divider />
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <HighlightIcon boxSize={6} /> Highlights
          </Box>
        </NavLink>
        <Divider />
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <SetingdIcon boxSize={6} /> Settings
          </Box>
        </NavLink>
        <Divider />
        <div className='h-[15rem]'></div>
      </Flex>
    </div>
  );
};

export default SideBar;

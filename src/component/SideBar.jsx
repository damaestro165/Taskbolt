import {
  Flex,
  useDisclosure,
  Icon,
  Collapse,
  Box,
  Text,
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
    <div className='w-1/6 '>
      <Flex
        direction='column'
        as='nav'
        fontSize='sm'
        aria-label='Main Navigation'
        height='55rem'
      >
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <HomeIcon boxSize={6} /> Home
          </Box>
          <HiOutlineChevronDown fontSize='1.5rem' />
        </NavLink>
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <TemplateIcon boxSize={6} /> Template
          </Box>
        </NavLink>
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
          <Box className='flex flex-col justify-center items-center gap-6 bg-white text-[1rem] p-4'>
            <NavLink className=' flex items-center justify-center'>
              <ProjectIcon boxSize={6} />
              <Text className='w-3/4'> Sections</Text>
            </NavLink>
            <NavLink className='flex items-center justify-center'>
              <StaredIcon boxSize={6} />
              <Text className='w-3/4'> Stared</Text>
            </NavLink>
            <NavLink>
              <Box className=' gap-4 flex items-center justify-center'>
                <ArchivedIcon boxSize={6} /> Archived
              </Box>
            </NavLink>
            <NavLink>
              <Box className=' gap-4 flex items-center justify-center'>
                <ViewIcon boxSize={6} /> View Mode
              </Box>
            </NavLink>
            <NavLink>
              <Box className=' gap-4 flex items-center justify-center w-full'>
                <SetingdIcon boxSize={6} /> Settings
              </Box>
            </NavLink>
          </Box>
        </Collapse>
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <HighlightIcon boxSize={6} /> Highlights
          </Box>
        </NavLink>
        <NavLink className='py-5 px-6  flex items-center justify-between text-[1rem]  bg-white'>
          <Box className=' gap-4 flex'>
            <SetingdIcon boxSize={6} /> Settings
          </Box>
        </NavLink>
      </Flex>
    </div>
  );
};

export default SideBar;

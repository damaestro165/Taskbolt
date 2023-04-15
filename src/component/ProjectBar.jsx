import { Box, Center, Divider, IconButton, Text } from '@chakra-ui/react';
import React from 'react';
import StaredIcon from '../assets/Icons/StaredIcon';
import { HiChevronDown } from 'react-icons/hi';
import ChevondownIcon from '../assets/Icons/ChevondownIcon';

const ProjectBar = () => {
  return (
    <Box className='flex p-6'>
      <Box className=' flex items-center gap-5'>
        <Text className=' text-xl font-semibold'>Team Microsaas</Text>
        <StaredIcon boxSize={6} />
        <IconButton bg='#e6e0f3' icon={<ChevondownIcon boxSize='1.5rem' />} />
        <Center height='2rem'>
          <Divider
            orientation='vertical'
            borderWidth='.15rem'
            variant='solid'
          />
        </Center>
      </Box>
    </Box>
  );
};

export default ProjectBar;

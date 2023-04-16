import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

const SectionArea = () => {
  return (
    <Box className='bg-white w-full h-full flex gap-5 p-6 '>
      <Box
        as={Button}
        bg='#F5F5F5'
        color='brand.100'
        rightIcon={<AiOutlinePlus />}
        variant='solid'
        fontSize='md'
        py='1.5rem'
        border='1px'
        borderColor='#DCDCDC'
        fontWeight='light'
        width='19.75rem'
      >
        Add New Section
      </Box>
    </Box>
  );
};

export default SectionArea;

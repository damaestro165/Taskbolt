import { Box, Icon, IconButton, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

const FormHeader = () => {
  return (
    <Box className='absolute w-screen flex p-5 md:p-8  items-center flex-row-reverse md:flex-row justify-between md:justify-normal'>
      <Text className='text-white md:w-2/6 text-xl md:text-2xl font-bold xl:ml-5'>
        TASKBOLT
      </Text>
      <Box className='md:flex justify-between w-4/6 px-3  hidden'>
        <Link color='#5720DD' ml='1.5rem'>
          <Text as='u'> Need Any Help?</Text>
        </Link>
        <Icon as={IoMdClose} fontSize='2xl' color='#5720DD' />
      </Box>
      <IconButton
        aria-label='back navigation'
        icon={<BsArrowLeft />}
        fontSize='1.5rem'
        borderRadius='0.5rem'
        visibility={{ base: 'block', sm: 'hidden' }}
      />
    </Box>
  );
};

export default FormHeader;

import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';

const FormHeader = () => {
  return (
    <Box className='absolute w-screen flex p-10 items-center '>
      <Text className='text-white w-2/6 text-2xl font-bold'>TASKBOLT</Text>
      <Box className='flex justify-between w-4/6 px-3 '>
        <Link color='blue.300'>
          <Text as='u'> Need Any Help?</Text>
        </Link>
        <Text>X</Text>
      </Box>
    </Box>
  );
};

export default FormHeader;

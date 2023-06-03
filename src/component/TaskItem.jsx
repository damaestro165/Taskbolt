import { HStack, Icon, Text, Box, Spacer, Divider } from '@chakra-ui/react';
import React from 'react';
import MoreIcon from '../assets/Icons/MoreIcon';
import CalenderIcon from '../assets/Icons/CalenderIcon';

const TaskItem = () => {
  return (
    <Box shadow='md'>
      <Box className='px-4 py-2 flex flex-col justify-between gap-12'>
        <HStack>
          <Text>Project Research</Text>
          <Spacer />
          <Icon as={MoreIcon} transform='rotate(90deg)' />
        </HStack>
        <HStack>
          <Box bg='#F5F5F5' className='flex p-2 gap-2 items-center rounded-md'>
            <Icon as={CalenderIcon} />
            <Text>07 Mch</Text>
          </Box>
          <Spacer />
        </HStack>
      </Box>
      <Divider borderWidth='.1rem' />
      <HStack p={2}>
        <Text>gdjd</Text>
      </HStack>
    </Box>
  );
};

export default TaskItem;
2;

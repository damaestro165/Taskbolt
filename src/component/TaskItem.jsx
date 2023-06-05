import {
  HStack,
  Icon,
  Text,
  Box,
  Spacer,
  Divider,
  Avatar,
  AvatarGroup,
  Progress,
} from '@chakra-ui/react';
import React from 'react';
import MoreIcon from '../assets/Icons/MoreIcon';
import CalenderIcon from '../assets/Icons/CalenderIcon';

const TaskItem = () => {
  return (
    <Box shadow='md'>
      <Box className='px-4 py-2 flex flex-col justify-between gap-5'>
        <HStack>
          <Text>Project Research</Text>
          <Spacer />
          <Icon as={MoreIcon} transform='rotate(90deg)' />
        </HStack>
        <Text color='#767676'>
          Make research on the project we are about to start...
        </Text>
        <HStack>
          <Box bg='#F5F5F5' className='flex p-2 gap-2 items-center rounded-md'>
            <Icon as={CalenderIcon} />
            <Text fontSize='xs' fontWeight='bold'>
              07 Mch
            </Text>
          </Box>
          <Spacer />
          <AvatarGroup size='sm' max={2}>
            <Avatar name='Ryan Florence' />
            <Avatar name='Segun Adebayo' />
            <Avatar name='Kent Dodds' />
            <Avatar name='Prosper Otemuyiwa' />
          </AvatarGroup>
        </HStack>
      </Box>
      <Divider borderWidth='.1rem' />
      <HStack p={6}>
        <Progress
          value={20}
          size='sm'
          colorScheme='orange'
          width='8rem'
          borderRadius={5}
        />
        <Text fontSize='xs' fontWeight='bold'>
          Craududdu
        </Text>
      </HStack>
    </Box>
  );
};

export default TaskItem;
2;

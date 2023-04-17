import {
  Box,
  Button,
  Circle,
  Divider,
  HStack,
  Spacer,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import CreateIcon from '../assets/Icons/CreateIcon';
import FourdotIcon from '../assets/Icons/FourdotIcon';
import { AiOutlinePlus } from 'react-icons/ai';

const TaskCard = () => {
  return (
    <>
      <Box className=' w-[19.75rem] rounded-lg p-4 border-[.07rem] h-fit flex flex-col gap-4 '>
        <HStack spacing={5}>
          <Text fontWeight='extrabold'> To do task</Text>
          <Circle size='2rem' bg='#DCDCDC' fontWeight='extrabold'>
            0
          </Circle>
          <Spacer />
          <CreateIcon boxSize={6} />
          <FourdotIcon boxSize={6} />
        </HStack>
        <Divider borderWidth='.1rem' />
        <Box
          as={Button}
          bg='#F5F5F5'
          justifyContent='left'
          leftIcon={<AiOutlinePlus />}
          variant='solid'
          fontSize='md'
          py='1rem'
          width='full'
        >
          Add task
        </Box>
      </Box>
    </>
  );
};

export default TaskCard;

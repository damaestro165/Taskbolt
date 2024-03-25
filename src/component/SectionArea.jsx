import { Box, Button } from '@chakra-ui/react';
import React from 'react';

import TaskCard from './TaskCard';
import AddTask from './AddTask';

const SectionArea = () => {
  return (
    <Box className='bg-white w-full h-full flex gap-5 p-6 '>
      <TaskCard />
      <AddTask/>
    </Box>
  );
};

export default SectionArea;

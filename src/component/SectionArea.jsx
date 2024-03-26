import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

import SectionCard from './SectionCard';

import CreateSection from './CreateSection';
import { useSelector } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

const SectionArea = () => {

    const onDragEnd = (result) =>{};
  const Sections = useSelector((state) => state.sections);
  return (
    <Box className='bg-white w-full h-full gap-5 p-6 flex flex-col' >
          
      <CreateSection/>
      <DragDropContext onDragEnd={onDragEnd}>
        <Grid templateColumns='repeat(4, 1fr)' gap={2} >
        {Sections.length > 0 ? (
            Sections.map((section, index) => (
              <SectionCard key={section.id} title={section.name} index={section.id} id = {section.id} taskItem={section.tasks}/> 
            ))
          ) : null }
    </Grid>
      </DragDropContext>

    </Box>
  );
};

export default SectionArea;

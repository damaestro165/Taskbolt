import { Box, Button, Grid } from '@chakra-ui/react';
import React from 'react';

import SectionCard from './SectionCard';

import CreateSection from './CreateSection';
import { useSelector } from 'react-redux';

const SectionArea = () => {
  const Sections = useSelector((state) => state.sections);
  return (
    <Box className='bg-white w-full h-full gap-5 p-6 flex flex-col' >
      
    <Grid templateColumns='repeat(4, 1fr)' gap={2} >
        {Sections.length > 0 ? (
            Sections.map((section) => (
              <SectionCard key={section.name} title={section.name} /> 
            ))
          ) : null }
    </Grid>
      <CreateSection/>
    </Box>
  );
};

export default SectionArea;

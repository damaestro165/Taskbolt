import React from 'react';
import TopBar from './component/TopBar';
import SideBar from './component/SideBar';
import ProjectBoard from './component/ProjectBoard';
import { Box } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <>
      <TopBar />
      <Box className=' flex gap-[0.15rem]' bg='#f5f5f5'>
        <SideBar />
        <ProjectBoard />
      </Box>
    </>
  );
};

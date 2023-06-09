import {
  Box,
  Center,
  Divider,
  IconButton,
  Button,
  Text,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';
import React from 'react';
import StaredIcon from '../assets/Icons/StaredIcon';
import ChevondownIcon from '../assets/Icons/ChevondownIcon';
import MenuComp from './Menu';
import ShareIcon from '../assets/Icons/ShareIcon';
import { BiPlus } from 'react-icons/bi';
import ProjectInfoModal from './ProjectInfoModal';
import ShareModal from './ShareModal';

const ProjectBar = () => {
  return (
    <Box className='flex p-6 justify-between'>
      <Box className=' flex items-center gap-5'>
        <Text className=' text-xl font-semibold'>Team Microsaas</Text>
        <StaredIcon boxSize={6} />
        <ProjectInfoModal />
        <Center height='2rem'>
          <Divider
            orientation='vertical'
            borderWidth='.15rem'
            variant='solid'
          />
        </Center>
        <MenuComp title='Board View' />
      </Box>
      <Box className=' flex items-center gap-5'>
        <MenuComp title='Leaderboard' />
        <AvatarGroup>
          <Avatar name='T K' src='' border='1px' size='md' />
          <Avatar
            bg='#D9D9D9'
            icon={<BiPlus fontSize='1.5rem' color='#5720DD' />}
          />
        </AvatarGroup>
        <ShareModal />
      </Box>
    </Box>
  );
};

export default ProjectBar;

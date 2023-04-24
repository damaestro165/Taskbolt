import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  IconButton,
  useDisclosure,
  Button,
  HStack,
  Text,
  Spacer,
  Box,
  Divider,
  VStack,
  Avatar,
  Circle,
} from '@chakra-ui/react';
import ChevondownIcon from '../assets/Icons/ChevondownIcon';
import CreateIcon from '../assets/Icons/CreateIcon';
import ShareIcon from '../assets/Icons/ShareIcon';
import MoreIcon from '../assets/Icons/MoreIcon';
import { AiOutlinePlus } from 'react-icons/ai';
import PersonIcon from '../assets/Icons/PersonIcon';
import ArchivedIcon from '../assets/Icons/ArchivedIcon';
import DeleteIcon from '../assets/Icons/DeleteIcon';

import MemberMenu from './MemberMenu';

const ProjectInfoModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        bg='#e6e0f3'
        display='flex'
        alignItems='center'
        icon={<ChevondownIcon boxSize='1rem' />}
        onClick={onOpen}
      />

      <Modal isOpen={isOpen} onClose={onClose} size='sm'>
        <ModalOverlay />
        <ModalContent
          containerProps={{
            justifyContent: 'flex-start',
            paddingLeft: '17rem',
            paddingTop: '6rem',
          }}
        >
          <ModalBody paddingY={10} className='flex flex-col gap-4'>
            <Text>Project Action</Text>
            <HStack>
              <Text>Team Microsaas</Text>
              <Spacer />
              <CreateIcon boxSize={6} />
            </HStack>
            <HStack>
              <Text>Date Created</Text>
              <Spacer />
              <Box>
                <Text>08 March 2023 </Text>
                <Text>05:20 pm</Text>
              </Box>
            </HStack>
            <Divider />
            <Box className='flex flex-col gap-8'>
              <Text fontWeight='bold'>Members</Text>
              <HStack>
                <Avatar name='E B' src='' size='sm' />
                <Text>Erick Powel</Text>
                <Spacer />
                <Circle size='2rem' bg='#DCDCDC' fontWeight='extrabold'>
                  0
                </Circle>
                <MemberMenu />
              </HStack>
              <HStack>
                <Avatar name='E B' src='' size='sm' />
                <Text>Erick Powel</Text>
                <Spacer />
                <Circle size='2rem' bg='#DCDCDC' fontWeight='extrabold'>
                  0
                </Circle>
                <MemberMenu />
              </HStack>
            </Box>
            <Box
              as={Button}
              bg='#F5F5F5'
              color='brand.100'
              rightIcon={<PersonIcon boxSize={6} />}
              variant='solid'
              fontSize='md'
              p='1.5rem'
              border='1px'
              borderColor='#DCDCDC'
              width='full'
            >
              Add New Member
            </Box>
            <Divider />
            <HStack color='#5720DD'>
              <Text>Archived</Text>
              <Spacer />
              <ArchivedIcon boxSize={6} color='#5720DD' />
            </HStack>
            <HStack color='red'>
              <Text>Delete Project</Text>
              <Spacer />
              <DeleteIcon boxSize={6} />
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectInfoModal;

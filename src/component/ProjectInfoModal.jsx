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
} from '@chakra-ui/react';
import ChevondownIcon from '../assets/Icons/ChevondownIcon';
import CreateIcon from '../assets/Icons/CreateIcon';

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
            paddingLeft: '15rem',
            paddingTop: '7rem',
          }}
        >
          <ModalHeader>Project Action</ModalHeader>
          <ModalBody>
            <HStack>
              <Text>Team Microsaas</Text>
              <Spacer />
              <CreateIcon boxSize={6} />
            </HStack>
            <HStack>
              <Text>Team Microsaas</Text>
              <Spacer />
              <Box>
                <Text>08 March 2023 </Text>
                <Text>05:20 pm</Text>
              </Box>
            </HStack>
            <Divider />
            <Box>
              <Text>Members</Text>
              <HStack></HStack>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProjectInfoModal;

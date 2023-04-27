import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  HStack,
  Input,
} from '@chakra-ui/react';
import ShareIcon from '../assets/Icons/ShareIcon';

const ShareModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bg='#d5caf0'
        display='flex'
        alignItems='center'
        rightIcon={<ShareIcon boxSize='1.5rem' />}
        onClick={onOpen}
      >
        Share
      </Button>

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size='2xl'
      >
        <ModalOverlay />
        <ModalContent
          containerProps={{
            justifyContent: 'center',
            marginTop: '12rem',
          }}
        >
          <ModalCloseButton />
          <ModalBody padding='2rem'>
            <Text mb='2rem'>Share Project</Text>
            <Text mb='1rem'>Invite members with emails or username</Text>
            <HStack>
              <Input type='email' placeholder='eg. johnboyega@gmail.com' />
              <Button>Add As</Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareModal;

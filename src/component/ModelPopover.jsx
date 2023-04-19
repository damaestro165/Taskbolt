import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

const ModelPopover = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant='unstyled'>
        {children}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size='sm'>
        <ModalContent
          containerProps={{
            justifyContent: 'flex-start',
            paddingLeft: '40rem',
            paddingTop: '25rem',
          }}
        >
          <ModalBody>jgkldjsgljojgopskwgolkrokokdfo</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModelPopover;

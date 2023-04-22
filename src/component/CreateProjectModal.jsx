import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const CreateProjectModal = ({ childern }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {childern}

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>

          <ModalBody>
            <Text fontWeight='bold' mb='1rem'>
              You can scroll the content behind the modal
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateProjectModal;

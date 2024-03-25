import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)

  return (
    <>
    <Button
        as={Button}
        bg='#F5F5F5'
        color='brand.100'
        rightIcon={<AiOutlinePlus />}
        variant='solid'
        fontSize='md'
        py='1.5rem'
        border='1px'
        borderColor='#DCDCDC'
        fontWeight='light'
        width='19.75rem'
        onClick={onOpen}
      >
        Add New Section
      </Button>
      

      <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Section Name</FormLabel>
              <Input ref={initialRef} placeholder='To do ..' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddTask
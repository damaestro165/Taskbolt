import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addSection } from '../store';

const CreateSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef('')
    const dispatch = useDispatch();
     
  
    const handleAddSection = (e) => {
      e.preventDefault();
      const sectionName = initialRef.current.value;
      dispatch(addSection(sectionName));
      initialRef.current.value = ''
    
    }

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
              <Input ref={initialRef} type='text'  placeholder='To do ..' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleAddSection}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateSection
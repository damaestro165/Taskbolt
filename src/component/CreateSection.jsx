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
      const sectionItem = {
        name: initialRef.current.value,
        tasks:[]
      }
      dispatch(addSection(sectionItem));
      initialRef.current.value = ''
      onClose()
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
        <ModalContent >
          <form onSubmit={handleAddSection}>
            <ModalHeader>Create Section</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Section Name</FormLabel>
              <Input ref={initialRef} type='text'  placeholder='To do ..' required />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onSubmit={handleAddSection} type='submit'>
              Add
            </Button>
            <Button onClick={onClose} >Cancel</Button>
          </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateSection
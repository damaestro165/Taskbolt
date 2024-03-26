import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Box, Textarea } from '@chakra-ui/react'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import {  addTaskItem } from '../store';

const CreateTask = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const taskDesRef = React.useRef('')
    const taskTitleRef = React.useRef('')
    const dispatch = useDispatch();
    
    const handleAddTask = (e) => {
            e.preventDefault();
              
              dispatch(addTaskItem({
              sectionId: id,
              title: taskTitleRef.current.value,
              description: taskDesRef.current.value
      }));
      onClose()
    
    }

  return (
    <>
     <Box
          display='flex'
          as={Button}
          bg='#F5F5F5'
          rightIcon={<AiOutlinePlus />}
          variant='solid'
          fontSize='md'
          py='1rem'
          width='full'
          onClick={onOpen}
        >
          Add task
        </Box>
      

      <Modal
       
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent >
         <form onSubmit={handleAddTask}>
          <ModalHeader >Create Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task Title </FormLabel>
              <Input ref={taskTitleRef} type='text'  placeholder=' Create ...' required />
            </FormControl>
             <FormControl>
              <FormLabel>Task Description</FormLabel>
              <Textarea placeholder='Brief description' ref={taskDesRef}   required/>
               </FormControl>
            </ModalBody>
             <ModalFooter>
                <Button colorScheme='blue' mr={3} onSubmit={handleAddTask} type='submit'>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
             </ModalFooter>
        
         </form>
        
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateTask
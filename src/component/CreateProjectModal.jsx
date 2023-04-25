import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Link,
  Icon,
  IconButton,
  HStack,
  Spacer,
  Input,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Image,
  Center,
  FormControl,
  FormLabel,
  FormHelperText,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsArrowLeft } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import DisplayImage from '../assets/otpimage.png';

const CreateProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        rightIcon={<AiOutlinePlus />}
        bg='white'
        variant='solid'
        color='brand.100'
        fontSize='md'
        py='1.5rem'
      >
        Create Project
      </Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        size='5xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody margin={0} padding={0}>
            <Box className='h-[35rem] flex'>
              <Box className='w-1/2 p-5 flex flex-col justify-between h-full'>
                <HStack>
                  <Text>New Project</Text>
                  <Spacer />
                  <Text>Back</Text>
                </HStack>
                {/* <VStack>
                  <Text>Add Members To Project</Text>
                  <Text>Add members with emails or usernames. </Text>
                  <Input type='email' placehoder='eg. johnboyega@gmail.com' />
                  <Button width='full'>Start Project</Button>
                </VStack> */}
                <VStack>
                  <Box
                    as='form'
                    width='full'
                    className='flex flex-col p-5 gap-5'
                  >
                    <FormControl>
                      <FormLabel>Project Name</FormLabel>
                      <Input type='email' placeholder='Taskbolt' width='full' />
                    </FormControl>
                    <FormControl>
                      <FormLabel>Project Description</FormLabel>
                      <Textarea placeholder='Text here ...' />
                    </FormControl>
                    <Button width='full'>Continue</Button>
                  </Box>
                </VStack>
                <VStack>
                  <HStack>
                    <Box>
                      <Text>Step 1</Text>
                      <Text>Set project name and description</Text>
                    </Box>
                    <Spacer />
                    <Box>
                      <Text>Step 2</Text>
                      <Text>Add members to project</Text>
                    </Box>
                  </HStack>
                  <Slider
                    aria-label='slider'
                    step={50}
                    value={0}
                    focusThumbOnChange={false}
                    isReadOnly
                    size='lg'
                  >
                    <SliderTrack>
                      <SliderFilledTrack bg='#5720DD' />
                    </SliderTrack>
                    <SliderThumb
                      bg='#5720DD'
                      border='2px'
                      borderColor='white'
                    />
                  </Slider>
                </VStack>
              </Box>
              <Box className='w-1/2 bg-[#F5F5F5] py-5 flex flex-col overflow-hidden '>
                <Box className='px-5 self-end'>
                  <IconButton icon={<IoMdClose />} onClick={onClose} />
                </Box>
                <Center className=' w-full mt-10 ml-[10rem]'>
                  <Image
                    src={DisplayImage}
                    className=' w-[55rem] h-[24rem]   object-cover rounded-md  '
                  />
                </Center>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateProjectModal;

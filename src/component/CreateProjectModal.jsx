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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import DisplayImage from '../assets/otpimage.png';
import { BsDashLg } from 'react-icons/bs';

const CreateProjectModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

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
                  <Button
                    onClick={() => {
                      setStep(step - 1);
                      setProgress(progress - 50);
                    }}
                    isDisabled={step === 1}
                    variant='unstyled'
                  >
                    Back
                  </Button>
                </HStack>
                {step === 1 ? (
                  <StepOne
                    step={step}
                    progress={progress}
                    setProgress={setProgress}
                    setStep={setStep}
                  />
                ) : (
                  <StepThree />
                )}
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
                    value={progress}
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

const StepOne = ({ setStep, step, progress, setProgress }) => {
  const [projectname, setProjectname] = useState('');
  const [projectDesc, setProjecDesc] = useState('');

  return (
    <VStack>
      <Box as='form' width='full' className='flex flex-col p-5 gap-5'>
        <FormControl>
          <FormLabel>Project Name</FormLabel>
          <Input
            type='text'
            placeholder='Taskbolt'
            value={projectname}
            onChange={(e) => setProjectname(e.target.value)}
            width='full'
            h='3rem'
            on
          />
        </FormControl>
        <FormControl>
          <FormLabel>Project Description</FormLabel>
          <Input
            type='text'
            placeholder='A task management app .......'
            value={projectDesc}
            width='full'
            h='3rem'
            onChange={(e) => setProjecDesc(e.target.value)}
          />
        </FormControl>

        <Button
          width='full'
          h='3.5rem'
          onClick={() => {
            setStep(step + 1);
            setProgress(progress + 50);
          }}
        >
          Continue
        </Button>
      </Box>
    </VStack>
  );
};

const StepThree = () => {
  const [emailLists, setemailLists] = useState([]);
  const [email, setEmail] = useState('');
  const handleAddToEmailList = () => {
    if (email === '') return setemailLists(emailLists);
    setemailLists([...emailLists, email]);
  };
  const handleRemove = (item) => {
    const fliterdEmail = emailLists.filter((email) => email !== item);
    setemailLists(fliterdEmail);
  };

  return (
    <Box className=' p-2 flex flex-col gap-5'>
      <Box>
        <Text fontWeight='bold' fontSize='sm'>
          Add Members To Project
        </Text>
        <Text fontSize='sm'>Add members with emails or usernames. </Text>
      </Box>
      <InputGroup size='lg'>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='eg. johnboyega@gmail.com'
          _placeholder={{ fontSize: '1rem' }}
        />
        <InputRightElement width='5rem'>
          <Button size='md' onClick={handleAddToEmailList}>
            Add
          </Button>
        </InputRightElement>
      </InputGroup>

      <Box
        className={` ${
          emailLists.length <= 3
            ? 'flex flex-col gap-2'
            : 'flex flex-col gap-2 overflow-y-scroll h-40'
        } `}
      >
        {emailLists.map((item) => (
          <Box
            bg='#F5F5F5'
            variant='solid'
            fontSize='md'
            p='1rem'
            width='full'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            height='3rem'
            borderRadius={5}
            key={item}
          >
            <Text> {item}</Text>
            <IconButton
              size={6}
              bg='#DCDCDC'
              padding={1}
              icon={<BsDashLg color='blue' />}
              onClick={() => handleRemove(item)}
            />
          </Box>
        ))}
      </Box>

      <Button width='full' backgroundColor='#5720DD' p='1.5rem' color='white'>
        Share Project
      </Button>
    </Box>
  );
};

export default CreateProjectModal;

import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Text,
  HStack,
  Input,
  VStack,
  Box,
  IconButton,
} from '@chakra-ui/react';
import ShareIcon from '../assets/Icons/ShareIcon';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiChevronDown } from 'react-icons/bi';
import { BsDashLg } from 'react-icons/bs';

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
            <Text mb='2rem' fontSize='1.2rem' fontWeight='extrabold'>
              Share Project
            </Text>
            <Text mb='1rem' fontWeight='bold'>
              Invite members with emails or username
            </Text>
            <VStack spacing={5}>
              <HStack>
                <Input
                  type='email'
                  placeholder='eg. johnboyega@gmail.com'
                  width='25rem'
                />
                <Button
                  onClick={onOpen}
                  rightIcon={<AiOutlinePlus />}
                  bg='#DCDCDC'
                  variant='solid'
                  color='brand.100'
                  fontSize='md'
                  py='1.5rem'
                >
                  Add As
                </Button>
              </HStack>
              <HStack>
                <Box
                  onClick={onOpen}
                  bg='#F5F5F5'
                  variant='solid'
                  fontSize='md'
                  p='1rem'
                  width='25rem'
                  display='flex'
                  alignItems='center'
                  justifyContent='space-between'
                  height='3rem'
                  borderRadius={5}
                >
                  <Text> johnboyega@gmail.com</Text>
                  <IconButton
                    size={6}
                    bg='#DCDCDC'
                    padding={1}
                    icon={<BsDashLg color='blue' />}
                  />
                </Box>
                <Button
                  rightIcon={<BiChevronDown />}
                  onClick={onOpen}
                  bg='#DCDCDC'
                  variant='solid'
                  fontSize='md'
                  py='1.5rem'
                  fontWeight='light'
                >
                  Member
                </Button>
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ShareModal;
